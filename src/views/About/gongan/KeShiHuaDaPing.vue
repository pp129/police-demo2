<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            对海量数据进行采集、清洗、挖掘，得到数据加工结果，以具体数字和指标为依托，通过专业设计
            、样式、组件和模板，为智慧警务凸显数据价值。
        </div>
        <ul class="list">
            <li class="item">警情热力</li>
            <li class="item">警力热力</li>
            <li class="item">交通大数据</li>
            <li class="item">治安防控等级</li>
            <li class="item">交通勤务分布</li>
            <li class="item">接处警</li>
            <li class="item">坐席状态分布</li>
        </ul>
        <swiper :options="swiperOption" ref="swiper">
            <swiper-slide><div class="item item-1"></div></swiper-slide>
            <swiper-slide><div class="item item-2"></div></swiper-slide>
            <swiper-slide><div class="item item-3"></div></swiper-slide>
        </swiper>
        <div class="bottom"></div>
    </div>
</template>

<script>
const { swiper, swiperSlide } = require("vue-awesome-swiper");
export default {
    components: {
        swiper,
        swiperSlide
    },
    computed: {
        swiper() {
            return this.$refs.swiper.swiper;
        }
    },
    data() {
        return {
            swiperOption: {
                initialSlide: 1,
                loop: false,
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 30,
                    stretch: 220,
                    depth: 800,
                    modifier: 1,
                    slideShadows: false
                }
            }
        };
    }
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        position: absolute;
        width: calc(~"268*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/可视化大屏展示系统/可视化大屏展示系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        position: absolute;
        width: calc(~"680*@{pw}vw");
        top: calc(~"47*@{ph}vh");
        left: calc(~"153*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-indent: 6rem;
        line-height: calc(~"25*@{ph}vh");
    }
    .list {
        position: absolute;
        top: calc(~"177*@{ph}vh");
        left: calc(~"77*@{pw}vw");
        height: calc(~"244*@{ph}vh");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item {
            font-size: 3rem;
            font-weight: bold;
            color: rgba(3, 173, 232, 1);
            padding-left: calc(~"24*@{pw}vw");
            background: url("../../../assets/dot.png") no-repeat;
            background-size: contain;
        }
    }
    .swiper-container {
        width: calc(~"623*@{pw}vw");
        height: calc(~"340*@{ph}vh");
        position: absolute;
        bottom: calc(~"10*@{ph}vh");
        left: calc(~"221*@{pw}vw");
        z-index: 2;
    }
    .swiper-slide {
        background-size: cover;
        width: calc(~"408*@{pw}vw");
        height: calc(~"250*@{ph}vh");
        background: url("../../../assets/GA/可视化大屏展示系统/border.png")
            no-repeat;
        background-size: 100% 100%;
        .item {
            width: calc(~"360*@{pw}vw");
            height: calc(~"200*@{ph}vh");
            position: absolute;
            top: calc(~"26*@{ph}vh");
            left: calc(~"26*@{pw}vw");
            &-1 {
                background: url("../../../assets/GA/可视化大屏展示系统/demo-1.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-2 {
                background: url("../../../assets/GA/可视化大屏展示系统/demo-2.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-3 {
                background: url("../../../assets/GA/可视化大屏展示系统/demo-3.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .swiper-slide-active {
        background: url("../../../assets/GA/可视化大屏展示系统/border-active.png")
            no-repeat;
        background-size: 100% 100%;
        .item {
            top: calc(~"30*@{ph}vh");
            left: calc(~"26*@{pw}vw");
        }
    }
    .bottom {
        width: calc(~"507*@{pw}vw");
        height: calc(~"155*@{ph}vh");
        background: url("../../../assets/GA/可视化大屏展示系统/bottom.png")
            no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: calc(~"-5*@{ph}vh");
        left: calc(~"250*@{pw}vw");
    }
}
</style>
