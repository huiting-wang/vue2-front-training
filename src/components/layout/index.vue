<template>
  <el-container
    :class="['layout-container', { 'sidebar-opend': sidebarOpened }]"
  >
    <el-aside width="210px" style="background-color: #2c3e50">
      <layout-sidebar>
        <!-- 巢狀選單項目 -->
        <LayoutNested
          v-for="route in menuRoutes"
          :key="route.path"
          :item="route"
        />
      </layout-sidebar>
    </el-aside>

    <el-container class="layout-container__main">
      <el-header class="layout-container__navbar" height="48px">
        <!-- 漢堡選單 -->
        <div class="layout-container__hamburger" @click="toggleSideBar">
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
import { mapState } from 'vuex';
import { routes } from '@/router/routes';
import LayoutSidebar from '@/components/layout/Sidebar.vue';
import LayoutNested from '@/components/layout/Nested.vue';

export default {
  name: 'LayoutIndex',
  components: { LayoutSidebar, LayoutNested },
  computed: {
    ...mapState({
      sidebarOpened: (state) => state.layout.sidebarOpened,
    }),
    menuRoutes() {
      return routes[0].children;
    },
  },
  methods: {
    /**
     * 左側選單收合事件
     */
    toggleSideBar() {
      this.$store.dispatch('layout/toggleSideBar');
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  .el-aside {
    width: 64px !important;
    transition: width 0.25s;
    -webkit-transition: width 0.25s;
  }

  &__main {
    margin: 0;
    transition: margin-left 0.25s;
    -webkit-transition: margin-left 0.25s;

    #layout-main {
      position: relative;
      margin: 0;
      height: calc(100vh - 48px);
    }
  }

  &__navbar {
    padding: 0px 20px;
    background-color: $white;
    z-index: 2000;
    @include setFlex($jc: flex-start);
    @include shadow(0px 1px 3px rgba(0, 0, 0, 0.16));
  }

  &__hamburger {
    cursor: pointer;
  }

  &.sidebar-opend {
    .el-aside {
      width: 210px !important;
    }
  }
}
</style>
