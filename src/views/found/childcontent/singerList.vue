<template>
  <div class="singerlist">
    <div v-for="(item, index) in singers" :key="index" class="singerlist_item" @click="getidsClick(item.id)">
      <div class="item_images">
        <img :src="item.img1v1Url" />
      </div>
      <div class="item_name">{{item.name}}</div>
      <div class="item_alias">{{item.alias[0]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "singerList",
  props: {
    singers: {
      type: Array,
    },
  },
  methods:{
    getidsClick(id){
      this.$router.push("/singerdetailed/" +id)
    }
  }
};
</script>

<style lang="less" scoped>
.singerlist {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  .singerlist_item {
    cursor: pointer;
    width: 300px;
    height: 350px;
    margin-bottom: 10px;
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
    .item_images {
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .item_name{
      color: #fff;
    }
    .item_alias{
      margin-top: 5px;
      color: #ccc;
    }
  }
}
</style>
