<template>
  <div class="playlist">
    <!-- 精品歌单列表 -->
    <playlist-goods :playlists="playlists"></playlist-goods>
    <!-- 歌单列表 -->
    <playlists :playlists="playlists"></playlists>
  </div>
</template>

<script>
import playlistGoods from "../childcontent/playlistGoods";
import playlists from "../childcontent/playlists";

import { getPlaylist } from "@/network/found";
export default {
  name: "playlist",
  data() {
    return {
      playlists: [],
    };
  },
  components: {
    playlistGoods,
    playlists,
  },
  created() {
    this.getPlaylist();
  },
  methods: {
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
