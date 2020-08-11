<template>
  <div>query传参:{{ $route.query.keyword }}
    params传参:{{ $route.params.keyword }}
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="less" scoped></style>
