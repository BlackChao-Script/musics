<template>
  <div class="foundbar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#2b2b2b"
      text-color="#ccc"
      active-text-color="#a11c1c"
    >
      <el-menu-item index="1" @click="recomCLick">个性推荐</el-menu-item>
      <el-menu-item index="2" @click="playlistCLick">歌单</el-menu-item>
      <el-menu-item index="3">主播电台</el-menu-item>
      <el-menu-item index="4">排行榜</el-menu-item>
      <el-menu-item index="5">歌手</el-menu-item>
      <el-menu-item index="6">最新音乐</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "foundBar",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    recomCLick() {
      this.$router.push("/found/recom");
    },
    playlistCLick() {
      this.$router.push("/found/playlist");
    },
  },
};
</script>

<style lang="less" scoped>
.foundbar{
  position: fixed;
  top: 61px;
  left: 0;
  right: 0;
  z-index: 10;
}
.el-menu {
  border-bottom: 0 !important;
}
</style>
