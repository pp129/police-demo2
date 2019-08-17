import HaiGangBianJian from "../views/About/bianjian/HaiGangBianJian"; //海港边检决策分析系统
import ChuRuJing from "../views/About/bianjian/ChuRuJing"; //出入境监管
import KouAnXianDingQuYu from "../views/About/bianjian/KouAnXianDingQuYu"; //口岸限定区域
import TiKouZhiNengJianGuan from "../views/About/bianjian/TiKouZhiNengJianGuan"; //梯口智能监管
import YiDongBianJian from "../views/About/bianjian/YiDongBianJian"; //移动边检APP

let routes = [
    {
        path: "HaiGangBianJian",
        name: "HaiGangBianJian",
        component: HaiGangBianJian
    },
    {
        path: "ChuRuJing",
        name: "ChuRuJing",
        component: ChuRuJing
    },
    {
        path: "KouAnXianDingQuYu",
        name: "KouAnXianDingQuYu",
        component: KouAnXianDingQuYu
    },
    {
        path: "TiKouZhiNengJianGuan",
        name: "TiKouZhiNengJianGuan",
        component: TiKouZhiNengJianGuan
    },
    {
        path: "YiDongBianJian",
        name: "YiDongBianJian",
        component: YiDongBianJian
    }
];
for (let i of routes) {
    i.meta = {
        parent: "BJIndex"
    };
}
export default routes;
