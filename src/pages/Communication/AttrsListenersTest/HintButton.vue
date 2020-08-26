<template>
  <div>
    <a :title="title">
      <el-button v-bind="$attrs"></el-button>
    </a>
  </div>
</template>

<script>
export default {
  name: "HintButton",
  props: ["title"],
};
</script>

<style lang="less" scoped></style>
