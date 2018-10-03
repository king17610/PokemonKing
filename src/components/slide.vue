<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="slide slide-1"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-2"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-3"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-4"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-5"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css"; 
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: 'slide',
  data () {
    return {
      swiperOption: {
        loop: true,
        speed: 1000,  
        autoplay: {
          delay: 3000,
        },
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    }
  },
  components: {
      swiper,
      swiperSlide
   }
}
</script>

<style scoped lang="scss">

.swiper-container {
  max-width: 1280px;
  width: 100%;
  height: 380px;
  background: #fff;
}
.swiper-slide {
  width: 70%;
  background-position: center;
  background-size: cover;
  position: relative;
  .slide {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    &.slide-1 {
      background-image: url("../../static/img/slide1.png");
    }
    &.slide-2 {
      background-image: url("../../static/img/slide2.png");
    }
    &.slide-3 {
      background-image: url("../../static/img/slide3.jpg");
    }
    &.slide-4 {
      background-image: url("../../static/img/slide4.png");
    }
    &.slide-5 {
      background-image: url("../../static/img/slide5.png");
    }
  }
}
.swiper-slide-prev,
.swiper-slide-next {
  background: #fff;
  opacity: 0.7;
  transition: all .3s;
}

</style>
