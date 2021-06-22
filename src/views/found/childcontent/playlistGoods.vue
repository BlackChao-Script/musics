<template>
  <div class="playlistgoods">
    <div class="images">
      <img :src="this.playlists[0].coverImgUrl" />
    </div>
    <div class="content">
      <span class="content_title">
        <i class="el-icon-star-off"></i>
        <span>精品歌单</span>
      </span>
      <p class="content_text">{{ this.playlists[0].name }}</p>
      <div class="content_writer">{{ this.playlists[0].description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "playlistGoods",
  props: {
    playlists: {
      type: Array,
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.playlistgoods {
  cursor: pointer;
  display: flex;
  height: 300px;
  border-radius: 10px;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  .images {
    text-align: center;
    padding-top: 10px;
    flex: 30%;
    img {
      width: 60%;
      border-radius: 10px;
    }
  }
  .content {
    flex: 70%;
    .content_title {
      color: #e7aa5a;
      display: inline-block;
      width: 200px;
      height: 60px;
      margin-top: 50px;
      text-align: center;
      line-height: 60px;
      border-radius: 30px;
      border: 1px solid #e7aa5a;
      .el-icon-star-off {
        margin-right: 10px;
        font-size: 20px;
      }
    }
    .content_text {
      margin-top: 30px;
      font-size: 20px;
      color: #fff;
      font-weight: 700;
    }
    .content_writer {
      height: 100px;
      margin-top: 20px;
      font-size: 15px;
      color: #ccc;
      overflow: hidden;
      // 隐藏文字多余文字用...代替
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
