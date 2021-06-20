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
    getradioSlideshow() {
      getradioSlideshow().then((res) => {
        this.radioSlideshow = res.data;
      });
    },
    getradioRecommend() {
      getradioRecommend().then((res) => {
        this.radioRecommends = res.data;
      });
    },
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
