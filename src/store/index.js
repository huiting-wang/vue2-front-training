import Vue from 'vue';
import Vuex from 'vuex';

// 存取 vuex 的狀態至 localStorage 套件
import createPersistedState from 'vuex-persistedstate';

// === 引入模組清單引入 ===
import layout from '@/store/modules/layout';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
  },
  plugins: [
    createPersistedState({
      paths: ['layout.sidebarOpened'],
    }),
  ],
});
