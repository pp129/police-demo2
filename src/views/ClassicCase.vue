<template>
    <div class="main case">
        <span class="case-title">{{ caseTitle }}</span>
        <swiper :options="swiperOption" ref="swiper" @slideChange="slideChange">
            <swiper-slide><div class="item item-1"></div></swiper-slide>
            <swiper-slide><div class="item item-2"></div></swiper-slide>
            <swiper-slide><div class="item item-3"></div></swiper-slide>
            <swiper-slide><div class="item item-4"></div></swiper-slide>
            <swiper-slide><div class="item item-5"></div></swiper-slide>
            <swiper-slide><div class="item item-6"></div></swiper-slide>
            <swiper-slide><div class="item item-7"></div></swiper-slide>
            <swiper-slide><div class="item item-8"></div></swiper-slide>
            <swiper-slide><div class="item item-9"></div></swiper-slide>
        </swiper>
    </div>
</template>

<script>
const { swiper, swiperSlide } = require("vue-awesome-swiper");
export default {
    name: "ClassicCase",
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
            caseTitle: "",
            titles: [
                "交通大数据分析应用",
                "交通大数据分析应用平台",
                "交通警卫安保指挥平台",
                "金砖厦门会晤警卫安保",
                "可视化大屏展示系统",
                "可视化勤务指挥支撑平台",
                "雷达多目标检测",
                "青岛上合峰会安保",
                "山东边防智能化综合指挥"
            ],
            swiperOption: {
                initialSlide: 0,
                loop: false,
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 0,
                    stretch: -200,
                    depth: 600,
                    modifier: 1,
                    slideShadows: false
                }
            }
        };
    },
    methods: {
        slideChange() {
            const index = this.swiper.activeIndex;
            this.caseTitle = this.titles[index];
        }
    },
    mounted() {
        this.caseTitle = this.titles[0];
    }
};
</script>

<style scoped lang="less">
.case {
    .case-title {
        display: block;
        font-size: 3.2rem;
        color: #ffffff;
        position: absolute;
        top: calc(~"19*@{ph}vh");
        left: 50%;
        margin-left: calc(~"-80*@{pw}vw");
    }
    .swiper-container {
        width: 100%;
        height: calc(~"340*@{ph}vh");
        position: absolute;
        top: calc(~"50*@{ph}vh");
        left: 0;
        z-index: 2;
    }
    .swiper-slide {
        background-size: cover;
        width: calc(~"499*@{pw}vw");
        height: calc(~"298*@{ph}vh");
        .item {
            width: calc(~"397*@{pw}vw");
            height: calc(~"244*@{ph}vh");
            position: absolute;
            top: calc(~"28*@{ph}vh");
            left: calc(~"52*@{pw}vw");
            border: 1rem solid rgba(22, 208, 255, 0.9);
            border-radius: 3rem;
            box-shadow: 0 0 3rem rgba(22, 208, 255, 1);
            &-1 {
                background: url("../assets/case/交通大数据分析应用.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-2 {
                background: url("../assets/case/交通大数据分析应用平台.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-3 {
                background: url("../assets/case/交通警卫安保指挥平台.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-4 {
                background: url("../assets/case/金砖厦门会晤警卫安保.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-5 {
                background: url("../assets/case/可视化大屏展示系统.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-6 {
                background: url("../assets/case/可视化勤务指挥支撑平台.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-7 {
                background: url("../assets/case/雷达多目标检测.png") no-repeat;
                background-size: 100% 100%;
            }
            &-8 {
                background: url("../assets/case/青岛上合峰会安保.png") no-repeat;
                background-size: 100% 100%;
            }
            &-9 {
                background: url("../assets/case/山东边防智能化综合指挥.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .swiper-slide-active {
        background: url("../assets/case-border-a.png") no-repeat;
        background-size: 100% 100%;
        .item {
            border: 0;
            border-radius: 0;
            box-shadow: none;
        }
    }
}
</style>
