<template>
  <div class="tabbar">
    <div class="tabbar_title">
      <i class="el-icon-loading"></i>
      正在播放
      </div>
    <div class="tabbar_name">
      <div class="namea">{{ this.$store.state.musics[0].name }}</div>
      <div class="nameb">{{ this.$store.state.musics[0].ar[0].name }}</div>
    </div>
    <audio
      :src="recomNewMusicUrls"
      controls="controls"
      autoplay="autoplay"
    ></audio>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      recomNewMusicUrl: "",
    };
  },
  computed: {
    recomNewMusicUrls() {
      return (this.recomNewMusicUrl = this.$store.state.recomNewMusicUrl);
    },
  },
};
</script>

<style lang="less" scoped>
.tabbar {
  display: flex;
  position: fixed;
  bottom: -60px;
  left: 0;
  right: 0;
  z-index: 12;
  height: 71px;
  transition: all 0.5s;
  background-color: #222225;
  box-shadow: 0 -1px 5px rgba(70, 67, 67, 0.5);
  .tabbar_title{
    text-align: center;
    line-height: 71px;
    margin-left: 100px;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
  }
  .tabbar_name {
    width: 150px;
    text-align: center;
    line-height: 30px;
    color: #ccc;
    .namea {
      color: #fff;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .nameb {
      color: #ccc;
      font-size: 12px;
    }
  }
  audio {
    width: 50%;
    height: 62px;
  }
}
.tabbar:hover{
  bottom: 0;
}
</style>
