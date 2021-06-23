<template>
  <div class="singermessage">
    <div class="singermessage_images">
      <img :src="artist.img1v1Url">
    </div>
    <div class="singermessage_content">
      <div class="content_name">{{artist.name}}</div>
      <div class="content_name2">{{artist.alias[0]}}</div>
      <div class="content_number">
        <span class="number_a">单曲数:{{artist.musicSize}}</span>
        <span class="number_b">MV数:{{artist.mvSize}}</span>
      </div>
      <div class="content_abstract">
        <div class="abstract_title">简介:</div>
        <div class="abstract_content">{{artist.briefDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "singermessage",
  props: {
    artist: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
.singermessage{
  display: flex;
  height: 300px;
  .singermessage_images{
    flex: 20%;
    img{
      width: 78%;
      border-radius: 10px;
    }
  }
  .singermessage_content{
    flex: 70%;
    .content_name{
      color: #fff;
      font-weight: 700;
      font-size: 25px;
    }
    .content_name2{
      margin-top: 5px;
      color: #ccc;
    }
    .content_number{
      margin-top: 10px;
      color: #fff;
      .number_b{
        margin-left: 10px;
      }
    }
    .content_abstract{
      margin-top: 20px;
      .abstract_title{
        color: #fff;
      }
      .abstract_content{
        color: #ccc;
        overflow: hidden;
        // 隐藏文字多余文字用...代替
        text-overflow: ellipsis;
        overflow: hidden;
        height: 210px;
        margin-top: 10px;
        font-size: 13px;
      }
    }
  }
}
</style>
