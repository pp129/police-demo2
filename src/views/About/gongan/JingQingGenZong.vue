<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            能够及时、完整、方便地在指挥大厅各类管理坐席和
            中心各处室间开展警情流转协作处理，同时按规范流程对
            不同类别的警情进行跟踪监督管理。
        </div>
        <div class="demo"></div>
        <div class="profile">
            <div class="row">
                <div class="item">
                    <div class="arrow"></div>
                    <div class="content">警情抽取</div>
                </div>
                <div class="item">
                    <div class="arrow"></div>
                    <div class="content">话务抽取</div>
                </div>
                <div class="item">
                    <div class="arrow"></div>
                    <div class="content">警情跟踪处理</div>
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <div class="arrow"></div>
                    <div class="content">警情地图展示</div>
                </div>
                <div class="item">
                    <div class="arrow"></div>
                    <div class="content">警情分发派送</div>
                </div>
                <div class="item">
                    <div class="arrow"></div>
                    <div class="content">警情统计分析</div>
                </div>
            </div>
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
        width: calc(~"294*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/警情跟踪监督管理/警情跟踪监督管理.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"389*@{pw}vw");
        height: calc(~"60*@{ph}vh");
        position: absolute;
        top: calc(~"61*@{ph}vh");
        left: calc(~"76*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .demo {
        width: calc(~"512*@{pw}vw");
        height: calc(~"398*@{ph}vh");
        position: absolute;
        bottom: 0;
        right: 0;
        background: url("../../../assets/GA/警情跟踪监督管理/demo.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .profile {
        width: calc(~"384*@{pw}vw");
        height: calc(~"209*@{ph}vh");
        position: absolute;
        top: calc(~"154*@{ph}vh");
        left: calc(~"66*@{pw}vw");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: calc(~"128*@{pw}vw");
                height: calc(~"88*@{ph}vh");
                .arrow {
                    width: calc(~"26*@{pw}vw");
                    height: calc(~"38*@{ph}vh");
                    background: url("../../../assets/GA/警情跟踪监督管理/arrow.png")
                        no-repeat;
                    background-size: 100% 100%;
                }
                .content {
                    width: calc(~"128*@{pw}vw");
                    height: calc(~"58*@{ph}vh");
                    background: url("../../../assets/GA/警情跟踪监督管理/border.png")
                        no-repeat;
                    background-size: 100% 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 2.8rem;
                    font-weight: 400;
                    color: rgba(3, 173, 232, 1);
                }
            }
        }
    }
}
</style>
