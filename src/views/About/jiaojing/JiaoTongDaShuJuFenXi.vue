<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            基于高可用大数据分布式架构技术，全面整合交通数据资源，集数据的自由筛选、多维碰撞、情报
            深度研判分析为一体，为公安交管部门提供城市交通感知、交通安全保障、交通事故处理、车辆稽查、勤
            务管理提升、交通信号优化的一体化辅助决策支撑。
        </div>
        <div class="demo-2"></div>
        <div class="demo-1"></div>
        <p class="text">
            交通信息采集
        </p>
        <div class="dots"></div>
        <div class="board">
            <ul class="list">
                <li class="item">交通资源一张图</li>
                <li class="item">融合路况判态</li>
                <li class="item">节假日及重大活动</li>
                <li class="item">交通情况分析预测</li>
                <li class="item">车辆活跃度分析</li>
                <li class="item">交通OD分析</li>
            </ul>
            <ul class="list">
                <li class="item">交通事故监测</li>
                <li class="item">交通流量分析预测</li>
                <li class="item">车辆稽查布控</li>
                <li class="item">信号灯优化辅助</li>
                <li class="item">勤务联动辅助</li>
            </ul>
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
        width: calc(~"327*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/交通大数据分析/交通大数据分析.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"714*@{pw}vw");
        height: calc(~"63*@{ph}vh");
        position: absolute;
        top: calc(~"46*@{ph}vh");
        left: calc(~"115*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .demo-2 {
        position: absolute;
        width: calc(~"367*@{pw}vw");
        height: calc(~"204*@{ph}vh");
        top: calc(~"104*@{ph}vh");
        left: calc(~"170*@{pw}vw");
        background: url("../../../assets/JJ/交通大数据分析/demo-2.png")
            no-repeat;
        background-size: 100% 100%;
        z-index: 1;
    }
    .demo-1 {
        position: absolute;
        width: calc(~"366*@{pw}vw");
        height: calc(~"276*@{ph}vh");
        top: calc(~"146*@{ph}vh");
        left: calc(~"47*@{pw}vw");
        background: url("../../../assets/JJ/交通大数据分析/demo-1.png")
            no-repeat;
        background-size: 100% 100%;
        z-index: 2;
    }
    .text {
        width: calc(~"73*@{pw}vw");
        height: calc(~"42*@{ph}vh");
        font-size: 3.6rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        bottom: calc(~"168*@{ph}vh");
        right: calc(~"359*@{pw}vw");
        text-align: center;
    }
    .dots {
        position: absolute;
        width: calc(~"42*@{pw}vw");
        height: calc(~"10*@{ph}vh");
        bottom: calc(~"183*@{ph}vh");
        right: calc(~"309*@{pw}vw");
        background: url("../../../assets/JJ/交通大数据分析/dots.png") no-repeat;
        background-size: 100% 100%;
    }
    .board {
        position: absolute;
        width: calc(~"242*@{pw}vw");
        height: calc(~"151*@{ph}vh");
        bottom: calc(~"110*@{ph}vh");
        right: calc(~"42*@{pw}vw");
        background: url("../../../assets/JJ/交通大数据分析/border.png")
            no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: row;
        padding-left: calc(~"6*@{pw}vw");
        box-sizing: border-box;
        .list {
            flex: 1;
            margin-top: calc(~"12*@{ph}vh");
            .item {
                font-size: 2.6rem;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                margin-bottom: calc(~"6*@{ph}vh");
            }
        }
    }
}
</style>
