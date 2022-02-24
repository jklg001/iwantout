<template>
  <div>
    <footer-guide></footer-guide>
    <page-header></page-header>
  </div>
</template>
<script>
import FooterGuide from "@/components/FooterGuide.vue";
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "MessageView",
  components: {
    FooterGuide,
    PageHeader,
  },
};
</script>
<style scoped></style>
