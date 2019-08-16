import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import dashboard from "./views/dashboard";
import HaiGangBianJian from "./views/HaiGangBianJian";
import ClassicCase from "./views/ClassicCase";
import About from "./views/About";
import HonoraryAndCertificate from "./views/HonoraryAndCertificate";

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
                    name: "dashboard",
                    component: dashboard,
                    redirect: "/dashboard/About",
                    children: [
                        {
                            path: "/dashboard/About",
                            name: "About",
                            component: About
                        },
                        {
                            path: "/dashboard/ClassicCase",
                            name: "ClassicCase",
                            component: ClassicCase
                        }
                    ]
                },
                {
                    path: "HaiGangBianJian",
                    component: HaiGangBianJian
                },
                {
                    path: "/HonoraryAndCertificate",
                    component: HonoraryAndCertificate
                }
            ]
        }
    ]
});
