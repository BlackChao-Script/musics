<template>
  <div class="recomSpecial">
    <div class="rs_title">
      <span title_text>独家放送</span>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="rs_container">
      <div class="container_item" v-for="(item, index) in special" :key="index">
        <img :src="item.sPicUrl" />
        <p>{{ item.copywriter }}</p>
        <div>
          <i class="el-icon-video-play"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recomSpecial",
  props: {
    special: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.recomSpecial {
  width: 1550px;
  margin: 0 auto;
  height: 380px;
  margin-bottom: 50px;
  .rs_title {
    font-weight: 700;
    font-size: 20px;
    color: #ccc;
  }
  .rs_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    .container_item {
      width: 500px;
      position: relative;
      cursor: pointer;
    }
    .el-icon-video-play {
      position: absolute;
      top: 20px;
      left: 10px;
      font-size: 30px;
      color: #fff;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    img {
      width: 100%;
      border-radius: 10px;
    }
    p {
      color: #ccc;
    }
    p:hover{
      color: #fff;
    }
  }
}
</style>
