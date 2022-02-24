<template>
  <div class="header-area">
    <slot name="title">
      <p class="decs">消息</p>
    </slot>
    <div class="fun">
      <slot name="addIcon">
        <span class="sym iconfont">&#xe726;</span>
      </slot>
      <slot name="searchIcon">
        <span class="sym iconfont">&#xe623;</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
.header-area {
  height: 1rem;
  background-color: #3b74c1;
}
.header-area {
  position: relative;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
}
.header-area .fun {
  position: absolute;
  float: right;
  right: 0;
  width: 2rem;
  font-size: 0.3rem;
  bottom: 0.3rem;
  color: #fff;
}
.header-area .decs {
  position: absolute;
  color: #fff;
  bottom: 0.3rem;
  font-size: 0.3rem;
  left: 0;
  right: 0;
}
.header-area .fun .sym {
  float: right;
  width: 50%;
  font-size: 0.35rem;
}
</style>
