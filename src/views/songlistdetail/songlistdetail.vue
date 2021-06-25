<template>
  <div class="songlistdetail">
    <!-- 歌单详细组件 -->
    <songdetail :songplaylist="songplaylist"></songdetail>
    <!-- 歌单列表组件 -->
    <songlists :songIds="songIds"></songlists>
  </div>
</template>

<script>
// 引入组件
import songdetail from "./childcontent/songdetail";
import songlists from "./childcontent/songlists";
// 引入网络请求
import { getSongListDetail } from "@/network/songlistdetail";
export default {
  name: "songlistdetail",
  data() {
    return {
      songplaylist: {},
      songIds: [],
    };
  },
  // 注册组件
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
      this.songIds=res.playlist.trackIds;
    });
  },
};
</script>

<style lang="less" scoped>
.songlistdetail {
  margin-top: 100px;
  width: 90%;
  margin-left: 60px;
}
</style>
