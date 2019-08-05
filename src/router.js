import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/dashboard",
            component: Home,
            children: [
                {
                    path: "dashboard",
                    component: () => import("./views/dashboard.vue")
                },
                {
                    path: "about",
                    component: () => import("./views/about.vue")
                }
            ]
        }
    ]
});
