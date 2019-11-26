<template>
    <div class="main page">
        <div class="title-img"></div>
        <ul class="list">
            <li class="item" v-for="(item, index) in list" :key="index">
                <img class="list-img" :src="item.icon" alt="" />
                <p>{{ item.text }}</p>
            </li>
        </ul>
        <div class="demo1"></div>
        <div class="demo2"></div>
    </div>
</template>

<script>
export default {
    name: "HighwayAI",
    data() {
        return {
            list: [
                {
                    icon: require("../../../assets/JJ/高速公路AI监控系统/icon_1.png"),
                    text: "高速公路路口环境AI监测"
                },
                {
                    icon: require("../../../assets/JJ/高速公路AI监控系统/icon_2.png"),
                    text: "车流量监控智能分析"
                },
                {
                    icon: require("../../../assets/JJ/高速公路AI监控系统/icon_3.png"),
                    text: "车辆违法行为自动抓拍智能分析"
                },
                {
                    icon: require("../../../assets/JJ/高速公路AI监控系统/icon_4.png"),
                    text: "交通通行情况自动化监测发现"
                }
            ]
        };
    }
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        position: absolute;
        width: calc(~"247*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/高速公路AI监控系统/高速公路AI监控系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .list {
        position: absolute;
        top: calc(~"62.5*@{ph}vh");
        left: calc(~"46.5*@{pw}vw");
        height: calc(~"308.85*@{ph}vh");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item {
            color: white;
            font-size: 3rem;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .list-img {
                width: calc(~"72*@{pw}vw");
                height: calc(~"77*@{ph}vh");
            }
        }
    }
    .demo1 {
        position: absolute;
        width: calc(~"484*@{pw}vw");
        height: calc(~"231*@{ph}vh");
        bottom: calc(~"182*@{ph}vh");
        right: calc(~"106*@{pw}vw");
        background: url("../../../assets/JJ/高速公路AI监控系统/demo-1.png")
            no-repeat;
        background-size: 100% 100%;
        z-index: 2;
    }
    .demo2 {
        position: absolute;
        width: calc(~"421*@{pw}vw");
        height: calc(~"164*@{ph}vh");
        bottom: calc(~"81*@{ph}vh");
        right: calc(~"37*@{pw}vw");
        background: url("../../../assets/JJ/高速公路AI监控系统/demo-2.png")
            no-repeat;
        background-size: 100% 100%;
        z-index: 1;
    }
}
</style>
