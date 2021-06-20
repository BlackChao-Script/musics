<template>
  <div class="radioHot">
    <div class="radioHot_title">热门电台</div>
    <div class="radioHot_content">
      <div v-for="(item, index) in radioHot" :key="index" class="content_item">
        <div class="item_images">
          <img :src="item.picUrl" />
        </div>
        <div class="item_text">{{ item.rcmdtext }}</div>
        <div class="item_name">{{ item.name }}</div>
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
  name: "radioHot",
  props: {
    radioHot: {
      typr: Array,
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
.radioHot {
  margin-top: 20px;
  .radioHot_title {
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
  .radioHot_content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    .content_item {
      position: relative;
      margin-top: 10px;
      width: 300px;
      height: 350px;
      .item_images {
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .item_text {
        color: #ccc;
        text-align: center;
        margin-top: 10px;
      }
      .item_name {
        color: #fff;
        text-align: center;
        margin-top: 5px;
        //多余文字不换行
        white-space: nowrap;
        // 配合下面属性用的
        overflow: hidden;
        // 隐藏文字多余文字用...代替
        text-overflow: ellipsis;
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
