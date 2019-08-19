<template>
    <div class="main about">
        <div class="title-img"></div>
        <div class="content-text">
            通过智能分析技术、大数据技术，深入挖掘视频图像信息，对到港船舶进行分析管理，主要包括
            到达及时率、国籍、类型、目的地、港口流量等，另外还针对人员和异常行为情况等进行综合分析，
            为海港边检提供科学决策的信息辅助，实现边检智能化决策。
        </div>
        <div class="cards">
            <div class="card card-1">
                <div class="card_content">
                    <p>到港及时率分析</p>
                    <p>到港船舶国籍分析</p>
                    <p>到港船舶类型分析</p>
                </div>
            </div>
            <div class="card card-2">
                <div class="card_content">
                    <p>目的分析</p>
                    <p>人员分析</p>
                    <p>国籍分析</p>
                </div>
            </div>
            <div class="card card-3">
                <div class="card_content">
                    <p>梯口异常情况分析</p>
                    <p>口岸限定区异常分析</p>
                    <p>船舶外炫异常分析</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HaiGangBianJian"
};
</script>

<style scoped type="text/less" lang="less">
.about {
    .title-img {
        position: absolute;
        width: calc(~"298*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/BJ/海港边检决策分析系统/海港边检决策分析系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"669*@{pw}vw");
        height: calc(~"70*@{ph}vh");
        position: absolute;
        top: calc(~"45*@{ph}vh");
        left: calc(~"126*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .cards {
        width: calc(~"817*@{pw}vw");
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        position: absolute;
        top: calc(~"162*@{ph}vh");
        left: calc(~"68*@{pw}vw");
        .card {
            position: relative;
            &-1 {
                width: calc(~"234*@{pw}vw");
                height: calc(~"207*@{ph}vh");
                background: url("../../../assets/BJ/海港边检决策分析系统/border-1.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-2 {
                width: calc(~"233*@{pw}vw");
                height: calc(~"206*@{ph}vh");
                background: url("../../../assets/BJ/海港边检决策分析系统/border-2.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-3 {
                width: calc(~"233*@{pw}vw");
                height: calc(~"206*@{ph}vh");
                background: url("../../../assets/BJ/海港边检决策分析系统/border-3.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &_content {
                height: calc(~"88*@{ph}vh");
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: absolute;
                top: calc(~"57*@{ph}vh");
                left: calc(~"17*@{pw}vw");
                p {
                    font-size: 3rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }
}
</style>
