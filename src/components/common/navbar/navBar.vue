<template>
  <div class="navbar">
    <el-row>
      <el-col :span="5" class="title">
        <i class="el-icon-help"></i>
        <span class="titletext" @click="indexClick">云音乐</span>
      </el-col>
      <el-col :span="5" @keyup.enter.native="musesClick">
        <el-input
          v-model="search"
          placeholder="搜索"
          prefix-icon="el-icon-search"
          @keyup.enter.native="getSearch"
          clearable
        ></el-input>
      </el-col>
      <el-col :span="12">
        <span class="icon">
          <el-avatar :size="40" :src="avatarUrl">
            <i class="el-icon-user-solid"></i>
          </el-avatar>
        </span>
        <div class="login" v-if="isshow">
          <el-popover placement="bottom" width="500" trigger="click">
            <el-form :model="login" label-width="100px" :rules="rules" ref="login">
              <el-form-item label="手机号码" prop="phoneNumbar">
                <el-input v-model="login.phoneNumbar"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="login.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onLogin('login')">登录</el-button>
                <el-button @click="resetForm('login')">重置</el-button>
              </el-form-item>
            </el-form>
            <el-button slot="reference">登录</el-button>
          </el-popover>
        </div>

        <div class="login" v-else>
          <el-popover placement="bottom" width="20" trigger="click">
            <div>昵称：{{ nickname }}</div>
            <div>我的等级：LV.{{ level }}</div>
            <el-button slot="reference">我的信息</el-button>
          </el-popover>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引入网络接口
import { getSearch } from "@/network/navBarAPI/search";
import {
  logins,
  getAccount,
  getUsresLevel,
  getUserPlayList,
} from "@/network/login";

export default {
  name: "navBar",
  data () {
    return {
      search: "",
      isshow: true,
      nickname: "",
      avatarUrl: "",
      level: 0,
      login: {
        phoneNumbar: "",
        password: "",
      },
      rules: {
        phoneNumbar: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created () {
    this.getSearch();
  },
  methods: {
    // 网络请求函数方法
    getSearch () {
      const keywords = this.search;
      getSearch(keywords).then((res) => {
        this.$store.state.musicLIst = res.result.songs;
      });
    },
    // 登录
    logins () {
      const phones = this.login.phoneNumbar;
      const passwords = this.login.password;
      // 获取手机登录
      logins(phones, passwords).then((res) => {
        // 保存用户Id
        this.$store.state.usersId = res.bindings[0].userId;
        this.getUserPlayList(this.$store.state.usersId);
      });
    },
    // 账号信息
    getAccount () {
      getAccount().then((res) => {
        this.nickname = res.profile.nickname;
        this.avatarUrl = res.profile.avatarUrl;
      });
    },
    // 用户等级
    getUsresLevel () {
      getUsresLevel().then((res) => {
        this.level = res.data.level;
      });
    },
    // 用户歌单
    getUserPlayList (uid) {
      setTimeout(() => {
        getUserPlayList(uid).then((res) => {
          this.$store.state.userplaylist = res.playlist;
        });
      }, 500);
    },
    errorHandler () {
      return false;
    },
    // 登录完成时执行函数
    onLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.logins();
          this.getAccount();
          this.isshow = false;
          this.getUsresLevel();
        } else {
          return false;
        }
      });
    },
    // 重置表单
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    musesClick () {
      this.$router.push("/musices");
    },
    indexClick () {
      this.$router.push("/found");
    },
    handleCommand (command) {
      this.$message("click on item " + command);
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 60px;
  background-color: #222225;
  line-height: 60px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  .title {
    margin-left: 25px;
    color: #fff;
    font-size: 20px;
  }
  .titletext {
    cursor: pointer;
    margin-left: 5px;
    font-weight: 700;
  }
  .el-dropdown {
    margin-left: 780px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .icon {
    position: absolute;
    width: 100px;
    right: 0;
    top: 10px;
    left: 1590px;
  }
  .el-dropdown-link2 {
    cursor: pointer;
  }
  .login {
    cursor: pointer;
    margin-left: 660px;
    z-index: 100;
  }
}
</style>
