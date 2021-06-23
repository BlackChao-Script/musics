<template>
  <div class="newmusics">
    <div class="newmusics_title">最新音乐</div>
    <!-- 最新音乐列表组件 -->
    <newmusic-list :NewMusic="NewMusic"></newmusic-list>
  </div>
</template>

<script>
// 引入组件
import newmusicList from "../childcontent/newmusicList";
// 引入网络请求
import { getNewMusic } from "@/network/found";

export default {
  name: "newmusics",
  data() {
    return {
      NewMusic: [],
    };
  },
  // 注册组件
  components: {
    newmusicList,
  },
  // 调用网络请求函数
  created() {
    this.getNewMusic(100);
  },
  methods: {
    // 获取最新音乐
    getNewMusic(limit) {
      getNewMusic(limit).then((res) => {
        this.NewMusic = res.result;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.newmusics {
  margin: 150px auto;
  width: 1550px;
  .newmusics_title {
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    margin-left: 10px;
  }
}
</style>
