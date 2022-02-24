<template>
  <div>
    <page-header>
      <template v-slot:title>
        <p class="decs">我</p>
      </template>
      <template v-slot:searchIcon>
        <span class="sym iconfont"></span>
      </template>
      <template v-slot:addIcon>
        <span class="sym iconfont"></span>
      </template>
    </page-header>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide.vue";
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "MineView",
  components: {
    FooterGuide,
    PageHeader,
  },
};
</script>

<style scoped></style>
