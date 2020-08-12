<template>
  <div>
    <!-- 头部组件 -->
    <Header />
    <router-view></router-view>
    <!-- 足部组件 -->
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
