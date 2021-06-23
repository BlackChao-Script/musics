<template>
  <div class="found">
    <found-bar></found-bar>
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import foundBar from "./childcontent/foundBar";

export default {
  name: "found",
  components: {
    foundBar,
  },
};
</script>

<style lang="less" scoped>
.found {
  width: 1700px;
}
</style>
