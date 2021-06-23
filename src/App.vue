<template>
  <div id="app">
    <!-- 顶部模块 -->
    <nav-bar></nav-bar>
    <!-- 侧边模块 -->
    <broad-side></broad-side>
    <!-- 底部模块 -->
    <tab-bar></tab-bar>
    <!-- 路由 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/navBar";
import broadSide from "@/components/common/broadside/broadSide";
import tabBar from "@/components/common/tabbar/tabBar";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    navBar,
    broadSide,
    tabBar,
  },
};
</script>

<style lang="less">
@import "./assets/css/Normalize.css";
</style>
