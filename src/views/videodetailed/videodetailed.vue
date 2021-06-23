<template>
  <div class="videodetailed">
    <div class="videodetailed_title">MV详情</div>
    <!-- MV视频播放组件 -->
    <videomv></videomv>
    <div class="videodetailed_content">
      <!-- MV视频标题详细组件 -->
      <video-title :mvs="mvs"></video-title>
      <div class="comments">评论</div>
      <!-- 精彩评论组件 -->
      <video-comments :comments="comments"></video-comments>
    </div>
  </div>
</template>

<script>
// 引入组件
import videomv from "./childcontent/videomv";
import videoTitle from "./childcontent/videoTitle";
import videoComments from "./childcontent/videoComments";
// 引入网络数据
import { getMv, getHotComments } from "@/network/getmv";

export default {
  name: "videodetailed",
  data() {
    return {
      mvs: {},
      comments: [],
    };
  },
  // 注册组件
  components: {
    videomv,
    videoTitle,
    videoComments,
  },
  // 调用网络请求函数
  created() {
    this.id = this.$route.params.id;
    // 获取MV详细
    getMv(this.id).then((res) => {
      this.mvs = res.data;
    });
    getHotComments(this.id, 1).then((res) => {
      this.comments = res.data.comments;
    });
  },
};
</script>

<style lang="less" scoped>
.videodetailed {
  margin-top: 100px;
  margin-left: 100px;
  margin-bottom: 50px;
  width: 1550px;
  .videodetailed_title {
    margin-left: 275px;
    font-size: 25px;
    color: #ccc;
    font-weight: 700;
  }
  .videodetailed_content {
    margin-left: 275px;
  }
  .comments {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
}
</style>
