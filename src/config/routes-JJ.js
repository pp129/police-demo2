import JiaoTongJingWeiAnBao from "../views/About/jiaojing/JiaoTongJingWeiAnBao"; //交通警卫安保
import JiaoTongDaShuJu from "../views/About/jiaojing/JiaoTongDaShuJu"; //交通大数据勤务指挥
import JiaoTongDaShuJuFenXi from "../views/About/jiaojing/JiaoTongDaShuJuFenXi"; //交通大数据分析
import JiaoTongLiuLiang from "../views/About/jiaojing/JiaoTongLiuLiang"; //交通流量采集
import XiangMuGongCheng from "../views/About/jiaojing/XiangMuGongCheng"; //项目工程管理
import JiaoTongShiPingGuanLi from "../views/About/jiaojing/JiaoTongShiPingGuanLi"; //交通视频管理系统
import ZhanDaoShiGong from "../views/About/jiaojing/ZhanDaoShiGong"; //占道施工管理系统
import LeiDaDuoMuBiao from "../views/About/jiaojing/LeiDaDuoMuBiao"; //雷达多目标检测
import JieChuJing from "../views/About/jiaojing/JieChuJing"; //122接处警系统
import BanMaXian from "../views/About/jiaojing/BanMaXian"; //斑马线

let routes = [
    {
        path: "JiaoTongJingWeiAnBao",
        name: "JiaoTongJingWeiAnBao",
        component: JiaoTongJingWeiAnBao
    },
    {
        path: "JiaoTongDaShuJu",
        name: "JiaoTongDaShuJu",
        component: JiaoTongDaShuJu
    },
    {
        path: "JiaoTongDaShuJuFenXi",
        name: "JiaoTongDaShuJuFenXi",
        component: JiaoTongDaShuJuFenXi
    },
    {
        path: "JiaoTongLiuLiang",
        name: "JiaoTongLiuLiang",
        component: JiaoTongLiuLiang
    },
    {
        path: "XiangMuGongCheng",
        name: "XiangMuGongCheng",
        component: XiangMuGongCheng
    },
    {
        path: "JiaoTongShiPingGuanLi",
        name: "JiaoTongShiPingGuanLi",
        component: JiaoTongShiPingGuanLi
    },
    {
        path: "ZhanDaoShiGong",
        name: "ZhanDaoShiGong",
        component: ZhanDaoShiGong
    },
    {
        path: "LeiDaDuoMuBiao",
        name: "LeiDaDuoMuBiao",
        component: LeiDaDuoMuBiao
    },
    {
        path: "JieChuJing",
        name: "JieChuJing",
        component: JieChuJing
    },
    {
        path: "BanMaXian",
        name: "BanMaXian",
        component: BanMaXian
    }
];
for (let i of routes) {
    i.meta = {
        parent: "JJIndex"
    };
}
export default routes;
