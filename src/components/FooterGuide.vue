<template>
  <div>
    <nav class="guide-area">
      <router-link class="nav-link" to="/" exact>
        <span class="iconfont iconfont-msg">&#xe61c;</span>
        <div class="msg txt">消息</div>
      </router-link>
      <router-link class="nav-link" to="/document" exact>
        <span class="iconfont iconfont-msg">&#xe62a;</span>
        <div class="doc txt">文档</div>
      </router-link>
      <router-link class="nav-link" to="/contacts" exact>
        <span class="iconfont iconfont-msg">&#xe61d;</span>
        <div class="con txt">通讯录</div>
      </router-link>
      <router-link class="nav-link" to="/workspace" exact>
        <span class="iconfont iconfont-msg">&#xe63e;</span>
        <div class="works txt">工作台</div>
      </router-link>
      <router-link class="nav-link" to="/mine" exact>
        <span class="iconfont iconfont-msg">&#xe8a0;</span>
        <div class="mine txt">我</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "FooterGuide",
};
</script>

<style scoped>
.guide-area {
  position: absolute;
  height: 1rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fbfcfe;
}
.guide-area .nav-link {
  position: relative;
  display: block;
  float: left;
  height: 1rem;
  width: 20%;
  text-align: center;
  color: #565759;
}
.guide-area .nav-link .txt {
  position: absolute;
  bottom: 0.1rem;
  font-size: 0.2rem;
  left: 0;
  right: 0;
}
.guide-area .nav-link .iconfont {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.12rem;
  font-size: 0.43rem;
}
.guide-area .nav-link.active {
  color: #277eef;
}
</style>
