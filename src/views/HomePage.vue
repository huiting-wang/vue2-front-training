<template>
  <div class="home-page">
    <div style="text-align: center">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

    <div class="markdown-body">
      <RulesMd />
    </div>
  </div>
</template>

<script>
import RulesMd from "@/markdown/rules.md";

export default {
  name: "HomePage",
  components: { RulesMd },
};
</script>
