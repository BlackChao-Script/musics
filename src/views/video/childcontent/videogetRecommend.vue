<template>
  <div class="videoRecommend">
    <div class="videoRecommend_title">最新MV</div>
    <div class="videoRecommend_content">
      <div
        v-for="(item, index) in recommendMV"
        :key="index"
        class="content_item"
      >
        <div class="item_images">
          <img :src="item.picUrl" />
        </div>
        <div class="item_name">{{ item.name }}</div>
        <div class="item_namea">{{ item.artistName }}</div>
        <div class="item_playCount">
          <i class="el-icon-caret-right"></i>
          {{ item.playCount | numfix }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoRecommend",
  props: {
    recommendMV: {
      type: Array,
    },
  },
  filters: {
    numfix(num) {
      return num / 10000 >= 1
        ? (num / 10000).toFixed(2) + "w"
        : num / 1000 >= 1
        ? (num / 1000).toFixed(2) + "k"
        : num;
    },
  },
};
</script>

<style lang="less" scoped>
.videoRecommend {
  margin-top: 50px;
  .videoRecommend_title {
    color: #ccc;
    font-size: 20px;
  }
  .videoRecommend_content {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .content_item {
      cursor: pointer;
      position: relative;
      width: 380px;
      height: 250px;
      margin-bottom: 10px;
      .item_images {
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .item_name {
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        // 隐藏文字多余文字用...代替
        text-overflow: ellipsis;
        color: #fff;
      }
      .item_namea {
        color: #ccc;
        margin-top: 5px;
        font-size: 13px;
      }
      .item_playCount {
        position: absolute;
        top: 5px;
        right: 10px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
      .el-icon-video-play {
        position: absolute;
        bottom: 60px;
        right: 10px;
        font-size: 30px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
    }
  }
}
</style>
