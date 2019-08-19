<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            将智能化应用与边检梯口业务深度结合，在船舶的主要梯口上对进出人员进行管控，主要包括：船舶旅客
            信息管理、人流量统计、绊线检测、登轮提示、可疑人员预警。
        </div>
        <div class="contents">
            <div class="row">
                <div class="item item-1">
                    <span class="num">01</span>
                    <span class="text">梯口实时监控</span>
                </div>
                <div class="item item-2">
                    <span class="num">02</span>
                    <span class="text">登陆(轮)人员统计</span>
                </div>
                <div class="item item-3">
                    <span class="num">03</span>
                    <span class="text">人证核验，异常告警</span>
                </div>
            </div>
            <div class="row">
                <div class="item item-1">
                    <span class="num">04</span>
                    <span class="text">登陆人员信息展示</span>
                </div>
                <div class="item item-2">
                    <span class="num">05</span>
                    <span class="text"
                        >白名单管理（船员 <br />、执法人员）</span
                    >
                </div>
                <div class="item item-3">
                    <span class="num">06</span>
                    <span class="text">梯口实况展示</span>
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
        width: calc(~"248*@{pw}vw");
        height: calc(~"28*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/BJ/梯口智能监管/梯口智能监管.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"730*@{pw}vw");
        height: calc(~"44*@{ph}vh");
        position: absolute;
        top: calc(~"34*@{ph}vh");
        left: calc(~"112*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .contents {
        position: absolute;
        top: calc(~"109*@{ph}vh");
        left: calc(~"69*@{pw}vw");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(~"836*@{pw}vw");
        height: calc(~"261*@{ph}vh");
        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .item {
                width: calc(~"271*@{pw}vw");
                height: calc(~"117*@{ph}vh");
                background: url("../../../assets/BJ/梯口智能监管/border.png")
                    no-repeat;
                background-size: 100% 100%;
                position: relative;
                .num {
                    position: absolute;
                    top: calc(~"26*@{ph}vh");
                    left: calc(~"56*@{pw}vw");
                    font-size: 6rem;
                    font-weight: bold;
                    color: rgba(3, 173, 232, 1);
                }
                .text {
                    position: absolute;
                    top: calc(~"56*@{ph}vh");
                    left: calc(~"115*@{pw}vw");
                    font-size: 3rem;
                    font-weight: bold;
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }
}
</style>
