<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            通过整合船讯网、渔船民系统、执法办案闭环等系统的船舶数据及边防辖区治安案件数据，综合运用北斗、AIS、
            监控和大数据分析等手段，实现对船舶的实时监控、单证核验、轨迹回放和进出港统计，另外实现对出入境的手续进
            行管理，以及登轮检查和外炫监管等。
        </div>
        <div class="icon-main"></div>
        <div class="content-box">
            <div class="icon icon-1"></div>
            <p class="text text-1">船舶动态监管和单证查询</p>
            <div class="icon icon-2"></div>
            <p class="text text-2">登轮检查</p>
            <div class="icon icon-3"></div>
            <p class="text text-3">重点船舶管理</p>
            <div class="icon icon-4"></div>
            <p class="text text-4">外炫监管</p>
            <div class="icon icon-5"></div>
            <p class="text text-5">出入境手续办理情况</p>
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
        width: calc(~"322*@{pw}vw");
        height: calc(~"29*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/BJ/出入境监管/出入境监管.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"765*@{pw}vw");
        height: calc(~"70*@{ph}vh");
        position: absolute;
        top: calc(~"34*@{ph}vh");
        left: calc(~"113*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .icon-main {
        width: calc(~"178*@{pw}vw");
        height: calc(~"171*@{ph}vh");
        position: absolute;
        top: calc(~"170*@{ph}vh");
        left: calc(~"76*@{pw}vw");
        background: url("../../../assets/BJ/出入境监管/main.png") no-repeat;
        background-size: 100% 100%;
    }
    .content-box {
        width: calc(~"553*@{pw}vw");
        height: calc(~"304*@{ph}vh");
        position: absolute;
        bottom: calc(~"21*@{ph}vh");
        right: calc(~"113*@{pw}vw");
        background: url("../../../assets/BJ/出入境监管/border.png") no-repeat;
        background-size: 100% 100%;
        .icon {
            width: calc(~"108*@{pw}vw");
            height: calc(~"106*@{ph}vh");
            position: absolute;
            &-1 {
                top: calc(~"4*@{ph}vh");
                left: calc(~"12*@{pw}vw");
                background: url("../../../assets/BJ/出入境监管/icon-1.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-2 {
                top: calc(~"4*@{ph}vh");
                left: calc(~"336*@{pw}vw");
                background: url("../../../assets/BJ/出入境监管/icon-2.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-3 {
                top: calc(~"102*@{ph}vh");
                left: calc(~"12*@{pw}vw");
                background: url("../../../assets/BJ/出入境监管/icon-3.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-4 {
                top: calc(~"102*@{ph}vh");
                left: calc(~"336*@{pw}vw");
                background: url("../../../assets/BJ/出入境监管/icon-4.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-5 {
                top: calc(~"202*@{ph}vh");
                left: calc(~"12*@{pw}vw");
                background: url("../../../assets/BJ/出入境监管/icon-5.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        .text {
            position: absolute;
            font-size: 3rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            &-1 {
                top: calc(~"49*@{ph}vh");
                left: calc(~"114*@{pw}vw");
            }
            &-2 {
                top: calc(~"49*@{ph}vh");
                left: calc(~"435*@{pw}vw");
            }
            &-3 {
                top: calc(~"148*@{ph}vh");
                left: calc(~"115*@{pw}vw");
            }
            &-4 {
                top: calc(~"148*@{ph}vh");
                left: calc(~"435*@{pw}vw");
            }
            &-5 {
                top: calc(~"249*@{ph}vh");
                left: calc(~"114*@{pw}vw");
            }
        }
    }
}
</style>
