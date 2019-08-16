<template>
    <div class="main honor">
        <div class="sub-title"></div>
        <swiper :options="swiperOption">
            <swiper-slide><div class="item item-1"></div></swiper-slide>
            <swiper-slide><div class="item item-2"></div></swiper-slide>
            <swiper-slide><div class="item item-3"></div></swiper-slide>
            <swiper-slide><div class="item item-4"></div></swiper-slide>
            <swiper-slide><div class="item item-5"></div></swiper-slide>
            <swiper-slide><div class="item item-6"></div></swiper-slide>
        </swiper>
        <div class="list">
            <div class="item">
                <div class="title">交通大数据分析应用平台</div>
                <ul class="content">
                    <li>2018年度厦门市科技进步二等奖</li>
                    <li>2018年智慧城市城市治理领域十大优秀 解决方案</li>
                </ul>
            </div>
            <div class="item">
                <div class="title">实用新型专利</div>
                <ul class="content">
                    <li>实用新型专利</li>
                </ul>
            </div>
            <div class="item">
                <div class="title">科技成果登记</div>
                <ul class="content">
                    <li>大数据应用分析平台V1.0</li>
                    <li>交通警卫指挥平台V1.0</li>
                </ul>
            </div>
            <div class="item">
                <div class="title">计算机软著</div>
                <ul class="content">
                    <li>交通警卫指挥平台V1.0</li>
                    <li>交警交通大数据分析系统V1.0</li>
                    <li>重大活动安保指挥系统V1.0</li>
                    <li>公安勤务动态管理系统V1.3</li>
                </ul>
            </div>
        </div>
        <div class="dock"></div>
        <div class="cup"></div>
    </div>
</template>

<script>
const { swiper, swiperSlide } = require("vue-awesome-swiper");
export default {
    name: "HonoraryAndCertificate",
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                initialSlide: 2,
                loop: true,
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 0,
                    stretch: 200,
                    depth: 320,
                    modifier: 1,
                    slideShadows: false
                }
            }
        };
    }
};
</script>

<style scoped lang="less">
.honor {
    .sub-title {
        width: calc(~"134*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        background: url("../assets/title-honor.png") no-repeat;
        background-size: contain;
        position: absolute;
        top: calc(~"3*@{ph}vh");
        left: calc(~"23*@{ph}vw");
    }
    .dock {
        width: calc(~"840*@{pw}vw");
        height: calc(~"299*@{ph}vh");
        background: url("../assets/horor-dock.png") no-repeat;
        background-size: contain;
        position: absolute;
        bottom: calc(~"-60*@{ph}vh");
        left: calc(~"-60*@{ph}vw");
        z-index: 1;
    }
    .cup {
        width: calc(~"443*@{pw}vw");
        height: calc(~"312*@{ph}vh");
        background: url("../assets/cup.png") no-repeat;
        background-size: contain;
        position: absolute;
        bottom: calc(~"-30*@{ph}vh");
        right: calc(~"-80*@{ph}vw");
    }
    .swiper-container {
        width: calc(~"528*@{pw}vw");
        height: calc(~"340*@{ph}vh");
        position: absolute;
        top: calc(~"50*@{ph}vh");
        left: calc(~"30*@{ph}vw");
        z-index: 2;
    }
    .swiper-slide-active {
        background: url("../assets/honor-border.png") no-repeat;
        background-size: 100% 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: calc(~"247*@{pw}vw");
        height: calc(~"340*@{ph}vh");
        .item {
            width: calc(~"201*@{pw}vw");
            height: calc(~"283*@{ph}vh");
            position: absolute;
            top: calc(~"14*@{ph}vh");
            left: calc(~"19*@{pw}vw");
            &-1 {
                background: url("../assets/honors/honor1.png") no-repeat;
                background-size: 100% 100%;
            }
            &-2 {
                background: url("../assets/honors/honor2.png") no-repeat;
                background-size: 100% 100%;
            }
            &-3 {
                background: url("../assets/honors/honor3.png") no-repeat;
                background-size: 100% 100%;
            }
            &-4 {
                background: url("../assets/honors/honor4.png") no-repeat;
                background-size: 100% 100%;
            }
            &-5 {
                background: url("../assets/honors/honor5.png") no-repeat;
                background-size: 100% 100%;
            }
            &-6 {
                background: url("../assets/honors/honor6.png") no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .list {
        z-index: 2;
        width: calc(~"360*@{pw}vw");
        position: absolute;
        right: 0;
        top: 0;
        .item {
            .title {
                width: 100%;
                font-size: 4.2rem;
                font-weight: bold;
                color: #03ade8;
                background: url("../assets/honor-dot.png") no-repeat left;
                padding-left: calc(~"28*@{pw}vw");
            }
            .content {
                padding-left: calc(~"28*@{pw}vw");
                width: calc(~"321*@{pw}vw");
                padding-top: calc(~"2*@{ph}vh");
                li {
                    font-size: 3.6rem;
                    font-weight: bold;
                    color: rgba(255, 255, 255, 1);
                    line-height: 4.8rem;
                    margin-top: calc(~"2*@{ph}vh");
                    margin-bottom: calc(~"4.8*@{ph}vh");
                }
            }
        }
    }
}
</style>
