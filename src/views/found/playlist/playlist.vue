<template>
  <div class="playlist">
    <!-- 精品歌单列表 -->
    <playlist-goods :playlists="playlists"></playlist-goods>
    <!-- 歌单列表 -->
    <playlists :playlists="playlists"></playlists>
  </div>
</template>

<script>
// 引入组件
import playlistGoods from "../childcontent/playlistGoods";
import playlists from "../childcontent/playlists";
// 引入网络请求
import { getPlaylist } from "@/network/found";
export default {
  name: "playlist",
  data() {
    return {
      playlists: [],
    };
  },
  // 注册组件
  components: {
    playlistGoods,
    playlists,
  },
  // 调用网络请求函数
  created() {
    this.getPlaylist();
  },
  methods: {
    // 获取歌单
    getPlaylist() {
      getPlaylist().then((res) => {
        this.playlists = res.playlists;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.playlist {
  width: 1550px;
  margin: 150px auto;
}
</style>
