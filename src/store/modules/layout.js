// 狀態管理模組
import { Store } from "vuex";
import { SET_SIDEBAR, SET_SIDEBAR_HOVER } from "@/store/mutation-types";

export default {
  namespaced: true,
  state: {
    // 側選單開合狀態 (漢堡選單觸發)
    sidebarOpened: true,
  },
  mutations: {
    [SET_SIDEBAR](state, isOpened) {
      state.sidebarOpened = isOpened;
    },
  },
  actions: {
    /**
     * 切換 側邊欄狀態 (漢堡選單觸發)
     *
     * @param {Store} context - 狀態倉儲
     */
    toggleSideBar({ commit, state }) {
      commit(SET_SIDEBAR, !state.sidebarOpened);
    },
    /**
     * 設定 側邊欄狀態 (漢堡選單觸發)
     *
     * @param {Store} context - 狀態倉儲
     * @param {boolean} isOpened - 開關狀態
     */
    setSideBar({ commit }, isOpened) {
      commit(SET_SIDEBAR, isOpened);
    },
  },
};
