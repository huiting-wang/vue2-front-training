<template>
  <div class="subject-page">
    <div class="markdown-body">
      <InfoMd />
    </div>
  </div>
</template>

<script>
import InfoMd from '@/markdown/info.md';

export default {
  name: 'SubjectPage',
  components: { InfoMd },
};
</script>
