<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            将大数据技术与交通管理业务相结合，通过对交警日常勤务、高峰勤务、骑警勤务的综合分析，实现
            “警力-警情-装备-勤务-排班-绩效”的一体化管理，形成“警力与警情同步浮动，警力跟着警情走”的勤务
            工作模式，达到对警力的精准、精细化、扁平化管理。
        </div>
        <div class="profiles">
            <div class="lf">
                <div class="top">
                    <div class="item"><p>日常管理</p></div>
                    <div class="item"><p>高峰管理</p></div>
                    <div class="item"><p>骑警管理</p></div>
                    <div class="item"><p>交通警卫</p></div>
                </div>
                <div class="bottom">智能精细排班系统</div>
            </div>
            <div class="c">大数据<br />云计算</div>
            <div class="rt">
                <div class="lf"><p>绩效考核</p></div>
                <div class="rt">
                    <div class="item">警员</div>
                    <div class="item">中队</div>
                    <div class="item">大队</div>
                    <div class="item">支队</div>
                </div>
            </div>
        </div>
        <div class="demo"></div>
        <div class="bottom"></div>
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
        width: calc(~"319*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/交通大数据勤务指挥/交通大数据勤务指挥.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"701*@{pw}vw");
        height: calc(~"70*@{ph}vh");
        position: absolute;
        top: calc(~"45*@{ph}vh");
        left: calc(~"108*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .profiles {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        position: absolute;
        top: calc(~"157*@{ph}vh");
        left: calc(~"50*@{pw}vw");
        .lf {
            width: calc(~"190*@{pw}vw");
            height: calc(~"156*@{ph}vh");
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .top {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .item {
                    width: calc(~"42*@{pw}vw");
                    height: calc(~"98*@{ph}vh");
                    background: url("../../../assets/JJ/交通大数据勤务指挥/border-horizontal.png")
                        no-repeat;
                    background-size: 100% 100%;
                    font-size: 3.2rem;
                    font-weight: normal;
                    color: rgba(255, 255, 255, 1);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p {
                        word-wrap: break-word;
                        width: 3.2rem;
                    }
                }
            }
            .bottom {
                width: calc(~"190*@{pw}vw");
                height: calc(~"46*@{ph}vh");
                background: url("../../../assets/JJ/交通大数据勤务指挥/border-long.png")
                    no-repeat;
                background-size: 100% 100%;
                font-size: 3.2rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
        .c {
            width: calc(~"123*@{pw}vw");
            height: calc(~"99*@{ph}vh");
            background: url("../../../assets/JJ/交通大数据勤务指挥/border-arrow.png")
                no-repeat;
            background-size: 100% 100%;
            font-size: 4.4rem;
            font-weight: 400;
            color: rgba(3, 173, 232, 1);
            display: flex;
            align-items: center;
            padding-left: 3rem;
            box-sizing: border-box;
        }
        .rt {
            width: calc(~"142*@{pw}vw");
            height: calc(~"156*@{ph}vh");
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .lf {
                width: calc(~"42*@{pw}vw");
                height: calc(~"156*@{ph}vh");
                background: url("../../../assets/JJ/交通大数据勤务指挥/border-thin.png")
                    no-repeat;
                background-size: 100% 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p {
                    word-wrap: break-word;
                    width: 3.2rem;
                    font-size: 3.2rem;
                    font-weight: normal;
                    color: rgba(3, 173, 232, 1);
                }
            }
            .rt {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: calc(~"97*@{pw}vw");
                height: calc(~"156*@{ph}vh");
                .item {
                    width: calc(~"97*@{pw}vw");
                    height: calc(~"54*@{ph}vh");
                    background: url("../../../assets/JJ/交通大数据勤务指挥/border.png")
                        no-repeat;
                    background-size: 100% 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 3.2rem;
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }
    .demo {
        width: calc(~"416*@{pw}vw");
        height: calc(~"251*@{ph}vh");
        background: url("../../../assets/JJ/交通大数据勤务指挥/demo.png")
            no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: calc(~"86*@{ph}vh");
        right: calc(~"11*@{pw}vw");
    }
    > .bottom {
        width: calc(~"527*@{pw}vw");
        height: calc(~"114*@{ph}vh");
        background: url("../../../assets/JJ/交通大数据勤务指挥/bottom.png")
            no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: calc(~"0*@{ph}vh");
        right: calc(~"13*@{pw}vw");
    }
}
</style>
