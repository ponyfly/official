import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
