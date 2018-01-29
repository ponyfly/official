<template>
  <div id="app">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="slide-img" src="./imgs/01.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <swiper-hor :options="swiperHorOption">
          <swiper-slide-hor>
            <img class="slide-img" src="./imgs/02.jpg" alt="">
          </swiper-slide-hor>
          <swiper-slide-hor>
            <img class="slide-img" src="./imgs/03.jpg" alt="">
          </swiper-slide-hor>
          <swiper-slide-hor>
            <img class="slide-img" src="./imgs/04.jpg" alt="">
          </swiper-slide-hor>
          <swiper-slide-hor>
            <img class="slide-img" src="./imgs/05.jpg" alt="">
          </swiper-slide-hor>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper-hor>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import './style/swiper-3.4.2.min.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'App',
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        width: window.innerWidth,
        height: window.innerHeight,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperHorOption: {
        spaceBetween: 30,
        effect: 'fade',
        width: window.innerWidth,
        height: window.innerHeight,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    'swiper-hor': swiper,
    'swiper-slide-hor': swiperSlide
  }
}
</script>

<style>
  @import "style/reset.css";
  #app {width: 100%; height:100%; overflow:hidden;}
  .slide-img {width: 100%; height:100%;}
  .swiper-container-vertical>.swiper-pagination-bullets { top:25%;}
</style>
