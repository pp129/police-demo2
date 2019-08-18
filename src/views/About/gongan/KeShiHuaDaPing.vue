<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            对海量数据进行采集、清洗、挖掘，得到数据加工结果，以具体数字和指标为依托，通过专业设计
            、样式、组件和模板，为智慧警务凸显数据价值。
        </div>
        <ul class="list">
            <li class="item">警情热力</li>
            <li class="item">警力热力</li>
            <li class="item">交通大数据</li>
            <li class="item">治安防控等级</li>
            <li class="item">交通勤务分布</li>
            <li class="item">接处警</li>
            <li class="item">坐席状态分布</li>
        </ul>
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
        background: url("../../../assets/GA/可视化大屏展示系统/可视化大屏展示系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        position: absolute;
        width: calc(~"680*@{pw}vw");
        top: calc(~"47*@{ph}vh");
        left: calc(~"153*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-indent: 6rem;
        line-height: calc(~"25*@{ph}vh");
    }
    .list {
        position: absolute;
        top: calc(~"177*@{ph}vh");
        left: calc(~"77*@{pw}vw");
        height: calc(~"244*@{ph}vh");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item {
            font-size: 3rem;
            font-weight: bold;
            color: rgba(3, 173, 232, 1);
        }
    }
    .bottom {
        width: calc(~"507*@{pw}vw");
        height: calc(~"155*@{ph}vh");
        background: url("../../../assets/GA/可视化大屏展示系统/bottom.png")
            no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: calc(~"-5*@{ph}vh");
        left: calc(~"250*@{pw}vw");
    }
}
</style>
