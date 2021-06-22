<template>
  <div class="videomv">
    1
  </div>
</template>

<script>
import { getAddress } from "@/network/getmv";
export default {
  name: "videomv",
  props: {
    mvs: {
      type: Object,
    },
  },
  created() {
    this.getAddress();
  },
  methods: {
    getAddress() {
      const id = mvs.id;
      getAddress(id).then((res) => {
        console.log(id);
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
