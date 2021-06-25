<template>
  <div class="found">
    <found-bar></found-bar>
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
// 引入组件
import foundBar from "./childcontent/foundBar";

export default {
  name: "found",
  // 注册组件
  components: {
    foundBar,
  },
};
</script>

<style lang="less" scoped>
.found {
  width: 1550px;
  margin: 0 150px;
}
</style>
