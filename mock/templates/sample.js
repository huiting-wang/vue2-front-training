import Mock from "mockjs";
import { orderBy, isString } from "lodash";
import { regexString } from "@/utils/";

const defaultOpt = {
  // api 網址
  apiUrl: "/mock/v1/sample/info",
  // 延遲時間
  timeout: 50,
  // 模擬資料暫存
  resultList: [],
  // 資料數
  count: 2578,
  // 可篩選欄位
  filterColumns: ["name", "email", "phone", "desc", "date"],
};

// 模擬傳送延遲時間
Mock.setup({
  timeout: defaultOpt.timeout,
});

Mock.Random.extend({
  // 增加手機格式
  phone: function () {
    let phonePrefixs = "09";
    // Number()
    return this.pick(phonePrefixs) + Mock.mock(/\d{2}\-\d{6}/);
  },
  // 增加網址格式
  http: function () {
    let httpPrefixs = "http://";
    return this.pick(httpPrefixs) + Mock.mock(/.{1,90}/);
  },
  // tax: function () {
  //   return Mock.mock(/[A-Za-z0-9]{1,20}/);
  // },
});

// 模擬資料生成
for (let i = 0; i < defaultOpt.count; i++) {
  defaultOpt.resultList.push(
    Mock.mock({
      id: "@increment",
      name: "@name(true)",
      email: "@email()",
      phone: "@phone",
      desc: "@paragraph(1, 1)",
      date: Mock.Random.now("yyyy-MM-dd"),
    })
  );
}

/**
 * 欄位篩選
 *
 * @param {Array} data - 資料
 * @param {string} keyword - 關鍵字
 * @returns {Array}
 */
function doFilter(data = [], keyword = "") {
  if (!isString(keyword) || data.length <= 0) return;

  // 字串不限制大小寫與去除空白
  let regexpResult = new RegExp(regexString(keyword), "ig");

  // 篩選物件陣列
  return data.filter((obj) => {
    // 組合一個新字串
    const scanValue = Object.keys(obj).reduce((res, key) => {
      // 篩選可搜尋欄位
      return defaultOpt.filterColumns.includes(key) ? res + obj[key] : res;
    }, "");

    // 比對正則條件字串
    return scanValue.match(regexpResult);
  });
}

export default [
  // 取得 全部資料清單
  {
    url: defaultOpt.apiUrl,
    type: "get",
    response: (res) => {
      // Client 端查詢參數
      const { page = 0, per_page = 10, sort, keyword } = res.query;

      // 分頁變數轉型 (string => number)
      let newPage = parseInt(page);
      let newPerPage = parseInt(per_page);

      // 處理排序字串
      let sortArray = sort ? sort.split("|") : [];
      // 模擬資料暫存
      let mockList = [];

      // 處理升降冪排序
      if (sortArray[0] && sortArray[1]) {
        mockList = doFilter(
          orderBy(
            defaultOpt.resultList,
            [
              (item) => {
                return item[sortArray[0]];
              },
            ],
            [sortArray[1]]
          ),
          keyword
        );
      } else {
        mockList = doFilter(defaultOpt.resultList, keyword);
      }

      // === 處理分頁 ===
      let minData = newPage > 0 ? (newPage - 1) * newPerPage : 0;
      let maxData = minData + newPerPage;
      const pageList = mockList.slice(minData, maxData);

      // 回傳介面格式
      return {
        code: 200,
        from: mockList.length > 0 ? minData + 1 : 0,
        to:
          pageList?.length >= newPerPage ? maxData : minData + pageList.length,
        per_page: newPage,
        total: mockList.length > 0 ? mockList.length : 0,
        list: newPage > 0 ? pageList : mockList,
      };
    },
  },
  // 新增 單筆資料
  {
    url: defaultOpt.apiUrl,
    type: "post",
    response: (res) => {
      const params = res?.body;
      let lastData = defaultOpt.resultList[defaultOpt.resultList.length - 1];
      let newID = Math.abs(lastData.id) + 1;
      let newData = {
        id: newID.toString(),
        name: params.name,
        email: params.email,
        phone: params.phone,
        desc: params.desc,
        date: Mock.Random.now("yyyy-MM-dd"),
      };

      defaultOpt.resultList.push.apply(defaultOpt.resultList, [newData]);

      // 回傳介面格式
      return {
        code: 200,
        list: defaultOpt.resultList,
        message: "儲存成功!",
      };
    },
  },
  // 更新 單筆資料
  {
    url: defaultOpt.apiUrl,
    type: "put",
    response: (res) => {
      const { id, name, email, phone, desc } = res.body;
      const updateData = {
        id: id,
        name: name,
        email: email,
        phone: phone,
        desc: desc,
        date: Mock.Random.now("yyyy-MM-dd"),
      };

      // 更新資料
      defaultOpt.resultList.map((obj) => {
        if (obj.id === id) {
          obj.name = name;
          obj.email = email;
          obj.phone = phone;
          obj.desc = desc;
          obj.date = Mock.Random.now("yyyy-MM-dd");
        }
      });

      // 回傳介面格式
      return {
        code: 200,
        data: updateData,
        message: "資料已變更!",
      };
    },
  },
  {
    url: defaultOpt.apiUrl,
    type: "delete",
    response: (res) => {
      const { id } = res.query;

      defaultOpt.resultList.map((obj, i) => {
        if (obj.id === Number(id)) {
          defaultOpt.resultList.splice(i, 1);
        }
      });

      // 回傳介面格式
      return {
        code: 200,
        message: "資料刪除成功!",
      };
    },
  },
];
