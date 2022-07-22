<template>
  <div class="front-feature-page">
    <div class="markdown-body">
      <FrontFeatureMd />
    </div>
  </div>
</template>

<script>
import FrontFeatureMd from '@/markdown/front-feature.md';

export default {
  name: 'FrontFeature',
  components: { FrontFeatureMd },
};
</script>
