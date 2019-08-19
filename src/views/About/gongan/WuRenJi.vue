<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            一方面是实现对无人机涉及企业、个人、设备、场所的信息监督并进行预防和管控；另一方面实现无人机的地图可视化，
            可以灵活设置禁飞区域，建立预警机制，有效打击黑飞等违规行为，另外还有便民的飞行APP，最终推动公安机关对无人机摸
            底排查管理以及安全管控工作。
        </div>
        <div class="arrows">
            <div class="item">
                <div class="arrow-down"></div>
                <p class="text">可视化展示</p>
            </div>
            <div class="item">
                <div class="arrow-down-light"></div>
                <p class="text-light">动态监管</p>
            </div>
            <div class="item">
                <div class="arrow-down"></div>
                <p class="text">飞行管控</p>
            </div>
            <div class="item">
                <div class="arrow-down-light"></div>
                <p class="text-light">飞行APP</p>
            </div>
        </div>
        <div class="hive hive-1">可视化<br />监管</div>
        <div class="hive hive-2">灵活限<br />飞区</div>
        <div class="hive hive-3">便民一体</div>
        <div class="hive hive-4">黑飞打击</div>
        <div class="demo"></div>
        <div class="bottom"></div>
        <div class="light"></div>
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
        width: calc(~"273*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/无人机安全监管/无人机安全监管.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"822*@{pw}vw");
        height: calc(~"70*@{ph}vh");
        position: absolute;
        top: calc(~"34*@{ph}vh");
        left: calc(~"77*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .arrows {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: calc(~"56*@{ph}vh");
        width: calc(~"418*@{pw}vw");
        position: absolute;
        top: calc(~"130*@{ph}vh");
        left: calc(~"51*@{pw}vw");
        .item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .arrow-down {
                width: calc(~"26*@{pw}vw");
                height: calc(~"30*@{ph}vh");
                background: url("../../../assets/GA/无人机安全监管/arrow-down.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            .arrow-down-light {
                width: calc(~"26*@{pw}vw");
                height: calc(~"30*@{ph}vh");
                background: url("../../../assets/GA/无人机安全监管/arrow-down-light.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            .text {
                font-size: 3.8rem;
                font-weight: bold;
                color: rgba(3, 173, 232, 1);
                &-light {
                    font-size: 3.8rem;
                    font-weight: bold;
                    color: rgba(74, 243, 250, 1);
                }
            }
        }
    }
    .hive {
        position: absolute;
        width: calc(~"98*@{pw}vw");
        height: calc(~"90*@{ph}vh");
        background: url("../../../assets/GA/无人机安全监管/border.png")
            no-repeat;
        background-size: 100% 100%;
        font-size: 3.4rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        &-1 {
            bottom: calc(~"130*@{ph}vh");
            left: calc(~"196*@{pw}vw");
        }
        &-2 {
            bottom: calc(~"81*@{ph}vh");
            left: calc(~"114*@{pw}vw");
        }
        &-3 {
            bottom: calc(~"81*@{ph}vh");
            left: calc(~"279*@{pw}vw");
        }
        &-4 {
            bottom: calc(~"31*@{ph}vh");
            left: calc(~"196*@{pw}vw");
        }
    }
    .demo {
        position: absolute;
        width: calc(~"399*@{pw}vw");
        height: calc(~"250*@{ph}vh");
        bottom: calc(~"55*@{ph}vh");
        right: calc(~"49*@{pw}vw");
        background: url("../../../assets/GA/无人机安全监管/demo.png") no-repeat;
        background-size: 100% 100%;
    }
    .bottom {
        position: absolute;
        width: calc(~"446*@{pw}vw");
        height: calc(~"76*@{ph}vh");
        bottom: calc(~"-2*@{ph}vh");
        right: calc(~"49*@{pw}vw");
        background: url("../../../assets/GA/无人机安全监管/bottom.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .light {
        position: absolute;
        width: calc(~"392*@{pw}vw");
        height: calc(~"101*@{ph}vh");
        bottom: calc(~"-2*@{ph}vh");
        right: calc(~"49*@{pw}vw");
        background: url("../../../assets/GA/无人机安全监管/light.png") no-repeat;
        background-size: 100% 100%;
    }
}
</style>
