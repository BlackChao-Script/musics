<template>
  <div class="singerdetailed">
    <!-- 歌手信息组件 -->
    <singermessage :artist="artist"></singermessage>
    <!-- 歌手热门歌曲组件 -->
    <singerhot :hotSongs="hotSongs"></singerhot>
  </div>
</template>

<script>
import singermessage from "./childcontent/singermessage";
import singerhot from "./childcontent/singerhot";

import { getSingerPlaylist } from "@/network/getsingerplaylist";

export default {
  name: "singerdetailed",
  data() {
    return {
      artist: {},
      hotSongs: [],
    };
  },
  components: {
    singermessage,
    singerhot,
  },
  created() {
    this.id = this.$route.params.id;
    getSingerPlaylist(this.id).then((res) => {
      this.artist = res.artist;
      this.hotSongs = res.hotSongs;
    });
  },
};
</script>

<style lang="less" scoped>
.singerdetailed {
  margin-top: 100px;
  margin-left: 100px;
  width: 1550px;
}
</style>
