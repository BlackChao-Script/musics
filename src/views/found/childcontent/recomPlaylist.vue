<template>
  <div class="recomPlaylist">
    <div class="rp_title">
      <span title_text>推荐歌单</span>
      <i class="el-icon-arrow-right"></i>
    </div>

    <div class="rp_container">
      <div
        class="container_item"
        v-for="(item, index) in contaItem"
        :key="index"
      >
        <div class="item_img">
          <img :src="item.picUrl" />
          <p>{{ item.name }}</p>
          <div class="item_playCount">
            <i class="el-icon-caret-right"></i>
            {{ item.playCount | numfix }}
          </div>
          <div>
            <i class="el-icon-video-play"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recomPlaylist",
  data() {
    return {};
  },
  props: {
    contaItem: {
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
.recomPlaylist {
  width: 1550px;
  margin: 0 auto;
  height: 750px;
  margin-bottom: 50px;
  .rp_title {
    font-weight: 700;
    font-size: 20px;
    color: #ccc;
  }
  .rp_container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    margin-top: 10px;
    height: 420px;
    .container_item {
      position: relative;
      width: 300px;
      height: 350px;
      cursor: pointer;
      img {
        width: 100%;
        border-radius: 20px;
      }
      p {
        color: #ccc;
        //多余文字不换行
        white-space: nowrap;
        // 配合下面属性用的
        overflow: hidden;
        // 隐藏文字多余文字用...代替
        text-overflow: ellipsis;
      }
      p:hover{
        color: #fff;
      }
      .item_playCount {
        position: absolute;
        top: 5px;
        right: 10px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
      .el-icon-video-play{
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
