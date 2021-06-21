<template>
  <div class="videos">
    <h2 class="videos_title">MV</h2>
    <!-- 最新MV列表 -->
    <video-mv-list :newsmvs="newsmvs"></video-mv-list>
    <!-- 推荐MV列表 -->
    <video-recommend :recommendMV="recommendMV"></video-recommend>
  </div>
</template>

<script>
// 引入组件
import videoMvList from "./childcontent/videoMvList";
import videoRecommend from "./childcontent/videogetRecommend";

// 引入网络接口
import { getNewsMV, getRecommend } from "@/network/video";

export default {
  name: "videos",
  data() {
    return {
      newsmvs: [],
      recommendMV: [],
    };
  },
  components: {
    videoMvList,
    videoRecommend,
  },
  created() {
    this.getNewsMV();
    this.getRecommend();
  },
  methods: {
    getNewsMV() {
      getNewsMV().then((res) => {
        this.newsmvs = res.data;
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        this.recommendMV = res.result;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.videos {
  margin-top: 100px;
  margin-left: 100px;
  margin-bottom: 200px;
  width: 1550px;
  .videos_title {
    color: #fff;
    font-size: 30px;
  }
}
</style>
