<template>
  <el-container>
    <el-aside width="240px" style="background-color: #2c3e50">
      <layout-sidebar>
        <!-- 巢狀選單項目 -->
        <LayoutNested
          v-for="route in menuRoutes"
          :key="route.path"
          :item="route"
        />
      </layout-sidebar>
    </el-aside>

    <el-container>
      <el-header class="layout-navbar" height="48px">
        <!-- 漢堡選單 -->
        <div class="layout-navbar__hamburger">
          <ExamIcon title="menu" color="#2c3e50" />
        </div>
      </el-header>

      <!-- 主要內容 -->
      <el-main id="layout-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { routes } from "@/router/routes";
import LayoutSidebar from "@/components/layout/Sidebar.vue";
import LayoutNested from "@/components/layout/Nested.vue";

export default {
  name: "LayoutIndex",
  components: { LayoutSidebar, LayoutNested },
  computed: {
    menuRoutes() {
      return routes[0].children;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0px 20px;
  background-color: $white;
  z-index: 2000;
  @include setFlex($jc: flex-start);
  @include shadow(0px 1px 3px rgba(0, 0, 0, 0.16));

  .layout-navbar {
    &__hamburger {
      cursor: pointer;
    }
  }
}

#layout-main {
  position: relative;
  margin: 0;
  height: calc(100vh - 48px);
}
</style>
