# vue-front-exam

# 專案目錄結構

```text
├─ .vscode                   // VSCode 設定目錄
├─ public                    // 公用資源目錄
│ ├─ favicon.ico             // 網頁圖示
│ ├─ index.html              // 頁面入口檔，webpack打包的js和css会自動注入此頁面中
├─ src                       // 源碼主目錄
│ ├─ assets                  // 靜態資源目錄，css、js、font等
│ ├─ components              // 組件目錄，系統公用小組件
│ ├─ router                  // 路由配置目錄
│ ├─ store                   // Vuex 配置目錄
│ ├─ views                   // 視圖目錄 (router-view)
│ ├─ App.vue                 // 預設首頁入口
│ ├─ main.js                 // 程式入口檔案，初始化vue實例、所需外掛與載入各公用元件
├─ tests                     // 前端單元、e2e等測試項目目錄
├─ .eslintignore             // Eslint 忽略配置文件
├─ .eslintrc.js              // Eslint 配置文件
├─ .gitignore                // Git 忽略配置文件
├─ babel.config.js           // Babel 選項設定文件
├─ cypress.json              // cypress E2E 選項設定文件
├─ jest.config.js            // Jest Unit Test 選項設定文件
├─ jsconfig.js               // Vscode JS 根目錄選項文件
├─ package-lock.json         // 依賴包版本管理文件
├─ package.json              // 依賴包基礎資訊
├─ README.md                 // 項目說明書
└─ vue.config.js             // Vue 基礎選項設定
```
---

# Installation
To install this package, use one of the following commands. You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager (e.g. n or nvm).

```
npm install -g @vue/cli@5.0.6
```

After installation, you will have access to the `vue` binary in your command line.

---

# NPM Scripts

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Check every module defined in `package.json` and if there is a newer version in the NPM registry.
```
npm outdated
```

or install [npm-check](https://www.npmjs.com/package/npm-check) plugin

```
npm-check -u
```

### Export webpack config file
```
vue inspect > output.js
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
