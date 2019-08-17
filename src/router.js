import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import dashboard from "./views/dashboard";
import ClassicCase from "./views/ClassicCase";
import HonoraryAndCertificate from "./views/HonoraryAndCertificate";
import About from "./views/About";
//公安
import GAIndex from "./views/About/gongan";
import GAServerSystem from "./views/About/gongan/110ServerSystem"; //110便民服务系统
//交警
import JJIndex from "./views/About/jiaojing";
import JiaoTongJingWeiAnBao from "./views/About/jiaojing/JiaoTongJingWeiAnBao"; //交通警卫安保
//边检
import BJIndex from "./views/About/bianjian";
import HaiGangBianJian from "./views/About/bianjian/HaiGangBianJian"; //海港边检决策分析系统
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
                        /**
                         * @Describe 业务简介入口
                         */
                        {
                            path: "/dashboard/About",
                            name: "About",
                            component: About
                        },
                        /**
                         * @Describe 典型案例
                         */
                        {
                            path: "/dashboard/ClassicCase",
                            name: "ClassicCase",
                            component: ClassicCase
                        }
                    ]
                },
                /**
                 * @Describe 荣誉资质
                 */
                {
                    path: "/HonoraryAndCertificate",
                    component: HonoraryAndCertificate
                },
                /**
                 * @GongAn
                 */
                {
                    path: "GAIndex",
                    name: "GAIndex",
                    component: GAIndex
                },
                {
                    path: "GAServerSystem",
                    component: GAServerSystem
                },
                /**
                 * @JiaoJing
                 */
                {
                    path: "JJIndex",
                    name: "JJIndex",
                    component: JJIndex
                },
                {
                    path: "JiaoTongJingWeiAnBao",
                    component: JiaoTongJingWeiAnBao
                },
                /**
                 * @BianJian
                 */
                {
                    path: "BJIndex",
                    name: "BJIndex",
                    component: BJIndex
                },
                {
                    path: "HaiGangBianJian",
                    component: HaiGangBianJian
                }
            ]
        }
    ]
});
