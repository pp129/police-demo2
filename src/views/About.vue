<template>
    <div class="main page">
        <div class="content-text">
            面向公安、交警、边检等领域，基于北斗/GPS、物联网、云计算、大数据和人工智能等技术，
            汇聚
            警员、警情、警备、勤务、视频等全要素警务资源，提供勤务实战、交通安保、治安防控、便民服务、大数
            据分析研判等多个方面的解决方案和信息服务。构建高度集成、高度共享、高度智能的智慧警务新格
            局，全面实现警务工作信息化、智能化。
        </div>
        <div class="item item-1">
            <div class="icon icon-1"></div>
            <p class="text">汇聚共享</p>
        </div>
        <div class="item item-2">
            <div class="icon icon-2"></div>
            <p class="text">智能连接</p>
        </div>
        <div class="item item-3">
            <div class="icon icon-3"></div>
            <p class="text">高效集成</p>
        </div>
        <div class="item item-4">
            <div class="icon icon-4"></div>
            <p class="text">创新应用</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="less" type="text/less">
.page {
    .content-text {
        width: calc(~"706*@{pw}vw");
        height: calc(~"102*@{ph}vh");
        position: absolute;
        top: calc(~"29*@{ph}vh");
        left: calc(~"162*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .item {
        width: calc(~"99*@{pw}vw");
        height: calc(~"113*@{ph}vh");
        position: absolute;
        /*top: calc(~"(191 + 23)*@{ph}vh");*/
        &-1 {
            left: calc(~"133*@{pw}vw");
            animation: move 3s infinite linear;
        }
        &-2 {
            left: calc(~"329*@{pw}vw");
            animation: move2 3s infinite linear;
        }
        &-3 {
            left: calc(~"532*@{pw}vw");
            animation: move 3s infinite linear;
        }
        &-4 {
            left: calc(~"722*@{pw}vw");
            animation: move2 3s infinite linear;
        }
        .icon {
            width: calc(~"99*@{pw}vw");
            height: calc(~"99*@{ph}vh");
            &-1 {
                background: url("../assets/icon-about-1.png") no-repeat;
                background-size: 100% 100%;
            }
            &-2 {
                background: url("../assets/icon-about-2.png") no-repeat;
                background-size: 100% 100%;
            }
            &-3 {
                background: url("../assets/icon-about-3.png") no-repeat;
                background-size: 100% 100%;
            }
            &-4 {
                background: url("../assets/icon-about-4.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        .text {
            font-size: 3rem;
            font-weight: 500;
            color: rgba(71, 160, 255, 1);
            text-align: center;
        }
    }
}
@keyframes move {
    0% {
        top: calc(~"(191 - 10)*@{ph}vh");
    }
    25% {
        top: calc(~"(191)*@{ph}vh");
    }
    50% {
        top: calc(~"(191 + 10)*@{ph}vh");
    }
    75% {
        top: calc(~"(191)*@{ph}vh");
    }
    100% {
        top: calc(~"(191 - 10)*@{ph}vh");
    }
}
@keyframes move2 {
    0% {
        top: calc(~"(191 + 10)*@{ph}vh");
    }
    25% {
        top: calc(~"(191)*@{ph}vh");
    }
    50% {
        top: calc(~"(191 - 10)*@{ph}vh");
    }
    75% {
        top: calc(~"(191)*@{ph}vh");
    }
    100% {
        top: calc(~"(191 + 10)*@{ph}vh");
    }
}
@keyframes move3 {
    0% {
        top: calc(~"(191)*@{ph}vh");
    }
    25% {
        top: calc(~"(191 - 46)*@{ph}vh");
    }
    50% {
        top: calc(~"(191)*@{ph}vh");
    }
    75% {
        top: calc(~"(191 + 46)*@{ph}vh");
    }
    100% {
        top: calc(~"(191)*@{ph}vh");
    }
}
@keyframes move4 {
    0% {
        top: calc(~"(191)*@{ph}vh");
    }
    25% {
        top: calc(~"(191 - 46)*@{ph}vh");
    }
    50% {
        top: calc(~"(191)*@{ph}vh");
    }
    75% {
        top: calc(~"(191 + 46)*@{ph}vh");
    }
    100% {
        top: calc(~"(191)*@{ph}vh");
    }
}
</style>
