<template>
  <div class="tabbar">
    <div class="tabbar_title">
      <i class="el-icon-loading"></i>
      正在播放
    </div>
    <div class="tabbar_name" @click="songsdetailClick">
      <span class="namea">{{ this.$store.state.musics[0].name }}</span>
      <span class="nameb">{{ this.$store.state.musics[0].ar[0].name }}</span>
    </div>
    <audio
      ref="player"
      :src="recomNewMusicUrls"
      controls="controls"
      autoplay="autoplay"
      @timeupdate="timeupdate"
      @play="play"
      @pause="pause"
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
  methods: {
    songsdetailClick() {
      this.$router.push("/songsdetail/" + this.$store.state.musics[0].id);
    },
    timeupdate() {
      const currentTime = this.$refs.player.currentTime.toFixed(1);
      const arr = this.$store.state.lyricArr;
      for (let i = 0; i < arr.length; i++) {
        if (currentTime > arr[i].time) {
          this.$store.commit("showGeCi", i);
        }
      }
    },
    play() {
      this.$store.state.playing = true;
    },
    pause() {
      this.$store.state.playing = false;
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
  .tabbar_title {
    text-align: center;
    line-height: 71px;
    margin-left: 100px;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
  }
  .tabbar_name {
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    line-height: 30px;
    color: #ccc;
    .namea {
      display: inline-block;
      width: 150px;
      height: 100%;
      line-height: 80px;
      font-size: 14px;
      margin-bottom: 5px;
      color: #fff;
    }
    .nameb {
      display: inline-block;
      width: 100px;
      color: #ccc;
      font-size: 12px;
    }
  }
  audio {
    width: 50%;
    height: 62px;
  }
}
.tabbar:hover {
  bottom: 0;
}
</style>
