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
                    name: "QinWuKeShiHua",
                    text: "可视化勤务支撑平台"
                },
                {
                    name: "KeShiHuaDaPing",
                    text: "可视化大屏展示系统"
                },
                {
                    name: "YiDongJingWu",
                    text: "移动警务应用系统"
                },
                {
                    name: "ZongHeQingBao",
                    text: "综合情报研判会商系统"
                },
                {
                    name: "JingQingGenZong",
                    text: "警情跟踪管理系统"
                },
                {
                    name: "SheHuiZiYuan",
                    text: "社会资源监督管理平台"
                }
            ],
            listRight: [
                {
                    name: "QICheZuLing",
                    text: "汽车租赁安全监管平台"
                },
                {
                    name: "QiYeRenYuan",
                    text: "企业员工身份核查系统"
                },
                {
                    name: "WuRenJi",
                    text: "无人机安全监管系统"
                },
                {
                    name: "YiShiSanBiao",
                    text: "一实三标"
                },
                {
                    name: "GAServerSystem",
                    text: "110自助报警系统"
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
        width: calc(~"172*@{pw}vw");
        height: calc(~"46*@{ph}vh");
        &:hover {
            font-size: 3.4rem;
            line-height: calc(~"49*@{ph}vh");
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            width: calc(~"190*@{pw}vw");
            height: calc(~"49*@{ph}vh");
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
                left: calc(~"81*@{pw}vw");
            }
            &-2 {
                top: calc(~"(47 + 46 + 21)*@{ph}vh");
                left: calc(~"(81 - 24)*@{pw}vw");
            }
            &-3 {
                top: calc(~"(47 + 46 + 21 + 46 + 21)*@{ph}vh");
                left: calc(~"(81 - 24 - 24)*@{pw}vw");
            }
            &-4 {
                top: calc(~"(47 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh");
                left: calc(~"(81 - 24)*@{pw}vw");
            }
            &-5 {
                top: calc(
                    ~"(47 + 46 + 21 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh"
                );
                left: calc(~"81*@{pw}vw");
            }
            &-6 {
                top: calc(
                    ~"(47 + 46 + 21 + 46 + 21 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh"
                );
                left: calc(~"(81 + 24)*@{pw}vw");
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
                top: calc(~"47*@{ph}vh");
                right: calc(~"81*@{pw}vw");
            }
            &-2 {
                top: calc(~"(47 + 46 + 21)*@{ph}vh");
                right: calc(~"(81 - 24)*@{pw}vw");
            }
            &-3 {
                top: calc(~"(47 + 46 + 21 + 46 + 21)*@{ph}vh");
                right: calc(~"(81 - 24 - 24)*@{pw}vw");
            }
            &-4 {
                top: calc(~"(47 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh");
                right: calc(~"(81 - 24)*@{pw}vw");
            }
            &-5 {
                top: calc(
                    ~"(47 + 46 + 21 + 46 + 21 + 46 + 21 + 46 + 21)*@{ph}vh"
                );
                right: calc(~"81*@{pw}vw");
            }
        }
    }
}
</style>
