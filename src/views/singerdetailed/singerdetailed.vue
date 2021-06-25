<template>
  <div class="singerdetailed">
    <!-- 歌手信息组件 -->
    <singermessage :artist="artist"></singermessage>
    <!-- 歌手热门歌曲组件 -->
    <singerhot :hotSongs="hotSongs"></singerhot>
  </div>
</template>

<script>
// 引入组件
import singermessage from "./childcontent/singermessage";
import singerhot from "./childcontent/singerhot";
// 引入网络请求
import { getSingerPlaylist } from "@/network/getsingerplaylist";

export default {
  name: "singerdetailed",
  data() {
    return {
      artist: {},
      hotSongs: [],
    };
  },
  // 注册组件
  components: {
    singermessage,
    singerhot,
  },
  // 调用网络请求函数
  created() {
    // 保存id
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
  margin-left: 150px;
  width: 1550px;
}
</style>
