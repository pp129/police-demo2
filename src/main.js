import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import _ from "lodash";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
Vue.use(_);
Vue.use(VueAwesomeSwiper);
