<template>
  <div class="navbar">
    <el-row>
      <el-col :span="5" class="title">
        <i class="el-icon-help"></i>
        <span class="titletext">云音乐</span>
      </el-col>
      <el-col :span="5">
        <el-input
          v-model="search"
          placeholder="搜索"
          prefix-icon="el-icon-search"
          @keyup.enter.native="getSearch"
        ></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getSearch } from "@/network/navBarAPI/search";

export default {
  name: "navBar",
  data() {
    return {
      search: "",
      musicLIst: [],
    };
  },
  created() {
    this.getSearch();
  },
  methods: {
    getSearch() {
      const keywords = this.search;
      getSearch(keywords).then((res) => {
        this.musicLIst = res.result.songs;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 60px;
  background-color: #222225;
  line-height: 60px;
  border-bottom: 2px solid #a11c1c;
  .title {
    margin-left: 25px;
    color: #fff;
    font-size: 20px;
  }
  .titletext {
    margin-left: 5px;
    font-weight: 700;
  }
}
</style>
