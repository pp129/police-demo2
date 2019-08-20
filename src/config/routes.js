import Index from "../views/index.vue";
import Home from "../views/Home";
import dashboard from "../views/dashboard";
import ClassicCase from "../views/ClassicCase";
import HonoraryAndCertificate from "../views/HonoraryAndCertificate";
import About from "../views/About";
//公安
import GAIndex from "../views/About/gongan";
import GAList from "./routes-GA";
//交警
import JJIndex from "../views/About/jiaojing";
import JJList from "./routes-JJ";
//边检
import BJIndex from "../views/About/bianjian";
import BJList from "./routes-BJ";

let routes = [
    { path: "*", name: "*", redirect: "/", meta: {} },
    {
        path: "/",
        name: "home",
        redirect: "/dashboard",
        component: Index,
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: dashboard,
                redirect: "/dashboard/Home",
                children: [
                    /**
                     * @Describe 主页面
                     */
                    {
                        path: "/dashboard/Home",
                        name: "Home",
                        component: Home
                    },
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
            /**
             * @JiaoJing
             */
            {
                path: "JJIndex",
                name: "JJIndex",
                component: JJIndex
            },
            /**
             * @BianJian
             */
            {
                path: "BJIndex",
                name: "BJIndex",
                component: BJIndex
            }
        ]
    }
];
for (let i of GAList) {
    routes[1].children.push(i);
}
for (let i of JJList) {
    routes[1].children.push(i);
}
for (let i of BJList) {
    routes[1].children.push(i);
}
export default routes;
