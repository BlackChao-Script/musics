<template>
  <div class="videoTitle">
    <div class="videoTitle_content">
      <div class="content_name">
        <span class="name_a">{{ mvs.artists[0].name }}</span
        >/
        <span class="name_b">{{ mvs.artists[1].name }}</span>
      </div>
      <div class="content_title">{{ mvs.name }}</div>
      <div class="content_play">
        <span class="play_time">发布：{{ mvs.publishTime }}</span>
        <span class="play_count">播放：{{ mvs.playCount | numfix }}</span>
      </div>
      <div class="content_desc">{{ mvs.desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoTitle",
  props: {
    mvs: {
      type: Array,
    },
  },
  filters: {
    numfix(num) {
      return num / 10000 >= 1 ? (num / 10000).toFixed(2) + "万次" : num;
    },
  },
};
</script>

<style lang="less" scoped>
.videoTitle {
  .videoTitle_content {
    .content_name {
      margin-top: 20px;
      color: #ccc;
      .name_a {
        margin-right: 5px;
      }
    }
    .content_title {
      margin-top: 20px;
      font-size: 25px;
      color: #fff;
      font-weight: 700;
    }
    .content_play {
      margin-top: 20px;
      color: #ccc;
      font-size: 15px;
      .play_time {
        margin-right: 10px;
      }
    }
    .content_desc {
      margin-top: 20px;
      width: 1000px;
      height: 100px;
      color: #fff;
    }
  }
}
</style>
