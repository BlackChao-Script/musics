<template>
  <div class="songlists">
    <div class="songlists_title">热门歌曲</div>
    <div class="songlists_classify">
      <span class="classify_title">音乐标题</span>
    </div>
    <div
      v-for="(item, index) in hotSongs"
      :key="index"
      class="songlists_item"
      @click="getmusic(item.id), getgetSongs(item.id)"
    >
      <span class="item_name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
// 引入网络请求
import { getmusic } from "@/network/getmusic";
import { getgetSongs } from "@/network/songlistdetail";
export default {
  name: "singerhot",
  props: {
    hotSongs: {
      type: Array,
    },
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
.songlists {
  margin-top: 20px;
  margin-bottom: 100px;
  .songlists_title {
    text-align: center;
    height: 30px;
    font-weight: 700;
    line-height: 30px;
    color: #fff;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
  }
  .songlists_classify {
    margin: 20px 0;
    .classify_title {
      color: #ccc;
      font-size: 15px;
      font-weight: 700;
      margin-left: 30px;
    }
    .classify_singer {
      color: #ccc;
      font-size: 15px;
      font-weight: 700;
      margin-left: 610px;
    }
  }
  .songlists_item {
    cursor: pointer;
    position: relative;
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    border-radius: 10px;
    .item_name {
      color: #fff;
      margin-left: 20px;
    }
    .item_singer {
      position: absolute;
      left: 700px;
      color: #ccc;
    }
  }
  .songlists_item:hover {
    background-image: linear-gradient(to right, black 0%, #434343 100%);
  }
}
</style>
