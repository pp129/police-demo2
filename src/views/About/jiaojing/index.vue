<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="center">
            <p>
                以北斗、互联网、物联网、大数据、云
                计算、智能引擎、视频技术、数据挖掘等技
                术为支撑，以公安信息化为核心，促进公安
                系统各个功能模块高度集成、协调运作，实
                现警务信息“汇聚共享、高效协同、智能创 新”
                的发展新理念和新模式，全面推动公安
                工作质量变革、效率变革、动力变革。
            </p>
        </div>
        <div class="bottom"></div>
        <div
            class="btn btn-lf"
            v-for="(item, index) in listLeft"
            :key="item.name"
            :class="'btn-lf-' + (index + 1)"
            @click="goto(item.name)"
        >
            {{ item.text }}
        </div>

        <div
            class="btn btn-rt"
            v-for="(item, index) in listRight"
            :key="item.name"
            :class="'btn-rt-' + (index + 1)"
            @click="goto(item.name)"
        >
            {{ item.text }}
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            listLeft: [
                {
                    name: "JiaoTongJingWeiAnBao",
                    text: "交通警卫安保指挥调度平台"
                },
                {
                    name: "JiaoTongDaShuJuFenXi",
                    text: "交通大数据应用分析平台"
                },
                {
                    name: "JiaoTongDaShuJu",
                    text: "交通大数据勤务指挥平台"
                },
                {
                    name: "JiaoTongLiuLiang",
                    text: "交通流量采集系统"
                },
                {
                    name: "XiangMuGongCheng",
                    text: "项目工程管理"
                },
                {
                    name: "JiaoTongSheShiGuanLi",
                    text: "交通设施管理系统"
                }
            ],
            listRight: [
                {
                    name: "JiaoTongShiPingGuanLi",
                    text: "交通视频管理系统"
                },
                {
                    name: "ZhanDaoShiGong",
                    text: "占道施工管理系统"
                },
                {
                    name: "LeiDaDuoMuBiao",
                    text: "雷达多目标检测"
                },
                {
                    name: "JieChuJing",
                    text: "122接处警系统"
                },
                {
                    name: "BanMaXian",
                    text: "智慧斑马线管理系统"
                }
            ]
        };
    },
    methods: {
        goto(link) {
            this.$router.push(link);
        }
    }
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        width: calc(~"193*@{pw}vw");
        height: calc(~"46*@{ph}vh");
        background: url("../../../assets/GA/智慧公安/智慧公安.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: calc(~"386*@{pw}vw");
    }
    .center {
        width: calc(~"469*@{pw}vw");
        height: calc(~"398*@{ph}vh");
        background: url("../../../assets/GA/智慧公安/center-border.png")
            no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: calc(~"20*@{ph}vh");
        left: calc(~"245*@{pw}vw");
        p {
            width: calc(~"387*@{pw}vw");
            height: calc(~"163*@{ph}vh");
            font-size: 3.6rem;
            color: #ffffff;
        }
    }
    .bottom {
        width: calc(~"609*@{pw}vw");
        height: calc(~"37*@{ph}vh");
        background: url("../../../assets/GA/智慧公安/bottom.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: 0;
        left: calc(~"147*@{pw}vw");
    }
    .btn {
        position: absolute;
        display: flex;
        justify-content: center;
        font-size: 2.8rem;
        line-height: calc(~"42*@{ph}vh");
        font-weight: 500;
        color: rgba(63, 183, 255, 1);
        cursor: pointer;
        width: calc(~"203*@{pw}vw");
        height: calc(~"46*@{ph}vh");
        &:hover {
            font-size: 3.4rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            width: calc(~"220*@{pw}vw");
            height: calc(~"49*@{ph}vh");
            line-height: calc(~"49*@{ph}vh");
        }
        &-lf {
            background: url("../../../assets/GA/智慧公安/button-left.png")
                no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url("../../../assets/GA/智慧公安/button-left-select.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-1 {
                top: calc(~"47*@{ph}vh");
                left: calc(~"50*@{pw}vw");
            }
            &-2 {
                top: calc(~"(47 + 46 + 21)*@{ph}vh");
                left: calc(~"(50 - 24)*@{pw}vw");
            }
            &-3 {
                top: calc(~"(47 + 46 + 21 + 46 + 21)*@{ph}vh");
                left: calc(~"(50 - 24 - 24)*@{pw}vw");
            }
            &-4 {
                top: calc(~"(47 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh");
                left: calc(~"(50 - 24)*@{pw}vw");
            }
            &-5 {
                top: calc(
                    ~"(47 + 46 + 21 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh"
                );
                left: calc(~"50*@{pw}vw");
            }
            &-6 {
                top: calc(
                    ~"(47 + 46 + 21 + 46 + 21 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh"
                );
                left: calc(~"(50 + 24)*@{pw}vw");
            }
        }
        &-rt {
            background: url("../../../assets/GA/智慧公安/button-right.png")
                no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url("../../../assets/GA/智慧公安/button-right-select.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-1 {
                top: calc(~"67*@{ph}vh");
                right: calc(~"50*@{pw}vw");
            }
            &-2 {
                top: calc(~"(67 + 46 + 21)*@{ph}vh");
                right: calc(~"(50 - 24)*@{pw}vw");
            }
            &-3 {
                top: calc(~"(67 + 46 + 21 + 46 + 21)*@{ph}vh");
                right: calc(~"(50 - 24 - 24)*@{pw}vw");
            }
            &-4 {
                top: calc(~"(67 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh");
                right: calc(~"(50 - 24)*@{pw}vw");
            }
            &-5 {
                top: calc(
                    ~"(67 + 46 + 21 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh"
                );
                right: calc(~"50*@{pw}vw");
            }
        }
    }
}
</style>
