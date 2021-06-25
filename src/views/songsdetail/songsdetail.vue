<template>
  <div class="songsdetail">
    <div class="songsdetail_top">
      <!-- 歌碟组件模块 -->
      <song-disc :musics="musics"></song-disc>
      <!-- 歌词组件模块 -->
      <song-details :musics="musics" :lyric="lyric"></song-details>
    </div>
    <!-- 歌曲评论组件模块 -->
    <song-comments :comments="comments"></song-comments>
  </div>
</template>

<script>
// 引入组件
import songDisc from "./childcontent/songDisc";
import songDetails from "./childcontent/songDetails";
import songComments from "./childcontent/songComments";

// 引入网络请求
import { getgetSongs } from "@/network/songlistdetail";
import { getLyrics } from "@/network/getmusic";
import { getHotComments } from "@/network/getmv";
export default {
  name: "songsdetail",
  data() {
    return {
      musics: [],
      lyric: [],
      comments: [],
    };
  },
  // 注册组件
  components: {
    songDisc,
    songDetails,
    songComments,
  },
  created() {
    // 保存跟随页面传入的id
    this.id = this.$route.params.id;
    // 根据id获取音乐详细信息
    getgetSongs(this.id).then((res) => {
      this.musics = res.songs;
    });
    // 根据id获取音乐歌词
    getLyrics(this.id).then(
      (res) => ((this.lyric = []), this.formatLyric(res.lrc.lyric))
    );
    // 获取歌曲评论
    getHotComments(this.id, 0).then((res) => {
      this.comments = res.data.comments;
    });
  },
  methods: {
    //传入初始歌词文本text
    formatLyric(text) {
      let arr = text.split("\n"); //原歌词文本已经换好行了方便很多，我们直接通过换行符“\n”进行切割
      let row = arr.length; //获取歌词行数
      for (let i = 0; i < row; i++) {
        let temp_row = arr[i]; //现在每一行格式大概就是这样"[00:04.302][02:10.00]hello world";
        let temp_arr = temp_row.split("]"); //我们可以通过“]”对时间和文本进行分离
        let text = temp_arr.pop(); //把歌词文本从数组中剔除出来，获取到歌词文本了！
        //再对剩下的歌词时间进行处理
        temp_arr.forEach((element) => {
          let obj = {};
          let time_arr = element.substr(1, element.length - 1).split(":"); //先把多余的“[”去掉，再分离出分、秒
          let s = parseInt(time_arr[0]) * 60 + Math.ceil(time_arr[1]); //把时间转换成与currentTime相同的类型，方便待会实现滚动效果
          obj.time = s;
          obj.text = text;
          this.lyric.push(obj); //每一行歌词对象存到组件的lyric歌词属性里
        });
      }
      this.lyric.sort(this.sortRule); //由于不同时间的相同歌词我们给排到一起了，所以这里要以时间顺序重新排列一下
      this.$store.state.lyricArr = this.lyric; //把初始化完成的lyric保存到lyricArr里面
    },

    sortRule(a, b) {
      //设置一下排序规则
      return a.time - b.time;
    },
  },
};
</script>

<style lang="less" scoped>
.songsdetail {
  margin-top: 100px;
  .songsdetail_top {
    display: flex;
    width: 1550px;
    margin-left: 150px;
    height: 600px;
    box-shadow: 0 10px 10px rgba(100, 100, 100, 0.1);
  }
}
</style>
