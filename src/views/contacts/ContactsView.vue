<template>
  <div>
    <page-header>
      <template v-slot:title>
        <p class="decs">大连民族大学</p>
      </template>
      <template v-slot:addIcon>
        <span class="sym iconfont">&#xe69b;</span>
      </template>
    </page-header>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide.vue";
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "ContactsView",
  components: {
    FooterGuide,
    PageHeader,
  },
};
</script>

<style scoped></style>
