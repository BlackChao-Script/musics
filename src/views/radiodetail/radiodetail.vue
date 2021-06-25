<template>
  <div class="radiodetail">
    <!-- 电台详细组件 -->
    <radiodetails :detailes="detailes"></radiodetails>
    <!-- 电台节目列表 -->
    <radiodlist :programs="programs"></radiodlist>
  </div>
</template>

<script>
// 引入组件
import radiodetails from "./childcontent/radiodetails";
import radiodlist from "./childcontent/radiodlist";
// 引入网络接口
import { getRadioDetail, getRadio } from "@/network/radiodetail";
export default {
  naem: "radiodetail",
  data() {
    return {
      detailes: {},
      programs: [],
    };
  },
  components: {
    radiodetails,
    radiodlist,
  },
  created() {
    this.id = this.$route.params.id;
    // 获取电台详细
    getRadioDetail(this.id).then((res) => {
      this.detailes = res.data;
    });
    // 获取电台节目
    getRadio(this.id).then((res) => {
      this.programs = res.programs;
      console.log(this.programs);
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.radiodetail {
  margin-top: 100px;
  width: 1550px;
  margin-left: 150px;
}
</style>
