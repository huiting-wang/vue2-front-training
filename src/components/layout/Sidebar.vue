<template>
  <el-menu
    class="layout-sidebar"
    :collapse="!sidebarOpened"
    :default-active="activeIndex"
    background-color="#2c3e50"
    text-color="#AAABAB"
    router
  >
    <!-- 選單內容 -->
    <div class="layout-sidebar__wrapper">
      <slot></slot>
    </div>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LayoutSidebar",
  data() {
    return {
      // 當前頁
      activeIndex: "",
    };
  },
  computed: {
    ...mapState({
      sidebarOpened: (state) => state.layout.sidebarOpened,
    }),
  },
  watch: {
    $route(to) {
      this.activeIndex = to.name;
    },
  },
  mounted() {
    this.activeIndex = this.$route.name;
  },
};
</script>

<style lang="scss" scoped>
@include component(layout, sidebar) {
  z-index: 1999;
  border: none;

  @include element(wrapper) {
    position: relative;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: left;
  }
}

.el-menu--collapse {
  width: 64px;

  &::v-deep .el-submenu__icon-arrow {
    opacity: 0 !important;
  }
}
</style>
