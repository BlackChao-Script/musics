<template>
  <div class="radiodetails">
    <div class="radiodetails_images">
      <img :src="detailes.picUrl" />
    </div>
    <div class="radiodetails_content">
      <div class="content_name">
        <span class="name_icon">电台</span>
        <span class="name_text">{{ detailes.name }}</span>
      </div>
      <div class="content_users">
        <span class="users_img">
          <img :src="detailes.dj.avatarUrl" />
        </span>
        <span class="users_name">{{ detailes.dj.nickname }}</span>
      </div>
      <div class="content_text">
        <span class="text_icon">{{ detailes.category }}</span>
        <span class="text_texts">{{detailes.desc}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "radiodetails",
  props: {
    detailes: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
.radiodetails {
  display: flex;
  height: 300px;
  box-shadow: 0 3px 10px rgba(100, 100, 100, .5);
  .radiodetails_images {
    width: 300px;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .radiodetails_content {
    flex: 1;
    margin-left: 10px;
    .content_name {
      height: 50px;
      line-height: 50px;
      .name_icon {
        display: inline-block;
        width: 80px;
        text-align: center;
        margin: 10px;
        border-radius: 10px;
        color: #ec4141;
        border: 1px solid #ec4141;
      }
      .name_text {
        font-size: 25px;
        font-weight: 700;
        color: #ccc;
      }
    }
    .content_users {
      display: flex;
      height: 100px;
      margin-top: 30px;
      .users_img {
        width: 100px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .users_name {
        flex: 1;
        line-height: 100px;
        margin-left: 10px;
        color: #2b6dc8;
      }
    }
    .content_text {
      height: 30px;
      margin-top: 40px;
      .text_icon {
        display: inline-block;
        line-height: 30px;
        text-align: center;
        margin-left: 10px;
        height: 30px;
        width: 100px;
        color: #ec4141;
        border: 1px solid #ec4141;
        border-radius: 10px;
      }
      .text_texts{
        color: #ccc;
        margin-left: 10px;
      }
    }
  }
}
</style>
