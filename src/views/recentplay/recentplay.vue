<template>
  <div class="recentplay">
    <div class="recentplay_title">最近播放</div>
  </div>
</template>

<script>
export default {
  name: "recentplay",
  data() {
    return {
      musics: [],
    };
  },
  created() {
  },
};
</script>

<style lang="less" scoped>
.recentplay {
  margin-top: 100px;
  width: 1550px;
  margin-left: 100px;
  .recentplay_title {
    color: #fff;
    font-size: 25px;
    font-weight: 700;
  }
}
</style>
