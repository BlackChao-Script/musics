<template>
  <div class="songlists"></div>
</template>

<script>
import { getgetSongs } from "@/network/songlistdetail";
export default {
  name: "songlists",
  data() {
    return {
    };
  },
  components: {
    songsitem,
  },
  props: {
    songIds: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped></style>
