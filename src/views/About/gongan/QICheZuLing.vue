<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            以汽车租赁业租赁车辆和承租人及运行轨迹为基本管理对象，依托公安专网，以互联网等为辅助
            手段，实现对汽车租赁企业治安管理信息的社会化采集，实现汽车租赁业“人、车、单、位置”四位一体
            的全方面跟踪、预警、监督、查询、统计。
        </div>
        <div class="profile">
            <div class="row">
                <div class="item">身份信息采集</div>
                <div class="item">人车报警</div>
            </div>
            <div class="row">
                <div class="item">分级分色预警</div>
                <div class="item">分析系统</div>
            </div>
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
        width: calc(~"297*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/汽车租赁安全监管/汽车租赁安全监管.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"689*@{pw}vw");
        height: calc(~"70*@{ph}vh");
        position: absolute;
        top: calc(~"59*@{ph}vh");
        left: calc(~"152*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .profile {
        width: calc(~"304*@{pw}vw");
        height: calc(~"116*@{ph}vh");
        position: absolute;
        top: calc(~"194*@{ph}vh");
        left: calc(~"76*@{pw}vw");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .item {
                width: calc(~"130*@{pw}vw");
                height: calc(~"50*@{ph}vh");
                background: url("../../../assets/GA/汽车租赁安全监管/border.png")
                    no-repeat;
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 3rem;
                font-weight: 500;
                color: rgba(3, 173, 232, 1);
            }
        }
    }
    .demo {
        width: calc(~"428*@{pw}vw");
        height: calc(~"226*@{ph}vh");
        position: absolute;
        bottom: calc(~"60*@{ph}vh");
        right: calc(~"79*@{pw}vw");
        background: url("../../../assets/GA/汽车租赁安全监管/demo.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .bottom {
        width: calc(~"406*@{pw}vw");
        height: calc(~"69*@{ph}vh");
        position: absolute;
        bottom: 0;
        right: calc(~"88*@{pw}vw");
        background: url("../../../assets/GA/汽车租赁安全监管/bottom.png")
            no-repeat;
        background-size: 100% 100%;
    }
}
</style>
