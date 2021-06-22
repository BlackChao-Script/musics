<template>
  <div class="videomv">
    <video width="100%" height="100%" controls autoplay ref="video">
      <source :src="mvurl" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import { getAddress } from "@/network/getmv";
export default {
  name: "videomv",
  data() {
    return {
      mvurl: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    getAddress(this.id).then((res) => {
      this.$refs.video.src = res.data.url;
      this.mvurl = res.data.url;
    });
  },
};
</script>

<style lang="less" scoped>
.videomv {
  margin-left: 100px;
  margin: 0 auto;
  width: 1000px;
  height: 600px;
}
</style>
