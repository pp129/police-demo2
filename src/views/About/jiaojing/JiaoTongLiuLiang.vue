<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            运用可靠的数据传输技术和大数据分布式存储技术，实现对各类型交
            通检测设备数据（包括卡口、电警、地磁、射频、视频）的采集、统一存储
            和跨部门数据查询等功能，为城市规划、路网建设、道路拥堵治理等提供数
            据支持。
        </div>
        <div class="demo"></div>
        <div class="step step-top">
            <div class="item item-1">设备一张图</div>
            <div class="arrow-left arrow-left-1"></div>
            <div class="item item-2">设备查询</div>
            <div class="arrow-left arrow-left-2"></div>
            <div class="item item-3">路段查询</div>
            <div class="arrow-left arrow-left-3"></div>
            <div class="item item-4">路口查询</div>
            <div class="arrow-left arrow-left-4"></div>
            <div class="item item-5">设备管理</div>
        </div>
        <div class="arrow-up arrow-up-1"></div>
        <div class="step-m step-m-1">资源梳理与校验、海量数据预处理</div>
        <div class="arrow-up arrow-up-2"></div>
        <div class="step-m step-m-2">数据接入</div>
        <div class="arrow-up arrow-up-3"></div>
        <div class="step step-bottom">
            <div class="item item-1">设备一张图</div>
            <div class="arrow-left arrow-left-1"></div>
            <div class="item item-2">设备查询</div>
            <div class="arrow-left arrow-left-2"></div>
            <div class="item item-3">路段查询</div>
            <div class="arrow-left arrow-left-3"></div>
            <div class="item item-4">路口查询</div>
            <div class="arrow-left arrow-left-4"></div>
            <div class="item item-5">设备管理</div>
        </div>
    </div>
</template>

<script>
export default {
    name: ""
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        position: absolute;
        width: calc(~"243*@{pw}vw");
        height: calc(~"27*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/交通流量采集/交通流量采集.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"495*@{pw}vw");
        height: calc(~"96*@{ph}vh");
        position: absolute;
        top: calc(~"45*@{ph}vh");
        left: calc(~"76*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .demo {
        position: absolute;
        width: calc(~"364*@{pw}vw");
        height: calc(~"383*@{ph}vh");
        bottom: 0;
        right: 0;
        background: url("../../../assets/JJ/交通流量采集/demo.png") no-repeat;
        background-size: 100% 100%;
    }
    .step {
        /*width: calc(~"491*@{pw}vw");
        height: calc(~"51*@{ph}vh");*/
        position: absolute;
        left: calc(~"62*@{pw}vw");
        .item {
            width: calc(~"110*@{pw}vw");
            height: calc(~"51*@{ph}vh");
            position: absolute;
            top: 0;
            background: url("../../../assets/JJ/交通流量采集/border.png")
                no-repeat;
            background-size: 100% 100%;
            font-size: 3rem;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: calc(~"51*@{ph}vh");
            text-align: center;
            &-1 {
                left: 0;
            }
            &-2 {
                left: calc(~"101*@{pw}vw");
            }
            &-3 {
                left: calc(~"202*@{pw}vw");
            }
            &-4 {
                left: calc(~"303*@{pw}vw");
            }
            &-5 {
                left: calc(~"404*@{pw}vw");
            }
        }
        .arrow-left {
            width: calc(~"18*@{pw}vw");
            height: calc(~"23*@{ph}vh");
            position: absolute;
            background: url("../../../assets/JJ/交通流量采集/arrow-left.png")
                no-repeat;
            background-size: 100% 100%;
            top: calc(~"13.5*@{ph}vh");
            &-1 {
                left: calc(~"(110 - 12)*@{pw}vw");
            }
            &-2 {
                left: calc(~"(211 - 12)*@{pw}vw");
            }
            &-3 {
                left: calc(~"(312 - 12)*@{pw}vw");
            }
            &-4 {
                left: calc(~"(413 - 12)*@{pw}vw");
            }
        }
        &-top {
            top: calc(~"147*@{ph}vh");
        }
        &-bottom {
            top: calc(~"(338 + 13 + 3)*@{ph}vh");
        }
    }
    .arrow-up {
        width: calc(~"22*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        background: url("../../../assets/JJ/交通流量采集/arrow-up.png")
            no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: calc(~"308*@{pw}vw");
        &-1 {
            top: calc(~"193*@{ph}vh");
        }
        &-2 {
            top: calc(~"263*@{ph}vh");
        }
        &-3 {
            top: calc(~"332*@{ph}vh");
        }
    }
    .step-m {
        height: calc(~"39*@{ph}vh");
        background: url("../../../assets/JJ/交通流量采集/border-thin.png")
            no-repeat;
        background-size: 100% 100%;
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        color: rgba(3, 173, 232, 1);
        line-height: calc(~"39*@{ph}vh");
        position: absolute;
        &-1 {
            width: calc(~"288*@{pw}vw");
            left: calc(~"173*@{pw}vw");
            top: calc(~"224*@{ph}vh");
        }
        &-2 {
            width: calc(~"122*@{pw}vw");
            left: calc(~"255*@{pw}vw");
            top: calc(~"291*@{ph}vh");
        }
    }
}
</style>
