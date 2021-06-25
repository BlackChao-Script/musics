<template>
  <div class="videoComments">
    <div class="videoComments_title">精彩评论</div>
    <div class="videoComments_content">
      <div class="content_item" v-for="(item, index) in comments" :key="index">
        <div class="item_images">
          <img :src="item.user.avatarUrl" />
        </div>
        <div class="item_comments">
          <span class="content_name">{{ item.user.nickname }}:</span>
          <span class="conten_text">{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoComments",
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.videoComments {
  width: 1000px;
  .videoComments_title {
    color: #ccc;
    margin-bottom: 20px;
  }
  .videoComments_content {
    .content_item {
      display: flex;
      box-shadow: 0 5px 10px rgba(0, 0, 0, .5);
      .item_images {
        padding-top: 10px;
        width: 100px;

        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .item_comments {
        flex: 100%;
        padding-top: 10px;
        padding-left: 10px;
        .content_name {
          color: #85b9e6;
        }
        .conten_text{
          color: #ccc;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
