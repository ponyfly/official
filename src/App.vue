<template>
  <div id="app">
    hello
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @import "style/reset.css";
  #app {width: 100%; height:100%;}
  #app .pages {width: 100%; height:100%; overflow-y: scroll; position: relative;}
  #app .pages .page-1 {width: 100%; height:100%; }
  #app .pages .page-1 .img-po {width: 100%; height:100%; background-color: #f66;}
  #app .pages .page-2 {width: 100%; height:100%;}
  #app .pages .page-2 .slides {width: 100%; height:100%; overflow-x: scroll}
  #app .pages .page-2 .slides .slide{width: 100%; height:100%;}
  #app .pages .page-2 .slides .slide .slide1{width: 100%; height:100%; background-color: cornflowerblue;}
  #app .pages .page-2 .slides .slide .slide2{width: 100%; height:100%; background-color: cadetblue;}
  #app .pages .page-2 .slides .slide .slide3{width: 100%; height:100%; background-color: darkblue;}
  #app .pages .page-2 .slides .slide .slide4{width: 100%; height:100%; background-color: fuchsia;}
</style>
