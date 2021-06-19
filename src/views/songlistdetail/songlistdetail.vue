<template>
  <div class="songlistdetail">
    <!-- 歌单详细组件 -->
    <songdetail :songplaylist="songplaylist"></songdetail>
    <!-- 歌单列表组件 -->
    <songlists :songIds="songIds"></songlists>
  </div>
</template>

<script>
import songdetail from "./childcontent/songdetail";
import songlists from "./childcontent/songlists";

import { getSongListDetail } from "@/network/songlistdetail";
export default {
  name: "songlistdetail",
  data() {
    return {
      songplaylist: {},
      songIds: [],
    };
  },
  components: {
    songdetail,
    songlists,
  },
  created() {
    // 保存传入的id
    this.id = this.$route.params.id;
    // 根据id请求歌单详情数据
    getSongListDetail(this.id).then((res) => {
      this.songplaylist = res.playlist;
      this.songIds = res.playlist.trackIds;
    });
  },
};
</script>

<style lang="less" scoped>
.songlistdetail {
  margin-top: 100px;
  width: 90%;
  margin-left: 20px;
}
</style>
