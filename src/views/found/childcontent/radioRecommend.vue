<template>
  <div class="radioRecommend">
    <div class="radioRecommend_title">电台个性推荐</div>
    <div class="radioRecommend_content">
      <div
        v-for="(item, index) in radioRecommends"
        :key="index"
        class="content_item"
        @click="radiodetailClick(item.id)"
      >
        <div class="item_images">
          <img :src="item.picUrl" />
        </div>
        <div class="item_text">{{ item.rcmdText }}</div>
        <div class="item_name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "radioRecommend",
  props: {
    radioRecommends: {
      type: Array,
    },
  },
  methods: {
    // 携带id跳转页面
    radiodetailClick(id) {
      this.$router.push("/radiodetail/" + id);
    },
  },
};
</script>

<style lang="less" scoped>
.radioRecommend {
  .radioRecommend_title {
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
  .radioRecommend_content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .content_item {
      cursor: pointer;
      position: relative;
      width: 250px;
      height: 310px;
      .item_images {
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .item_text {
        text-align: center;
        margin-top: 10px;
        color: #ccc;
      }
      .item_name {
        position: absolute;
        bottom: 70px;
        left: 10px;
        right: 0;
        //多余文字不换行
        white-space: nowrap;
        // 配合下面属性用的
        overflow: hidden;
        // 隐藏文字多余文字用...代替
        text-overflow: ellipsis;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
      }
    }
    .content_item :hover{
      color: #fff;
    }
  }
}
</style>
