<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            系统通过传感设备，全范围覆盖斑马线，并实时感知斑马线上是否有行人通过。有行人通过时，
            点亮斑马线两旁的“跑马灯”提醒过往车辆减速慢行。各数据通过物联网络传输到服务器，经分析处
            理呈现各个时段车人流量图等数据，为调整信号灯及警力出勤提供有效依据。
        </div>
        <ul class="list">
            <li class="item">自动感应斑马线上行人</li>
            <li class="item">自动识别电动自行车的行为特征</li>
            <li class="item">自动测量周边环境的可见度</li>
            <li class="item">实时采集人车流量</li>
            <li class="item">运用AI技术智能分析路况</li>
            <li class="item">根据人流量调整斑马线红绿灯</li>
        </ul>
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
        width: calc(~"268*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/斑马线/斑马线.png") no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"660*@{pw}vw");
        height: calc(~"70*@{ph}vh");
        position: absolute;
        top: calc(~"(45 + 22)*@{ph}vh");
        left: calc(~"163*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .list {
        position: absolute;
        height: calc(~"208*@{ph}vh");
        top: calc(~"(166 + 22)*@{ph}vh");
        left: calc(~"150*@{pw}vw");
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
    .demo {
        position: absolute;
        width: calc(~"408*@{pw}vw");
        height: calc(~"250*@{ph}vh");
        bottom: calc(~"54*@{ph}vh");
        right: calc(~"120*@{pw}vw");
        background: url("../../../assets/JJ/斑马线/demo.png") no-repeat;
        background-size: 100% 100%;
    }
    .bottom {
        position: absolute;
        width: calc(~"641*@{pw}vw");
        height: calc(~"81*@{ph}vh");
        bottom: 0;
        right: 0;
        background: url("../../../assets/JJ/斑马线/bottom.png") no-repeat;
        background-size: 100% 100%;
    }
}
</style>
