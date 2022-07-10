/**
 * 對象是否為數字
 *
 * @param {number} value - 對象
 * @returns  {boolean} - 是否為數字
 */
export const isNumber = (value) => {
  return typeof value === "number" && !Number.isNaN(value);
};

/**
 * 對象是否為字串
 *
 * @param {string} string - 字串
 * @returns {boolean} - 是否為字串
 */
export const isString = (string) => {
  return typeof string === "string";
};

/**
 * 對象是否為陣列
 *
 * @param {Array} arr - 對象
 * @returns {boolean} - 是否為陣列
 */
export const isArray = (arr) => {
  return Array.isArray(arr);
};

/**
 * 對象是否為方法
 *
 * @param {Function} func - 對象
 * @returns {boolean} - 是否為方法
 */
export const isFunction = (func) => {
  return func instanceof Function;
};
