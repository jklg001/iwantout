<template>
  <div id="app">
    <router-view />
    <nav>
      <router-link to="/">消息</router-link> |
      <router-link to="/document">文档</router-link> |
      <router-link to="/contacts">通讯录</router-link> |
      <router-link to="/workspace">工作台</router-link> |
      <router-link to="/mine">我</router-link>
    </nav>
  </div>
</template>
<style></style>
