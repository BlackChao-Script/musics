<template>
  <div class="newmusicList">
    <div
      v-for="(item, index) in NewMusic"
      :key="index"
      class="newmusicList_item"
      @click="getmusic(item.id), getgetSongs(item.id)"
    >
      <span class="item_images">
        <img :src="item.picUrl" />
      </span>
      <span class="item_name">{{ item.name }}</span>
      <span class="item_namea">{{ item.song.artists[0].name }}</span>
      <span class="item_nameb">{{ item.song.album.name }}</span>
    </div>
  </div>
</template>

<script>
import { getmusic } from "@/network/getmusic";
import { getgetSongs } from "@/network/songlistdetail";
export default {
  name: "newmusicList",
  props: {
    NewMusic: {
      type: Array,
    },
  },
  methods: {
    getmusic(id) {
      getmusic(id).then((res) => {
        this.$store.state.recomNewMusicUrl = res.data[0].url;
      });
    },
    getgetSongs(id) {
      getgetSongs(id).then((res) => {
        this.$store.state.musics = res.songs;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.newmusicList {
  margin-top: 20px;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
  border-radius: 10px;
  .newmusicList_item {
    cursor: pointer;
    color: #fff;
    position: relative;
    display: flex;
    line-height: 100px;
    height: 100px;
    margin: 5px 0;
    .item_images {
      margin-left: 10px;
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .item_name {
      margin-left: 20px;
      margin-bottom: 20px;
    }
    .item_namea {
      position: absolute;
      margin-left: 600px;
    }
    .item_nameb {
      position: absolute;
      margin-left: 1000px;
    }
  }
  .newmusicList_item:hover {
    background-color: #222225;
    color: #ccc;
    border-radius: 10px;
  }
}
</style>
