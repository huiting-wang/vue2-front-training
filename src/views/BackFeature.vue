<template>
  <div class="back-feature-page">
    <div class="markdown-body">
      <BackFeatureMd />
    </div>
  </div>
</template>

<script>
import BackFeatureMd from '@/markdown/back-feature.md';

export default {
  name: 'BackFeature',
  components: { BackFeatureMd },
};
</script>
