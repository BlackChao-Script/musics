<template>
  <div class="radiodList">
    <div class="radiodList_title">节目({{ programs[0].serialNum }})</div>
    <div
      v-for="(item, index) in programs"
      :key="index"
      class="radiodList_item"
      @click="getmusic(item.id)"
    >
      <div class="item_number">{{ item.serialNum }}</div>
      <div class="item_img">
        <img :src="item.coverUrl" />
        <i class="el-icon-video-play"></i>
      </div>
      <div class="item_name">{{ item.name }}</div>
      <div class="item_playnums">
        <i class="el-icon-video-play"></i>
        {{ item.listenerCount | numfix }}
      </div>
      <div class="item_give">
        <i class="el-icon-star-off"></i>
        {{ item.likedCount }}
      </div>
    </div>
  </div>
</template>

<script>
import { getmusic } from "@/network/getmusic";
export default {
  name: "radiodList",
  props: {
    programs: {
      type: Array,
    },
  },
  filters: {
    // 过滤播放次数
    numfix(num) {
      return num / 10000 >= 1
        ? (num / 10000).toFixed(0) + "万"
        : num / 1000 >= 1
        ? (num / 1000).toFixed(2) + "k"
        : num;
    },
  },
  methods: {
    // 获取音乐播放地址
    getmusic(id) {
      getmusic(id).then((res) => {
        this.$store.state.recomNewMusicUrl = res.data[0].url;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.radiodList {
  margin-top: 50px;
  margin-bottom: 100px;
  .radiodList_title {
    color: #fff;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .radiodList_item {
    display: flex;
    line-height: 80px;
    height: 80px;
    margin-bottom: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    .item_number {
      width: 100px;
      text-align: center;
      color: #ccc;
      font-size: 14px;
    }
    .item_img {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        border-radius: 10px;
      }
      .el-icon-video-play {
        position: absolute;
        top: 35%;
        left: 35%;
        color: #fff;
        font-size: 30px;
      }
    }
    .item_name {
      width: 800px;
      margin-left: 20px;
      color: #fff;
    }
    .item_playnums {
      width: 300px;
      color: #ccc;
    }
    .item_give {
      color: #ccc;
    }
  }
  .radiodList_item:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
