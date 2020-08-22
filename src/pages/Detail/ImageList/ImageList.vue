<template>
  <div class="swiper-container" ref="imgList">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(image, index) in imageList"
        :key="image.id"
      >
        <img
          :src="image.imgUrl"
          @click="changeDefaultIndex(index)"
          :class="{ active: index === defaultIndex }"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: ["imageList"],
  name: "ImageList",
  data() {
    return {
      defaultIndex: 0,
    };
  },
  methods: {
    changeDefaultIndex(index) {
      this.defaultIndex = index;
      this.$bus.$emit("changeDefaultIndex", index);
    },
  },
  watch: {
    imageList: {
      handler(newValue, oldValue) {
        immediate: true;
        this.$nextTick(() => {
          new Swiper(this.$refs.imgList, {
            // 可以, 只会匹配, 当前组件中的对应元素
            // direction: 'vertical', // 垂直切换选项   默认是水平轮播
            loop: true, // 循环

            // 前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            slidesPerView: 5,
            slidesPerGroup: 5,
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      // &:hover {
      //   border: 2px solid #f60;
      //   padding: 1px;
      // }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
