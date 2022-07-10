<template>
  <el-menu
    class="layout-sidebar"
    :collapse="false"
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
export default {
  name: "LayoutSidebar",
  data() {
    return {
      // 當前頁
      activeIndex: "",
    };
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

  @include element(wrapper) {
    position: relative;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: left;
  }
}

.el-menu--collapse {
  width: 56px;

  &::v-deep .el-submenu__icon-arrow {
    opacity: 0 !important;
  }
}
</style>
