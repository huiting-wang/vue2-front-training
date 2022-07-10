<template>
  <el-container>
    <el-aside width="256px" style="background-color: #2c3e50">
      <LayoutSidebar />
    </el-aside>
  </el-container>
</template>

<script>
import LayoutSidebar from "@/components/layout/Sidebar.vue";

export default {
  name: "LayoutIndex",
  components: { LayoutSidebar },
};
</script>
