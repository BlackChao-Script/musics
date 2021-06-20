<template>
  <div class="singer">
    <div class="singer_title">热门歌手</div>
    <!-- 歌手列表组件 -->
    <singer-list :singers="singers"></singer-list>
  </div>
</template>

<script>
import singerList from "../childcontent/singerList";

import { getSinger } from "@/network/found";

export default {
  name: "singer",
  data() {
    return {
      singers: [],
    };
  },
  components: {
    singerList,
  },
  created() {
    this.getSinger();
  },
  methods: {
    getSinger() {
      getSinger().then((res) => {
        this.singers = res.artists;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.singer {
  width: 1550px;
  margin: 150px auto;
  .singer_title {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    border-radius: 10px;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
  }
}
</style>
