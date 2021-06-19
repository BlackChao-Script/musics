<template>
  <div class="playlists">
    <div
      v-for="(item, index) in playlists"
      :key="index"
      class="content_item"
      @click="getplatlistIdsClick(item.id)"
    >
      <div class="images">
        <img :src="item.coverImgUrl" />
      </div>
      <div class="text">{{ item.name }}</div>
      <div class="playCount">
        <i class="el-icon-caret-right"></i>
        {{ item.playCount | numfix }}
      </div>
      <div>
        <i class="el-icon-video-play"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "playlists",
  props: {
    playlists: {
      type: Array,
    },
  },
  filters: {
    numfix(num) {
      return num / 10000 >= 1
        ? (num / 10000).toFixed(2) + "w"
        : num / 1000 >= 1
        ? (num / 1000).toFixed(2) + "k"
        : num;
    },
  },
  methods: {
    getplatlistIdsClick(id) {
     this.$router.push("/songlistdetail/" +id)
    },
  },
};
</script>

<style lang="less" scoped>
.playlists {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  .content_item {
    position: relative;
    cursor: pointer;
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    .images {
      text-align: center;
      img {
        width: 80%;
        border-radius: 10px;
      }
    }
    .text {
      text-align: center;
      margin-top: 20px;
      color: #ccc;
    }
    .text:hover {
      color: #fff;
    }
    .playCount {
      position: absolute;
      top: 10px;
      right: 40px;
      color: #fff;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
  }
  .el-icon-video-play {
    position: absolute;
    bottom: 80px;
    right: 40px;
    font-size: 30px;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
}
</style>
