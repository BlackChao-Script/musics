<template>
  <div class="radio">
    <!-- 轮播图组件 -->
    <radio-slideshow :radioSlideshow="radioSlideshow"></radio-slideshow>
    <!-- 个性推荐组件 -->
    <radio-recommend :radioRecommends="radioRecommends"></radio-recommend>
    <!-- 热门电台 -->
    <radio-hot :radioHot="radioHot"></radio-hot>
  </div>
</template>

<script>
import radioSlideshow from "../childcontent/radioSlideshow";
import radioRecommend from "../childcontent/radioRecommend";
import radioHot from "../childcontent/radioHot";

import {
  getradioSlideshow,
  getradioRecommend,
  getradioHot,
} from "@/network/found";

export default {
  name: "radio",
  data() {
    return {
      radioSlideshow: [],
      radioRecommends: [],
      radioHot: [],
    };
  },
  components: {
    radioSlideshow,
    radioRecommend,
    radioHot,
  },
  created() {
    this.getradioSlideshow();
    this.getradioRecommend();
    this.getradioHot();
  },
  methods: {
    // 获取电台轮播图
    getradioSlideshow() {
      getradioSlideshow().then((res) => {
        this.radioSlideshow = res.data;
      });
    },
    // 电台个性推荐
    getradioRecommend() {
      getradioRecommend().then((res) => {
        console.log(res);
        this.radioRecommends = res.data;
      });
    },
    // 热门电台
    getradioHot() {
      getradioHot().then((res) => {
        this.radioHot = res.djRadios;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.radio {
  width: 1550px;
  margin: 150px auto;
}
</style>
