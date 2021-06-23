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
  // 注册组件
  components: {
    videoMvList,
    videoRecommend,
    videoCloudMake,
    videoMvRanking,
  },
  // 调用网络请求函数
  created() {
    this.getNewsMV();
    this.getRecommend();
    this.getCloudMake();
    this.getMVRanking();
  },
  methods: {
    // 获取最新MV
    getNewsMV() {
      getNewsMV().then((res) => {
        this.newsmvs = res.data;
      });
    },
    // 获取推荐MV
    getRecommend() {
      getRecommend().then((res) => {
        this.recommendMV = res.result;
      });
    },
    // 获取网易云出品MV
    getCloudMake() {
      getCloudMake().then((res) => {
        this.CloudMake = res.data;
      });
    },
    // 获取MV排行
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
