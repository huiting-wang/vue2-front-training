import Layout from "@/components/layout/";

/**
 * 路由鍵值註解
 *
 * name: '路由名稱'                路由名稱可利用於 <keep-alive> (如有配置必須設定)
 * patch: '路徑'                  路徑名稱
 * redirect: '轉導路徑'            路由轉導
 * component: '視圖元件'           視圖元件位置
 * props: true                   是否可傳遞參數
 * meta : {
    title: '頁面抬頭名稱'          路由頁面抬頭名稱
    icon: '圖示名稱'              Material Design Icons
  }
 */

export const routes = [
  {
    // 首頁
    name: "homePage",
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        name: "homedIndex",
        path: "home",
        component: () => import("@/views/HomePage"),
        meta: {
          icon: "home",
          title: "團隊開發規範",
        },
      },
    ],
  },
];
