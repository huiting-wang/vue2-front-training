import { toArray } from "lodash";

/**
 * 正規化字串
 * - 全部小寫
 * - 移除特殊字元
 * - 移除空白
 *
 * @param {string} target - 要正規化的字串
 * @returns {string} - 正規化的字串
 */
export const regexString = (target) => {
  return target
    .toString()
    .toLowerCase()
    .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
    .replace(/\s/g, "");
};

/**
 * 將物件中的指定 key map 成陣列
 *
 * @param {object} target - 物件
 * @param {string} key - 指定 key
 * @returns {object} - 物件，其中指定 key 已轉換成陣列
 */
export const objectMapToArray = (target, key) => {
  const mapping = (target, key) => {
    if (target[key]) {
      const tempKeyValue = toArray(target[key]);
      let returnTarget = { ...target };
      returnTarget[key] = tempKeyValue.map((item) => mapping(item));
      return returnTarget;
    } else {
      return target;
    }
  };
  return mapping(target, key);
};

/**
 * 產生亂數序號
 *
 * @returns {string} 回傳亂數序號
 */
export function uuid() {
  let currentDate = Date.now();

  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    //use high-precision timer if available
    currentDate += performance.now();
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (code) => {
    let randowID = (currentDate + Math.random() * 16) % 16 | 0;
    currentDate = Math.floor(currentDate / 16);
    return (code === "x" ? randowID : (randowID & 0x3) | 0x8).toString(16);
  });
}
