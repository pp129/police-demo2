<template>
    <div class="main about">
        <p class="title">海港边检决策分析系统</p>
        <div class="content">
            通过智能分析技术、大数据技术，深入挖掘视频图像信息，对到港船舶进行分析管理，主要包括
            到达及时率、国籍、类型、目的地、港口流量等，另外还针对人员和异常行为情况等进行综合分析，
            为海港边检提供科学决策的信息辅助，实现边检智能化决策。
        </div>
        <div class="cards">
            <div class="card card_1">
                <div class="card_title"><span>港区船舶分析</span></div>
                <div class="card_content">
                    <p>到港及时率分析</p>
                    <p>到港船舶国籍分析</p>
                    <p>到港船舶类型分析</p>
                    <p>船舶目的地分析</p>
                    <p>港口流量分析</p>
                </div>
            </div>
            <div class="card card_2">
                <div class="card_title"><span>人员分析</span></div>
                <div class="card_content">
                    <p>目的分析</p>
                    <p>人员分析</p>
                    <p>国籍分析</p>
                </div>
            </div>
            <div class="card card_3">
                <div class="card_title"><span>异常情况行为分析</span></div>
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

<style scoped lang="less">
.about {
    .cards {
        width: calc(~"812*@{pw}vw");
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: calc(~"46*@{ph}vh");
        .card {
            border: 1px solid rgba(3, 173, 232, 0.3);
            box-shadow: 0 0 10px 5px rgba(3, 173, 232, 0.3) inset;
            position: relative;
            &:before {
                content: "\23A3";
                font-size: calc(~"22*@{ph}vh");
                color: rgba(3, 173, 232, 1);
                position: absolute;
                bottom: calc(~"-4*@{ph}vh");
                left: calc(~"-1*@{pw}vw");
            }
            &:after {
                content: "\23A6";
                font-size: calc(~"22*@{ph}vh");
                color: rgba(3, 173, 232, 1);
                position: absolute;
                bottom: calc(~"-4*@{ph}vh");
                right: calc(~"-1*@{pw}vw");
            }
            &_title {
                width: 100%;
                height: 32px;
                background: linear-gradient(
                    92deg,
                    rgba(3, 173, 232, 0.6),
                    rgba(1, 137, 184, 0.1)
                );
                span {
                    width: 99px;
                    height: 16px;
                    font-size: 17px;
                    font-family: "NotoSansHans-Medium", sans-serif;
                    margin-left: 14px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                    line-height: 35px;
                    background: linear-gradient(
                        8deg,
                        rgba(183, 255, 255, 1) 0%,
                        rgba(113, 255, 255, 1) 34.4482421875%,
                        rgba(108, 255, 255, 1) 51.806640625%,
                        rgba(69, 191, 255, 1) 100%
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            &_content {
                font-size: 18px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                padding: 23px 0 18px 14px;
                p {
                    margin-bottom: 20px;
                    text-shadow: 0.2rem 0 0.5rem rgba(3, 173, 232, 1),
                        -0.2rem 0 0.5rem rgba(3, 173, 232, 1),
                        0 0.2rem 0.5rem rgba(3, 173, 232, 1),
                        0 -0.2rem 0.5rem rgba(3, 173, 232, 1);
                }
            }
            &_1 {
                width: calc(~"228*@{pw}vw");
            }
            &_2 {
                width: calc(~"223*@{pw}vw");
            }
            &_3 {
                width: calc(~"228*@{pw}vw");
            }
        }
    }
}
</style>
