<template>
  <div class="recentplayList">
    <div class="recentplayList_title">
      <span class="title_a">音乐标题</span>
      <span class="title_b">歌手</span>
      <span class="title_c">专辑</span>
    </div>
    <div
      class="recentplayList_item"
      v-for="(item, index) in this.$store.state.musicRecentPlay"
      :key="index"
      @click="getmusic(item.id), getgetSongs(item.id)"
    >
      <span class="item_name">{{ item.name }}</span>
      <span class="item_namea">{{ item.namea }}</span>
      <span class="item_nameb">{{ item.nameb }}</span>
    </div>
  </div>
</template>

<script>
// 引入网络请求
import { getmusic } from "@/network/getmusic";
import { getgetSongs } from "@/network/songlistdetail";
export default {
  name: "recentplayList",
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
.recentplayList {
  margin-top: 20px;
  .recentplayList_title {
    color: #ccc;
    margin-bottom: 10px;
    .title_a {
      margin-left: 10px;
    }
    .title_b {
      margin-left: 700px;
    }
    .title_c {
      margin-left: 650px;
    }
  }
  .recentplayList_item {
    position: relative;
    height: 50px;
    margin-bottom: 10px;
    cursor: pointer;
    line-height: 50px;
    color: #fff;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    .item_name {
      margin-left: 10px;
    }
    .item_namea {
      position: absolute;
      left: 760px;
    }
    .item_nameb {
      position: absolute;
      right: 50px;
    }
  }
  .recentplayList_item:hover {
    background: rgba(0, 0, 0, 0.5);
    color: #ccc;
  }
}
</style>
