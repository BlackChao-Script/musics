<template>
  <div class="radioSlideshow">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item
        v-for="(item, index) in radioSlideshow"
        :key="index"
        class="picitem"
      >
        <h3 class="medium">
          <a :href="item.url">
            <img :src="item.pic" />
          </a>
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "radioSlideshow",
  props:{
    radioSlideshow:{
      type:Array
    }
  }
};
</script>

<style lang="less" scoped>
.recomslideshow {
  width: 1550px;
  margin: 150px auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.picitem {
  border-radius: 10px;
  img {
    width: 100%;
  }
}
</style>
