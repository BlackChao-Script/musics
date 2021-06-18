<template>
  <div class="tabbar">
  </div>
</template>

<script>
export default {
  name: "tabBar",
};
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
  height: 60px;
  background-color: #222225;
  box-shadow: 0 -1px 5px rgba(70, 67, 67, 0.5);
}
</style>
