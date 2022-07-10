import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  fallbackLocale: "en",
});

// 已加載語系清單
const loadedLanguages = [];

/**
 * 配置當前語系
 *
 * @param {string} lang - 語系代碼
 * @returns {string}
 */
function setI18nLanguage(lang) {
  i18n.locale = lang;

  // 設置 HTML lang 標籤
  document.querySelector("html").setAttribute("lang", lang);

  return lang;
}

/**
 * 非同步載入語系
 *
 * @param {string} lang - 語系代碼
 * @returns {string}
 */
export function loadLanguageAsync(lang) {
  // 檢查載入語系是否與當前一致
  if (i18n.locale !== lang) {
    // 語系不存在於語系包中，載入語系檔
    if (!loadedLanguages.includes(lang)) {
      // 引入語系檔
      return import(
        /* webpackChunkName: "lang-[request]" */ `@/locales/lang/${lang}.js`
      ).then((message) => {
        // 設置 i18n 語系物件
        i18n.setLocaleMessage(lang, message.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(lang);
      });
    }
    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve(lang);
}

/**
 * 語系選取清單
 */
export const languageList = {
  "zh-Hant": "繁",
  "zh-Hans": "簡",
  en: "English",
};

// 載入當前語系
loadLanguageAsync();

export default i18n;
