<template>
  <div class="recommended">
    <!-- 轮播图组件 -->
    <recom-slideshow :slideshowLIst="slideshowLIst"></recom-slideshow>
    <!-- 推荐歌单组件 -->
    <recom-playlist :contaItem="contaItem"></recom-playlist>
    <!-- 独家放送组件 -->
    <recom-special :special="special"></recom-special>
    <!-- 推荐新音乐组件 -->
    <recom-new-music :newMusic="newMusic"></recom-new-music>
  </div>
</template>

<script>
// 引入组件
import recomSlideshow from "../childcontent/recomSlideshow";
import recomPlaylist from "../childcontent/recomPlaylist";
import recomSpecial from "../childcontent/recomSpecial";
import recomNewMusic from "../childcontent/recomNewMusic";

// 请求数据
import {
  getfound,
  getRecomPlaylist,
  getSpecial,
  getNewMusic,
} from "@/network/found";

export default {
  name: "recommended",
  data() {
    return {
      slideshowLIst: [],
      contaItem: [],
      special: [],
      newMusic: [],
    };
  },
  // 注册组件
  components: {
    recomSlideshow,
    recomPlaylist,
    recomSpecial,
    recomNewMusic,
  },
  created() {
    this.getfound();
    this.getRecomPlaylist(10);
    this.getSpecial();
    this.getNewMusic(12);
  },
  methods: {
    // 获取轮播图数据
    getfound() {
      getfound().then((res) => {
        this.slideshowLIst = res.data.blocks[0].extInfo.banners;
      });
    },
    // 获取推荐歌单数据
    getRecomPlaylist(limit) {
      getRecomPlaylist(limit).then((res) => {
        this.contaItem = res.result;
      });
    },
    // 获取独家放送数据
    getSpecial() {
      getSpecial().then((res) => {
        this.special = res.result;
      });
    },
    // 获取推荐新音乐数据
    getNewMusic(limit) {
      getNewMusic(limit).then((res) => {
        this.newMusic = res.result;
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
