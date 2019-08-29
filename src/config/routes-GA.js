import QinWuKeShiHua from "../views/About/gongan/QinWuKeShiHua"; //勤务可视化作战平台
import KeShiHuaDaPing from "../views/About/gongan/KeShiHuaDaPing"; //可视化大屏展示系统
import YiDongJingWu from "../views/About/gongan/YiDongJingWu"; //移动警务应用系统
import ZongHeQingBao from "../views/About/gongan/ZongHeQingBao"; //综合情报会商研判系统
import JingQingGenZong from "../views/About/gongan/JingQingGenZong"; //警情跟踪监督管理
import QICheZuLing from "../views/About/gongan/QICheZuLing"; //汽车租赁安全监管
import SheHuiZiYuan from "../views/About/gongan/SheHuiZiYuan"; //社会资源安全监管
import QiYeRenYuan from "../views/About/gongan/QiYeRenYuan"; //企业人员身份核查系统
import WuRenJi from "../views/About/gongan/WuRenJi"; //无人机安全监管
import YiBiaoSanShi from "../views/About/gongan/YiBiaoSanShi"; //一标三实
import GAServerSystem from "../views/About/gongan/GAServerSystem"; //110便民服务系统

let routes = [
    {
        path: "QinWuKeShiHua",
        name: "QinWuKeShiHua",
        component: QinWuKeShiHua
    },
    {
        path: "KeShiHuaDaPing",
        name: "KeShiHuaDaPing",
        component: KeShiHuaDaPing
    },
    {
        path: "YiDongJingWu",
        name: "YiDongJingWu",
        component: YiDongJingWu
    },
    {
        path: "ZongHeQingBao",
        name: "ZongHeQingBao",
        component: ZongHeQingBao
    },
    {
        path: "JingQingGenZong",
        name: "JingQingGenZong",
        component: JingQingGenZong
    },
    {
        path: "QICheZuLing",
        name: "QICheZuLing",
        component: QICheZuLing
    },
    {
        path: "SheHuiZiYuan",
        name: "SheHuiZiYuan",
        component: SheHuiZiYuan
    },
    {
        path: "QiYeRenYuan",
        name: "QiYeRenYuan",
        component: QiYeRenYuan
    },
    {
        path: "WuRenJi",
        name: "WuRenJi",
        component: WuRenJi
    },
    {
        path: "YiBiaoSanShi",
        name: "YiBiaoSanShi",
        component: YiBiaoSanShi
    },
    {
        path: "GAServerSystem",
        name: "GAServerSystem",
        component: GAServerSystem
    }
];
for (let i of routes) {
    i.meta = {
        parent: "GAIndex"
    };
}
export default routes;
