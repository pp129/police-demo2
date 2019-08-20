<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            限定区，基于智能门禁系统，自动对进出限定区域的人、车进行拍照识别并记录，成功识别后方可进出
            限定区域，实现封闭式门禁管理，实现图像监控、进出自动记录、设备状态运行统计以及授权管理；对敞开式口岸限定区，
            调用雷达和高清传感摄像头，提供全面的智能分析功能、智能侦测和自动报警。
        </div>
        <div class="icon-main">设备一张图</div>
        <div class="icon-arrow"></div>
        <div class="steps">
            <div class="item item-1">
                <span class="text">固定点视频监控</span>
            </div>
            <i class="icon-arrow-left icon-arrow-left-1"></i>
            <div class="item item-2">
                <span class="text">岗哨实时警戒</span>
            </div>
            <i class="icon-arrow-left icon-arrow-left-2"></i>
            <div class="item item-3">
                <span class="text">人车进出记录</span>
            </div>
            <i class="icon-arrow-left icon-arrow-left-3"></i>
            <div class="item item-4">
                <span class="text">异常行为报警</span>
            </div>
            <i class="icon-arrow-left icon-arrow-left-4"></i>
            <div class="item item-5">
                <span class="text">无人机监控</span>
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
        height: calc(~"27*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/BJ/口岸限定区域/口岸限定区域.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"804*@{pw}vw");
        height: calc(~"70*@{ph}vh");
        position: absolute;
        top: calc(~"47*@{ph}vh");
        left: calc(~"88*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .icon-main {
        width: calc(~"128*@{pw}vw");
        height: calc(~"58*@{ph}vh");
        position: absolute;
        top: calc(~"150*@{ph}vh");
        left: calc(~"412*@{pw}vw");
        background: url("../../../assets/BJ/口岸限定区域/border.png") no-repeat;
        background-size: 100% 100%;
        text-align: center;
        font-size: 3.6rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"58*@{ph}vh");
    }
    .icon-arrow {
        width: calc(~"26*@{pw}vw");
        height: calc(~"29*@{ph}vh");
        position: absolute;
        top: calc(~"203*@{ph}vh");
        left: calc(~"465*@{pw}vw");
        background: url("../../../assets/arrow-down.png") no-repeat;
        background-size: 100% 100%;
    }
    .steps {
        position: absolute;
        top: calc(~"252*@{ph}vh");
        left: calc(~"72*@{pw}vw");
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: calc(~"815*@{pw}vw");
        .item {
            width: calc(~"142*@{pw}vw");
            height: calc(~"94*@{ph}vh");
            display: flex;
            justify-content: center;
            .text {
                font-size: 2.8rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                position: absolute;
                top: calc(~"55*@{ph}vh");
            }
            &-1 {
                background: url("../../../assets/BJ/口岸限定区域/icon-1.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-2 {
                background: url("../../../assets/BJ/口岸限定区域/icon-2.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-3 {
                background: url("../../../assets/BJ/口岸限定区域/icon-3.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-4 {
                background: url("../../../assets/BJ/口岸限定区域/icon-4.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-5 {
                background: url("../../../assets/BJ/口岸限定区域/icon-5.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        .icon-arrow-left {
            width: calc(~"20*@{pw}vw");
            height: calc(~"25*@{ph}vh");
            position: absolute;
            top: calc(~"39*@{ph}vh");
            background: url("../../../assets/BJ/口岸限定区域/arrow.png")
                no-repeat;
            background-size: 100% 100%;
            &-1 {
                left: calc(~"146*@{pw}vw");
            }
            &-2 {
                left: calc(~"316*@{pw}vw");
            }
            &-3 {
                left: calc(~"(497 - 20 + 5)*@{pw}vw");
            }
            &-4 {
                left: calc(~"(670 - 20)*@{pw}vw");
            }
        }
    }
}
</style>
