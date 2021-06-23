<template>
  <div class="recentplay">
    <div class="recentplay_title">最近播放</div>
    <!-- 播放记录列表 -->
    <recentplay-list></recentplay-list>
  </div>
</template>

<script>
import recentplayList from "./childcontent/recentplayList";
export default {
  name: "recentplay",
  data() {
    return {
      musics: [],
    };
  },
  components: {
    recentplayList,
  },
  created() {},
};
</script>

<style lang="less" scoped>
.recentplay {
  margin-top: 100px;
  width: 1550px;
  margin-left: 100px;
  margin-bottom: 100px;
  .recentplay_title {
    color: #fff;
    font-size: 25px;
    font-weight: 700;
  }
}
</style>
