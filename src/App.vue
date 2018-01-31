<template>
  <div id="app">
    <swiper :options="swiperOption">
      <swiper-slide class="slide-1">
        <img class="content" src="./imgs/pc-1-1.png" alt="">
        <img class="start-ani start-ani-1" src="./imgs/start.png" alt="">
        <img class="start-ani start-ani-2" src="./imgs/start.png" alt="">
      </swiper-slide>
      <swiper-slide class="slide-2">
        <img class="start-ani start-ani-1" src="./imgs/start.png" alt="">
        <img class="start-ani start-ani-2" src="./imgs/star-2.png" alt="">
        <div class="content">
           <swiper-hor :options="swiperHorOption">
          <swiper-slide-hor class="slide-2-common">
            <img src="./imgs/001.jpg" alt="">
          </swiper-slide-hor>
          <swiper-slide-hor class="slide-2-common">
            <img src="./imgs/002.jpg" alt="">
          </swiper-slide-hor>
          <swiper-slide-hor class="slide-2-common">
            <img src="./imgs/003.jpg" alt="">
          </swiper-slide-hor>
          <swiper-slide-hor class="slide-2-common">
            <img src="./imgs/004.jpg" alt="">
          </swiper-slide-hor>
          <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
        </swiper-hor>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
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
        mousewheel: true,
        resistanceRatio : 0,
        width: window.innerWidth,
        height: window.innerHeight,
        pagination: {
          el: '.swiper-pagination-v',
          clickable: true
        }
      },
      swiperHorOption: {
//        width: window.innerWidth,
//        height: window.innerHeight,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination-h',
          clickable: true
        },
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
  .swiper-container-vertical>.swiper-pagination-bullets { top:25%;}
  .slide-1 {background-image:url('./imgs/pc-1.jpg');background-position: center;background-size: cover; height: 100%}
  .slide-1 .content { position: absolute; top:0; right:0; bottom: 0; left:0; z-index:10; margin:auto; width: 62%}
  .slide-1 .start-ani-1 {position: absolute;top: -32%;left: -23%;width: 45%;transform: rotateZ(40deg);animation: swing1-in .64s linear infinite alternate both}
  .slide-1 .start-ani-2 {position: absolute;bottom: -38%; right: -12%;width: 45%;transform: rotateZ(-70deg);animation: swing2-in .64s linear infinite alternate both}
  @keyframes swing1-in {
    0% {transform: rotateZ(45deg)}
    50% {transform: rotateZ(40deg)}
    100% {transform: rotateZ(35deg)}
  }
  @keyframes swing2-in {
    0% {transform: rotateZ(-75deg)}
    50% {transform: rotateZ(-70deg)}
    100% {transform: rotateZ(-65deg)}
  }
  @keyframes swing3-in {
    0% {transform: rotateZ(-5deg)}
    50% {transform: rotateZ(0deg)}
    100% {transform: rotateZ(5deg)}
  }
  .slide-2 {background-color: #fff;overflow: hidden; display: flex; align-items: center;justify-content: center}
  .slide-2 .content {width: 62%; height:62%; background: url("./imgs/pc-2-bg.png");background-position:center;background-size: cover; position: relative;}


  .slide-2 .content .swiper-container { width: 19%; height:78%; position: absolute;top: 17%; left:22%;}
  .slide-2 .start-ani-1 {position: absolute;bottom: -38%;left: -18%; z-index: 11;width: 45%;transform: rotateZ(40deg);animation: swing1-in .64s linear infinite alternate both}
  .slide-2 .start-ani-2 {position: absolute; top: -54%; right: -12%;width: 45%;z-index: 11; transform-origin: 30% 90%;animation: swing3-in .64s linear infinite alternate both}
  .slide-2-common img{ width:100%;}

  .swiper-pagination-bullet-active{ background: #f66;}


  /*.slide-2-common img{ width: 62%;}*/
  /*.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction { left:37%; text-align: left;bottom: 20%}*/
</style>.
