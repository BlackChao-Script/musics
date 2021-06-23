<template>
  <div class="songdetail">
    <div class="songdetail_images">
      <img :src="songplaylist.coverImgUrl" />
    </div>
    <div class="songdetail_text">
      <span class="text_title">
        <span class="title_type">歌单</span>
        <span class="title_name">{{ songplaylist.name }}</span>
      </span>
      <div class="text_creator">
        <span class="creator_images"
          ><img :src="songplaylist.creator.avatarUrl"
        /></span>
        <span class="creator_name">{{ songplaylist.creator.nickname }} </span>
      </div>
      <div class="text_label">
        <span class="label">标签:</span>
        <span
          v-for="(item, index) in songplaylist.tags"
          :key="index"
          class="text_item"
        >
          /{{ item }}
        </span>
      </div>
      <div class="text_message">
        <span class="message_title">
          <span class="title_name2">歌曲:</span>
          <span class="title_number">{{ songplaylist.trackCount }}</span>
          <span class="title_play">播放:</span>
          <span class="title_number2">{{
            songplaylist.playCount | numfix
          }}</span>
        </span>
      </div>
      <div class="text_abstract">
        <span class="abstract_title">简介:</span>
        <span class="abstract_content">{{ songplaylist.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "songdetail",
  props: {
    songplaylist: {
      type: Object,
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
.songdetail {
  width: 100%;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  .songdetail_images {
    flex: 25%;
    width: 300px;
    height: 300px;
    text-align: center;
    img {
      width: 63%;
      border-radius: 10px;
    }
  }
  .songdetail_text {
    flex: 70%;
    .text_title {
      .title_type {
        display: inline-block;
        width: 50px;
        margin-top: 20px;
        text-align: center;
        font-weight: 700;
        color: #a11c1c;
        border: 1px solid #a11c1c;
      }
      .title_name {
        margin-left: 10px;
        font-size: 25px;
        color: #fff;
        font-weight: 700;
      }
    }
    .text_creator {
      height: 50px;
      margin-top: 10px;
      .creator_images {
        display: inline-block;
        width: 40px;
        height: 100%;
        padding-top: 10px;
        img {
          width: 80%;
          border-radius: 50px;
        }
      }
      .creator_name {
        color: #ccc;
        font-size: 14px;
      }
    }
    .text_label {
      margin-top: 30px;
      .label {
        color: #fff;
      }
      .text_item {
        font-size: 13px;
        color: #ccc;
      }
    }
    .text_message {
      margin-top: 30px;
      .title_name2 {
        color: #fff;
      }
      .title_number {
        margin-left: 5px;
        font-size: 13px;
        color: #ccc;
      }
      .title_play {
        color: #fff;
        margin-left: 10px;
      }
      .title_number2 {
        margin-left: 5px;
        font-size: 13px;
        color: #ccc;
      }
    }
    .text_abstract {
      margin-top: 30px;
      .abstract_title {
        color: #fff;
      }
      .abstract_content {
        margin-left: 5px;
        font-size: 12px;
        color: #ccc;
      }
    }
  }
}
</style>
