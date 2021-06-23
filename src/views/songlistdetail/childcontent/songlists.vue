<template>
  <div class="songlists">
    <div class="songlists_title">歌曲列表</div>
    <div class="songlists_classify">
      <span class="classify_title">音乐标题</span>
      <span class="classify_singer">歌手</span>
      <span class="classify_album">专辑</span>
    </div>
    <div
      v-for="(item, index) in songListIds"
      :key="index"
      class="songlists_item"
      @click="getmusic(item.id)"
    >
      <span class="item_name">{{ item.name }}</span>
      <span class="item_singer">{{ item.ar[0].name }}</span>
      <span class="item_album">{{ item.al.name }}</span>
    </div>
  </div>
</template>

<script>
// 引入请求数据
import { getgetSongs } from "@/network/songlistdetail";
import { getmusic } from "@/network/getmusic";
export default {
  name: "songlists",
  data() {
    return {
      songListIds: [],
    };
  },
  props: {
    songIds: {
      type: Array,
    },
  },
  created() {
    // 延迟调用 getgetSongs() 网络请求
    setTimeout(() => {
      this.getgetSongs();
    }, 1500);

    this.getmusic();
  },
  methods: {
    // 网络请求方法
    getgetSongs() {
      // 遍历songIds并赋值给ids1
      const ids1 = this.songIds.map((item) => {
        return item.id;
      });
      // 将ids1转换成字符串并且赋值给ids2
      const ids2 = ids1.join(",");
      getgetSongs(ids2).then((res) => {
        this.songListIds = res.songs;
        const recentPlay = {};
        recentPlay.name = res.songs[0].name;
        recentPlay.id = res.songs[0].id;
        recentPlay.namea = res.songs[0].ar[0].name;
        recentPlay.nameb = res.songs[0].al.name;
        this.$store.dispatch("addRecentPlay", recentPlay);
      });
    },
    // 自定义方法
    getmusic(id) {
      getmusic(id).then((res) => {
        this.$store.state.recomNewMusicUrl = res.data[0].url;
        this.$store.state.musics = this.songListIds;
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
    .classify_album {
      color: #fff;
      margin-left: 800px;
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
  .songlists_item:hover {
    background-image: linear-gradient(to right, black 0%, #434343 100%);
  }
}
</style>
