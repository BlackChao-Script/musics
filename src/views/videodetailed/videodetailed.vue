<template>
  <div class="videodetailed">
    <div class="videodetailed_title">MV详细</div>
    <!-- MV视频播放组件 -->
    <videomv :mvs="mvs"></videomv>
  </div>
</template>

<script>
import videomv from "./childcontent/videomv";
import { getMv } from "@/network/getmv";
export default {
  name: "videodetailed",
  data() {
    return {
      mvs: {},
      mvaddress: "",
    };
  },
  components: {
    videomv,
  },
  created() {
    this.id = this.$route.params.id;
    // 获取MV详细
    getMv(this.id).then((res) => {
      this.mvs = res.data;
      console.log(this.mvs);
    });
  },
};
</script>

<style lang="less" scoped>
.videodetailed {
  margin-top: 100px;
  .videodetailed_title {
    margin-left: 100px;
    font-size: 20px;
    color: #ccc;
    font-weight: 700;
  }
}
</style>
