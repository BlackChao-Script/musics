<template>
  <div class="songDetails">
    <!-- 表头信息 -->
    <div class="songDetails_title">
      <div class="title_name">{{ musics[0].name }}</div>
      <div class="title_alia">{{ musics[0].alia[0] }}</div>
      <div class="title_names">
        <span class="names_a">{{ musics[0].ar[0].name }}</span
        >-
        <span class="names_b">{{ musics[0].al.name }}</span>
      </div>
    </div>
    <!-- 歌词部分 -->
    <div class="songDetails_content">
      <div class="content_details" ref="lyrics">
        <div
          class="details_item"
          v-for="(item, index) in lyric"
          :key="index"
          :style="{
            color: currenIndex === index ? '#fff' : '#ccc',
            fontSize: currenIndex === index ? '20px' : '15px',
            fontWeight: currenIndex === index ? '700' : '400',
          }"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "songDetails",
  data() {
    return {
      currenIndex: 0,
    };
  },
  props: {
    musics: {
      type: Array,
    },
    lyric: {
      tyep: Array,
    },
  },
  watch: {
    "$store.state.currenIndex": function(n) {
      this.currenIndex = n;
      this.$refs.lyrics.style.top = -n * 45 + "px";
    },
  },
};
</script>

<style lang="less" scoped>
.songDetails {
  flex: 60%;
  .songDetails_title {
    text-align: center;
    .title_name {
      color: #fff;
      font-size: 20px;
    }
    .title_alia {
      color: #ccc;
      font-size: 15px;
      margin-top: 5px;
    }
    .title_names {
      margin-top: 5px;
      font-size: 13px;
      color: #656666;
    }
  }
  .songDetails_content {
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    height: 88%;
    .content_details {
      margin-top: 25%;
      position: absolute;
      top: 0;
      margin-left: 10%;
      text-align: center;
      transition: all 0.5s;
      width: 80%;
      .details_item {
        margin-top: 10px;
        height: 35px;
        color: #ccc;
      }
    }
  }
}
</style>
