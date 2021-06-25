<template>
  <div class="musices">
    <div class="musices_title">
      <div class="title_ts"><i class="el-icon-view"></i>  找到歌曲</div>
    </div>
    <div class="musices_classify">
      <span class="classify_name">音乐标题</span>
      <span class="classify_singer">歌手</span>
      <span class="classify_album">专辑</span>
    </div>
    <div
      v-for="(item, index) in this.$store.state.musicLIst"
      :key="index"
      class="musices_item"
      @click="getmusic(item.id), getgetSongs(item.id)"
    >
      <span class="item_name">{{ item.name }}</span>
      <span class="item_singer">{{ item.artists[0].name }}</span>
      <span class="item_album">{{ item.album.name }}</span>
    </div>
  </div>
</template>

<script>
// 引入网络请求
import { getmusic } from "@/network/getmusic";
import { getgetSongs } from "@/network/songlistdetail";
export default {
  name: "musices",
  data() {
    return {};
  },
  // 调用网络请求函数
  created() {
    this.getmusic();
  },
  methods: {
    // 获取音乐播放地址
    getmusic(id) {
      getmusic(id).then((res) => {
        this.$store.state.recomNewMusicUrl = res.data[0].url;
      });
    },
    // 获取音乐详细
    getgetSongs(id) {
      getgetSongs(id).then((res) => {
        this.$store.state.musics = res.songs;
        const recentPlay = {};
        recentPlay.name = res.songs[0].name;
        recentPlay.id = res.songs[0].id;
        recentPlay.namea = res.songs[0].ar[0].name;
        recentPlay.nameb = res.songs[0].al.name;
        this.$store.dispatch("addRecentPlay", recentPlay);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.musices {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 90%;
  .musices_title {
    font-size: 30px;
    font-weight: 700;
    .title_ts {
      width: 200px;
      height: 50px;
      line-height: 50px;
      color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      text-align: center;
      margin-left: 200px;
    }
    .el-icon-view{
      margin-left: 5px;
    }
  }
  .musices_classify {
    .classify_name {
      color: #fff;
      margin-left: 60px;
    }
    .classify_singer {
      color: #fff;
      margin-left: 610px;
    }
    .classify_album {
      color: #fff;
      margin-left: 800px;
    }
  }
  .musices_item {
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    border-radius: 10px;
    .item_name {
      color: #fff;
      margin-left: 10px;
    }
    .item_singer {
      position: absolute;
      left: 700px;
      color: #ccc;
    }
    .item_album {
      position: absolute;
      right: 100px;
      color: #ccc;
    }
  }
  .musices_item:hover {
    background-image: linear-gradient(to right, black 0%, #434343 100%);
  }
}
</style>
