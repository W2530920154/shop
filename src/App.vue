<template>
  <div>
    <!-- 头部组件 -->
    <Header />
    <!-- 足部组件 -->
    <Footer />
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
