<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            系统采用雷达检测的方式，利用二维主动扫描式阵列雷达微波检测技术，通过对路面发射微波，以每秒20次的扫描频率可靠地检测路上每一车道的目标，可同时识别及跟踪至少128个目标对象，来准确区分机动车、非机动车等。采集的交通数据包括:交通流量、平均车速、占有率、车头时距等交通信息，判断道路是否拥堵，为科学管控提供依据。
        </div>
        <div class="demo"></div>
        <div class="bottom"></div>
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
        width: calc(~"321*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/雷达多目标监测/雷达多目标监测.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"723*@{pw}vw");
        height: calc(~"96*@{ph}vh");
        position: absolute;
        top: calc(~"(41 + 12)*@{ph}vh");
        left: calc(~"113*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .demo {
        position: absolute;
        width: calc(~"418*@{pw}vw");
        height: calc(~"256*@{ph}vh");
        bottom: calc(~"68*@{ph}vh");
        left: calc(~"266*@{pw}vw");
        background: url("../../../assets/JJ/雷达多目标监测/demo.png") no-repeat;
        background-size: 100% 100%;
        z-index: 2;
    }
    .bottom {
        position: absolute;
        width: calc(~"518*@{pw}vw");
        height: calc(~"82*@{ph}vh");
        bottom: 0;
        left: calc(~"219*@{pw}vw");
        background: url("../../../assets/JJ/雷达多目标监测/bottom.png")
            no-repeat;
        background-size: 100% 100%;
        z-index: 1;
    }
}
</style>
