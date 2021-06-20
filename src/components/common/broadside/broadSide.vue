<template>
  <div class="broadside">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#2b2b2b"
          text-color="#ccc"
          active-text-color="#fff"
        >
          <el-menu-item index="1" @click="foundClick">
            <span>
              <i class="el-icon-view"></i>
              发现音乐
            </span>
          </el-menu-item>
          <el-menu-item index="2" @click="videoClick">
            <span>
              <i class="el-icon-video-camera-solid"></i>
              视频
            </span>
          </el-menu-item>
          <el-menu-item index="3">
            <span>
              <i class="el-icon-video-camera"></i>
              直播
            </span>
          </el-menu-item>
          <el-menu-item index="4">
            <span>
              <i class="el-icon-time"></i>
              最近播放
            </span>
          </el-menu-item>
          <el-menu-item index="5">
            <span>
              <i class="el-icon-s-custom"></i>
              我的收藏
            </span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "broadSide",
  data() {
    return {};
  },
  methods: {
    foundClick() {
      this.$router.push("/found");
    },
    videoClick() {
      this.$router.push("/videos");
    },
  },
};
</script>

<style lang="less" scoped>
.broadside {
  position: fixed;
  right: 0;
  top: 65px;
  bottom: 0;
  z-index: 11;
  width: 150px;
  color: #ccc;
  box-shadow: -1px 0 5px rgba(70, 67, 67, 0.5);
}
.el-menu-item{
  margin-top: 20px;
}
.el-menu {
  border-right: 0 !important;
}
</style>
