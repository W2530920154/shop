<template>
  <div>
    query传参:{{ $route.query.keyword }} params传参:{{
      $route.params.keyword
    }}
    简化传参：{{ keyword }}
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["keyword"],
};
</script>

<style lang="less" scoped></style>
