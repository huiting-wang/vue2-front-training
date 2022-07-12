<template>
  <div class="feature-page">
    <div class="markdown-body">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="主題資訊" name="feature"><InfoMd /></el-tab-pane>
        <el-tab-pane label="前台功能需求" name="front"
          ><FeatureMd
        /></el-tab-pane>
        <el-tab-pane label="後台功能需求" name="back">Pending</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import InfoMd from '@/markdown/info.md';
import FeatureMd from '@/markdown/feature.md';

export default {
  name: 'FeaturePage',
  components: { InfoMd, FeatureMd },
  data() {
    return {
      activeName: 'feature',
    };
  },
};
</script>
