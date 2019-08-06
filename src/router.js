import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import dashboard from "./views/dashboard";
import HaiGangBianJian from "./views/HaiGangBianJian";

Vue.use(Router);

export default new Router({
    routes: [
        { path: "*", redirect: "/", meta: {} },
        {
            path: "/",
            redirect: "/dashboard",
            component: Home,
            children: [
                {
                    path: "dashboard",
                    component: dashboard
                },
                {
                    path: "HaiGangBianJian",
                    component: HaiGangBianJian
                }
            ]
        }
    ]
});
