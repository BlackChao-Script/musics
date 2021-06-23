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
// 引入组件
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
  // 注册组件
  components: {
    radioSlideshow,
    radioRecommend,
    radioHot,
  },
  // 调用网络请求函数
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
    // 获取电台个性推荐
    getradioRecommend() {
      getradioRecommend().then((res) => {
        console.log(res);
        this.radioRecommends = res.data;
      });
    },
    // 获取热门电台
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
