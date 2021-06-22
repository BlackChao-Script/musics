<template>
  <div class="videoCloudMake">
    <div class="videoCloudMake_title">云音乐出品MV</div>
    <div class="videoCloudMake_content">
      <div
        v-for="(item, index) in CloudMake"
        :key="index"
        class="content_item"
        @click="getMvid(item.id)"
      >
        <div class="item_images">
          <img :src="item.cover" />
        </div>
        <div class="item_name">{{ item.name }}</div>
        <div class="item_playCount">
          <i class="el-icon-caret-right"></i>
          {{ item.playCount | numfix }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoCloudMake",
  data() {
    return {
      mvid: "",
    };
  },
  props: {
    CloudMake: {
      typr: Array,
    },
  },
  methods: {
    getMvid(id) {
      this.mvid = id;
      this.$router.push("/videodetailed/" + id);
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
};
</script>

<style lang="less" scoped>
.videoCloudMake {
  margin-top: 50px;
  .videoCloudMake_title {
    color: #ccc;
    font-size: 20px;
  }
  .videoCloudMake_content {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    .content_item {
      cursor: pointer;
      position: relative;
      width: 510px;
      height: 310px;
      margin-bottom: 10px;
      .item_images {
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .item_name {
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        // 隐藏文字多余文字用...代替
        text-overflow: ellipsis;
        color: #fff;
      }
      .item_playCount {
        position: absolute;
        top: 5px;
        right: 10px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
      .el-icon-video-play {
        position: absolute;
        bottom: 60px;
        right: 10px;
        font-size: 30px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
    }
  }
}
</style>
