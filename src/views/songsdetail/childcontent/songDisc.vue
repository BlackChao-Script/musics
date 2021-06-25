<template>
  <div class="songDisc" :class="{ playing: this.$store.state.playing }">
    <div class="songDisc_content">
      <div class="content_a">
        <div class="a_images">
          <img :src="musics[0].al.picUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "songDisc",
  props: {
    musics: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.songDisc {
  flex: 40%;
  .songDisc_content {
    position: relative;
    width: 500px;
    height: 500px;
    box-shadow: 0 0 100px #020202;
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
    border-radius: 50%;
    margin: 50px auto;
    .content_a {
      width: 450px;
      height: 450px;
      border-radius: 50%;
      background-image: linear-gradient(to right, #28292b 0%, black 100%);
      position: absolute;
      left: 5%;
      top: 5%;
      .a_images {
        position: absolute;
        width: 350px;
        height: 350px;
        border-radius: 50%;
        top: 11%;
        left: 11%;
        background-color: #fff;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }
  }
}
@keyframes move {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.playing {
  animation: move 100s linear infinite alternate;
}
</style>
