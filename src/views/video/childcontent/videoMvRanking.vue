<template>
  <div class="videoMvRanking">
    <div class="videoMvRanking_title">
      <span class="title_name">MV排行</span>
    </div>
    <div class="videoMvRanking_content">
      <div
        v-for="(item, index) in mvRanking"
        :key="index"
        class="content_item"
        @click="getMvid(item.id)"
      >
        <div class="content_number">{{ index + 1 }}</div>
        <div class="content_images">
          <img :src="item.cover" />
        </div>
        <div class="content_text">
          <div class="text_name">{{ item.name }}</div>
          <div class="text_artistname">{{ item.artistName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoMvRanking",
  data() {
    return {
      isShow: 0,
    };
  },
  props: {
    mvRanking: {
      type: Array,
    },
    currentType: {
      type: String,
    },
  },
  methods: {
    getMvid(id) {
      this.mvid = id;
      this.$router.push("/videodetailed/" + id);
    },
    classifyClick(index) {
      this.isShow = idnex;
      console.log(this.isShow);
    },
  },
};
</script>

<style lang="less" scoped>
.videoMvRanking {
  margin-top: 50px;
  .videoMvRanking_title {
    color: #ccc;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .videoMvRanking_content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    .content_item {
      height: 200px;
      flex: 50%;
      background: linear-gradient(
          to bottom,
          #323232 0%,
          #3f3f3f 40%,
          #1c1c1c 150%
        ),
        linear-gradient(
          to top,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(0, 0, 0, 0.25) 200%
        );
      background-blend-mode: multiply;
      border-radius: 10px;
      display: flex;
      .content_number {
        flex: 10%;
        color: #ccc;
        font-size: 20px;
        text-align: center;
        line-height: 200px;
      }
      .content_images {
        flex: 40%;
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .content_text {
        flex: 50%;
        margin-top: 20px;
        margin-left: 20px;
        .text_name {
          color: #fff;
        }
        .text_artistname {
          color: #ccc;
          margin-top: 30px;
        }
      }
    }
  }
  .isred {
    color: #a11c1c;
  }
}
</style>
