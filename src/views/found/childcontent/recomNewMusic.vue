<template>
  <div class="recomNewMusic">
    <div class="rm_title">
      <span title_text>最新音乐</span>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="rm_container">
      <div
        class="container_item"
        v-for="(item, index) in newMusic"
        :key="index"
        @click="getmusic(item.id), getgetSongs(item.id)"
      >
        <div class="item_items">
          <img :src="item.picUrl" />
          <span class="items_text">{{ item.name }}</span>
          <i class="el-icon-video-play"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getmusic } from "@/network/getmusic";
import { getgetSongs } from "@/network/songlistdetail";
export default {
  name: "recomNewMusic",
  data() {
    return {};
  },
  props: {
    newMusic: {
      type: Array,
    },
  },
  created() {
    this.getmusic();
  },
  methods: {
    getmusic(id) {
      getmusic(id).then((res) => {
        this.$store.state.recomNewMusicUrl = res.data[0].url;
      });
    },
    getgetSongs(id) {
      getgetSongs(id).then((res) => {
        this.$store.state.musics = res.songs;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.recomNewMusic {
  width: 1550px;
  margin: 0 auto;
  height: 470px;
  margin-bottom: 100px;
  .rm_title {
    font-weight: 700;
    font-size: 20px;
    color: #ccc;
  }
  .rm_container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    .container_item {
      cursor: pointer;
      width: 30%;
      height: 100px;
      margin-top: 10px;
      .item_items {
        position: relative;
        display: flex;
        img {
          width: 21%;
          border-radius: 10px;
        }
        .items_text {
          margin-left: 25px;
          margin-top: 40px;
          font-size: 20px;
          font-weight: 700;
          color: #ccc;
        }
        .el-icon-video-play {
          position: absolute;
          top: 30%;
          left: 25px;
          font-size: 45px;
          color: #fff;
        }
      }
    }
    .container_item:hover {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }
  }
}
</style>
