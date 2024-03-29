import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

Vue.use(VueAwesomeSwiper);
