<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            通过移动警务应用,自动接收报警信息，将传统指挥中心的指挥调度业务和现场进行紧密结合，双向互动。
        </div>
        <div class="icon icon-1">
            <div class="img"></div>
            <p>警情签收</p>
        </div>
        <div class="icon icon-2">
            <div class="img"></div>
            <p>实况回传</p>
        </div>
        <div class="icon icon-3">
            <div class="img"></div>
            <p>警情处置</p>
        </div>
        <div class="icon icon-4">
            <div class="img"></div>
            <p>信息查询</p>
        </div>
        <div class="icon icon-5">
            <div class="img"></div>
            <p>考勤签到</p>
        </div>
        <div class="icon icon-6">
            <div class="img"></div>
            <p>指令接收</p>
        </div>
        <div class="center"></div>
        <div class="arrow arrow-1">提升执法效率</div>
        <div class="arrow arrow-2">提升服务水平</div>
        <div class="arrow arrow-3">增进警民互动</div>
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
        width: calc(~"241*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/移动警务应用系统/移动警务应用系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        position: absolute;
        top: calc(~"33*@{ph}vh");
        left: calc(~"152*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .icon {
        position: absolute;
        width: calc(~"73*@{pw}vw");
        height: calc(~"103*@{ph}vh");
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        p {
            font-size: 3.6rem;
            font-weight: 400;
            color: rgba(3, 173, 232, 1);
        }
        .img {
            width: calc(~"73*@{pw}vw");
            height: calc(~"73*@{ph}vh");
        }
        &.icon-1 {
            top: calc(~"71*@{ph}vh");
            left: calc(~"128*@{pw}vw");
            .img {
                background: url("../../../assets/GA/移动警务应用系统/警情签收.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        &.icon-2 {
            top: calc(~"71*@{ph}vh");
            right: calc(~"128*@{pw}vw");
            .img {
                background: url("../../../assets/GA/移动警务应用系统/实况回传.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        &.icon-3 {
            top: calc(~"178*@{ph}vh");
            left: calc(~"23*@{pw}vw");
            .img {
                background: url("../../../assets/GA/移动警务应用系统/警情处置.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        &.icon-4 {
            top: calc(~"178*@{ph}vh");
            right: calc(~"23*@{pw}vw");
            .img {
                background: url("../../../assets/GA/移动警务应用系统/信息查询.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        &.icon-5 {
            top: calc(~"300*@{ph}vh");
            left: calc(~"128*@{pw}vw");
            .img {
                background: url("../../../assets/GA/移动警务应用系统/考勤签到.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        &.icon-6 {
            top: calc(~"300*@{ph}vh");
            right: calc(~"128*@{pw}vw");
            .img {
                background: url("../../../assets/GA/移动警务应用系统/指令接收.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .center {
        width: calc(~"464*@{pw}vw");
        height: calc(~"336*@{ph}vh");
        background: url("../../../assets/GA/移动警务应用系统/app.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: calc(~"253*@{pw}vw");
        top: calc(~"60*@{ph}vh");
    }
    .arrow {
        width: calc(~"148*@{pw}vw");
        height: calc(~"46*@{ph}vh");
        background: url("../../../assets/GA/移动警务应用系统/border.png")
            no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: calc(~"17*@{ph}vh");
        display: flex;
        align-items: center;
        font-size: 3.6rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        padding-left: calc(~"10*@{pw}vw");
        &-1 {
            left: calc(~"242*@{pw}vw");
        }
        &-2 {
            left: calc(~"420*@{pw}vw");
        }
        &-3 {
            left: calc(~"597*@{pw}vw");
        }
    }
}
</style>
