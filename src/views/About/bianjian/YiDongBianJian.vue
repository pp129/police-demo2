<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            移动边检APP分为移动警务应用和便民服务。以“集成、智慧、实效”为设计理念，实现“服务、管理、研判”
            三大功能，依托各个业务系统功能，大幅提升边检动态管控能力和为民服务的水平。
        </div>
        <div class="row">
            <div class="item">
                <div class="icon-1"></div>
                <p class="title">移动警务</p>
                <p class="content">
                    主要包括船舶定位、手续检查、 人车检查、登轮检查、移动执法、
                    语音对讲、视图回传等警用功能等。
                </p>
            </div>
            <div class="item">
                <div class="icon-2"></div>
                <p class="title">便民服务</p>
                <p class="content">
                    主要包括总站概况、法律法规、 通关指南、政策解读、业务办理、
                    警务评议、网上调查、在线投诉等。
                </p>
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
        width: calc(~"197*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/BJ/移动边检APP/移动边检APP.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"751*@{pw}vw");
        height: calc(~"44*@{ph}vh");
        position: absolute;
        top: calc(~"32*@{ph}vh");
        left: calc(~"105*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .row {
        width: calc(~"584*@{pw}vw");
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        top: calc(~"134*@{ph}vh");
        left: calc(~"188*@{pw}vw");
        .item {
            width: calc(~"239*@{pw}vw");
            height: calc(~"183*@{ph}vh");
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .icon-1 {
                width: calc(~"71*@{pw}vw");
                height: calc(~"74*@{ph}vh");
                background: url("../../../assets/BJ/移动边检APP/icon-1.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            .icon-2 {
                width: calc(~"77*@{pw}vw");
                height: calc(~"73*@{ph}vh");
                background: url("../../../assets/BJ/移动边检APP/icon-2.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            .title {
                font-size: 4.8rem;
                font-weight: bold;
                color: rgba(3, 173, 232, 1);
                line-height: 4.8rem;
            }
            .content {
                text-indent: 6rem;
                font-size: 3rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                line-height: 3rem;
            }
        }
    }
}
</style>
