<template>
  <div class="videos">
    <h2 class="videos_title">MV</h2>
    <!-- 最新MV列表 -->
    <video-mv-list :newsmvs="newsmvs"></video-mv-list>
    <!-- 推荐MV列表 -->
    <video-recommend :recommendMV="recommendMV"></video-recommend>
    <!-- 云音乐出品MV -->
    <video-cloud-make :CloudMake="CloudMake"></video-cloud-make>
    <!-- MV排行 -->
    <video-mv-ranking :mvRanking="mvRanking" :currentType="currentType"></video-mv-ranking>
  </div>
</template>

<script>
// 引入组件
import videoMvList from "./childcontent/videoMvList";
import videoRecommend from "./childcontent/videogetRecommend";
import videoCloudMake from "./childcontent/videoCloudMake";
import videoMvRanking from "./childcontent/videoMvRanking";

// 引入网络接口
import {
  getNewsMV,
  getRecommend,
  getCloudMake,
  getMVRanking,
} from "@/network/video";

export default {
  name: "videos",
  data() {
    return {
      newsmvs: [],
      recommendMV: [],
      CloudMake: [],
      mvRanking: [],
      currentType: "欧美",
    };
  },
  components: {
    videoMvList,
    videoRecommend,
    videoCloudMake,
    videoMvRanking,
  },
  created() {
    this.getNewsMV();
    this.getRecommend();
    this.getCloudMake();
    this.getMVRanking();
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
    getCloudMake() {
      getCloudMake().then((res) => {
        this.CloudMake = res.data;
      });
    },
    getMVRanking(area) {
      const areas = this.currentType;
      getMVRanking(areas).then((res) => {
        this.mvRanking = res.data;
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
