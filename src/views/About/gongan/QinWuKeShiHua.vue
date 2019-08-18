<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="hf lf">
            <div class="row">
                <div class="item">
                    <div class="circle circle-1"></div>
                    <p class="text">警务资源汇聚</p>
                </div>
                <div class="item">
                    <div class="circle circle-2"></div>
                    <p class="text">分类勤务部署</p>
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <div class="circle circle-3"></div>
                    <p class="text">智能指挥调度</p>
                </div>
                <div class="item">
                    <div class="circle circle-4"></div>
                    <p class="text">实战考评体系</p>
                </div>
            </div>
        </div>
        <div class="hf rt">
            <div class="content">
                <div class="row">
                    <div class="describe">精确掌控勤务态势</div>
                    <div class="describe">精准部署勤务工作</div>
                </div>
                <div class="row">
                    <div class="demo"></div>
                </div>
                <div class="row">
                    <div class="describe">精度统计勤务绩效</div>
                    <div class="describe">精细发布勤务消息</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: ""
};
</script>

<style scoped type="text/less" lang="less">
.page {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .title-img {
        position: absolute;
        width: calc(~"324*@{pw}vw");
        height: calc(~"27*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/勤务可视化指挥作战平台/勤务可视化指挥作战平台.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .hf {
        width: 50%;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        .row {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        &.lf {
            display: flex;
            .item {
                .circle {
                    width: calc(~"97*@{pw}vw");
                    height: calc(~"97*@{ph}vh");
                    &-1 {
                        background: url("../../../assets/GA/勤务可视化指挥作战平台/circle1.png")
                            no-repeat;
                        background-size: 100% 100%;
                    }
                    &-2 {
                        background: url("../../../assets/GA/勤务可视化指挥作战平台/circle2.png")
                            no-repeat;
                        background-size: 100% 100%;
                    }
                    &-3 {
                        background: url("../../../assets/GA/勤务可视化指挥作战平台/circle3.png")
                            no-repeat;
                        background-size: 100% 100%;
                    }
                    &-4 {
                        background: url("../../../assets/GA/勤务可视化指挥作战平台/circle4.png")
                            no-repeat;
                        background-size: 100% 100%;
                    }
                }
                .text {
                    font-size: 3.2rem;
                    font-weight: bold;
                    color: rgba(3, 173, 232, 1);
                    line-height: 3rem;
                }
            }
        }
        &.rt {
            .content {
                padding: 10rem;
                .describe {
                    width: calc(~"223*@{pw}vw");
                    height: calc(~"75*@{ph}vh");
                    background: url("../../../assets/GA/勤务可视化指挥作战平台/border.png")
                        no-repeat;
                    background-size: 100% 100%;
                    font-size: 3.2rem;
                    font-weight: bold;
                    color: rgba(255, 255, 255, 1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .demo {
                    width: calc(~"410*@{pw}vw");
                    height: calc(~"167*@{ph}vh");
                    background: url("../../../assets/GA/勤务可视化指挥作战平台/demo.png")
                        no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
    }
}
</style>
