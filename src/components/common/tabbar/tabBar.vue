<template>
  <div class="tabbar">
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
      aaa: "",
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
  position: fixed;
  bottom: -60px;
  left: 0;
  right: 0;
  z-index: 12;
  height: 71px;
  transition: all 0.5s;
  background-color: #222225;
  box-shadow: 0 -1px 5px rgba(70, 67, 67, 0.5);
  audio {
    width: 50%;
    margin: 0 25%;
    height: 62px;
  }
}
.tabbar:hover {
  bottom: 0;
}
</style>
