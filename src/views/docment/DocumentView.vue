<template>
  <div>
    <page-header>
      <template v-slot:title>
        <p class="decs">文档</p>
      </template>
      <template v-slot:addIcon>
        <span class="sym iconfont">&#xe727;</span>
      </template>
    </page-header>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide.vue";
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "DocumentView",
  components: {
    FooterGuide,
    PageHeader,
  },
};
</script>

<style scoped></style>
