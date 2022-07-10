import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/";
import store from "@/store/";

// Vue i18n 引用入口檔
import i18n from "@/locales/i18n";

// Element UI 元件引用入口檔
import "@/plugins/element-ui";

// 全域註冊元件
import "@/components/globally";

// 引入模擬 API
import { mockXHR } from "../mock/server";

// 引入 Material Design Icon
import "@mdi/font/css/materialdesignicons.css";

// Markdown 樣式
import "github-markdown-css";

// 代碼高亮
import "highlight.js/styles/github.css";

// 引入基礎樣式
import "@/styles/index.scss";

// 註冊 promise finally 方法 (Axios支援)
require("promise.prototype.finally").shim();

// Mock Server
mockXHR();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
