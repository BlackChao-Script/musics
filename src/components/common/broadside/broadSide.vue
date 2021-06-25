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
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>我的歌单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item, index) in this.$store.state.userplaylist"
                :key="index"
                @click="getplatlistIdsClick(item.id)"
              >
                <div class="item_text">
                  <i class="el-icon-s-unfold"></i>
                  {{ item.name }}
                </div>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4" @click="recentplay">
            <span>
              <i class="el-icon-time"></i>
              最近播放
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
    // 页面跳转
    foundClick() {
      this.$router.push("/found");
    },
    videoClick() {
      this.$router.push("/videos");
    },
    recentplay() {
      this.$router.push("/recentplay");
    },
    // 携带id跳转页面
    getplatlistIdsClick(id) {
      this.$router.push("/songlistdetail/" + id);
    },
  },
};
</script>

<style lang="less" scoped>
.broadside {
  position: fixed;
  right: -105px;
  top: 65px;
  bottom: 0;
  z-index: 11;
  width: 150px;
  color: #ccc;
  transition: all 0.5s;
  box-shadow: -1px 0 5px rgba(70, 67, 67, 0.5);
}
.el-menu-item {
  margin-top: 20px;
}
.el-menu {
  border-right: 0 !important;
}
.el-menu-item-group {
  .el-menu-item {
    height: 30px;
    .item_text {
      line-height: 30px;
      width: 100px;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.broadside:hover{
  right: 0;
}
</style>
