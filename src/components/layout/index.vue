<template>
  <el-container>
    <el-aside width="240px" style="background-color: #2c3e50">
      <layout-sidebar>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">Navigator One</span>
          </template>
          <el-menu-item-group>
            <span slot="title">Group One</span>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">item four</span>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">Navigator Four</span>
        </el-menu-item>
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
      <el-main id="exam-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutSidebar from "@/components/layout/Sidebar.vue";

export default {
  name: "LayoutIndex",
  components: { LayoutSidebar },
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

#exam-main {
  position: relative;
  margin: 0;
  height: calc(100vh - 48px);
}
</style>
