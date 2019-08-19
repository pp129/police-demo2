<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            采用CTI、IVR、IP语音、现代通信、计算机网络、GIS等技术，满足交警接警业务需求，实现快速接警、快速
            定位、快速决策，保证公安交通管理局、交警大队、交警中队、最小处置单元四级公安交通机关上下贯通、左右协
            同、信息共享、各有侧重。
        </div>
        <div class="hive hive-warn"></div>
        <div class="hive hive-border hive-pick"><p>快速接警</p></div>
        <div class="hive hive-location"></div>
        <div class="hive hive-border hive-decision"><p>快速决策</p></div>
        <div class="hive hive-border hive-point"><p>快速定位</p></div>
        <div class="hive hive-chart"></div>
        <ul class="list">
            <li class="item">多渠道呼叫中心</li>
            <li class="item">接处警子系统</li>
            <li class="item">智慧调度子系统</li>
            <li class="item">GIS勤务调度辅助子系统</li>
            <li class="item">警情分析研判子系统</li>
        </ul>
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
        width: calc(~"213*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/122接处警系统/122接处警系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"750*@{pw}vw");
        height: calc(~"70*@{ph}vh");
        position: absolute;
        top: calc(~"(34 + 21)*@{ph}vh");
        left: calc(~"90*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .hive {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(~"116*@{pw}vw");
        height: calc(~"102*@{ph}vh");
        p {
            font-size: 3.6rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
        }
        &-warn {
            background: url("../../../assets/JJ/122接处警系统/hive-warn.png")
                no-repeat;
            background-size: 100% 100%;
            bottom: calc(~"95*@{ph}vh");
            left: calc(~"75*@{pw}vw");
        }
        &-border {
            background: url("../../../assets/JJ/122接处警系统/hive.png")
                no-repeat;
            background-size: 100% 100%;
        }
        &-pick {
            bottom: calc(~"150*@{ph}vh");
            left: calc(~"172*@{pw}vw");
        }
        &-decision {
            bottom: calc(~"39*@{ph}vh");
            left: calc(~"172*@{pw}vw");
        }
        &-location {
            background: url("../../../assets/JJ/122接处警系统/hive-location.png")
                no-repeat;
            background-size: 100% 100%;
            bottom: calc(~"205*@{ph}vh");
            left: calc(~"273*@{pw}vw");
        }
        &-point {
            bottom: calc(~"95*@{ph}vh");
            left: calc(~"273*@{pw}vw");
        }
        &-chart {
            background: url("../../../assets/JJ/122接处警系统/hive-chart.png")
                no-repeat;
            background-size: 100% 100%;
            bottom: calc(~"150*@{ph}vh");
            left: calc(~"374*@{pw}vw");
        }
    }
    .list {
        position: absolute;
        top: calc(~"154*@{ph}vh");
        left: calc(~"610*@{pw}vw");
        height: calc(~"209*@{ph}vh");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item {
            font-size: 3rem;
            font-weight: 400;
            color: rgba(3, 173, 232, 1);
            padding-left: calc(~"27*@{pw}vw");
            background: url("../../../assets/dot.png") no-repeat left center;
            background-size: calc(~"12*@{pw}vw") calc(~"12*@{ph}vh");
        }
    }
}
</style>
