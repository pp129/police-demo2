<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            利用先进的可视化技术以及全国领先的视频跟随、
            信号灯跟随技术，实现交通特勤全过程的可视化预案制
            定、推演演练、跟踪跟随、时空预警、研判分析、回放
            归档的全生命周期，构建了国内领先、覆盖全资源、全
            跟随、全生命周期的可视化、扁平化的安保指挥平台。
        </div>
        <div class="demo-border">
            <div class="demo"></div>
        </div>
        <ul class="list">
            <li class="item">完善的定位缺失智能切换应急方案拷贝</li>
            <li class="item">自主研发的视频及信号灯的无缝跟踪技术</li>
            <li class="item">大型活动中多任务的秒级时空预警</li>
            <li class="item">数据分析预测的智能保障方案</li>
            <li class="item">
                全资源，全跟随，全生命周期的交通安保指挥调度体系
            </li>
        </ul>
        <div class="profile-lf">
            <div class="horizontal">全程可视化展示</div>
            <div class="arrows">
                <div class="item">事前<br />规划</div>
                <div class="item">事中<br />跟踪</div>
                <div class="item">事后<br />研判</div>
            </div>
            <div class="horizontal">警卫基础数据资源</div>
        </div>
        <div class="profile-rt">
            <div class="item">可<br />视</div>
            <div class="item">可<br />防</div>
            <div class="item">可<br />控</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JiaoTongJingWeiAnBao"
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        position: absolute;
        //width: calc(~"121*@{pw}vw");
        height: calc(~"25*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        /* background: url("../../../assets/GA/110便民服务系统/110便民服务系统.png")
                no-repeat;
            background-size: 100% 100%;*/
    }
    .content-text {
        width: calc(~"360*@{pw}vw");
        height: calc(~"122*@{ph}vh");
        position: absolute;
        top: calc(~"36*@{ph}vh");
        left: calc(~"76*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .demo-border {
        width: calc(~"387*@{pw}vw");
        height: calc(~"228*@{ph}vh");
        position: absolute;
        top: calc(~"0*@{ph}vh");
        right: calc(~"46*@{pw}vw");
        background: url("../../../assets/JJ/交通警卫安保/border-demo.png")
            no-repeat;
        background-size: 100% 100%;
        .demo {
            width: calc(~"356*@{pw}vw");
            height: calc(~"178*@{ph}vh");
            position: absolute;
            top: calc(~"32*@{ph}vh");
            right: calc(~"16*@{pw}vw");
            background: url("../../../assets/JJ/交通警卫安保/demo.png")
                no-repeat;
            background-size: 100% 100%;
        }
    }
    .list {
        position: absolute;
        left: calc(~"533*@{pw}vw");
        bottom: calc(~"20*@{ph}vh");
        height: calc(~"169*@{ph}vh");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item {
            padding-left: calc(~"24*@{pw}vw");
            background: url("../../../assets/dot.png") no-repeat;
            font-size: 3rem;
            font-weight: bold;
            color: rgba(3, 173, 232, 1);
        }
    }
    .profile-lf {
        width: calc(~"254*@{pw}vw");
        height: calc(~"180*@{ph}vh");
        position: absolute;
        left: calc(~"101*@{pw}vw");
        bottom: calc(~"36*@{ph}vh");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .horizontal {
            width: calc(~"254*@{pw}vw");
            height: calc(~"45*@{ph}vh");
            background: url("../../../assets/JJ/交通警卫安保/border-horizontal.png")
                no-repeat;
            background-size: 100% 100%;
            font-size: 2.8rem;
            font-weight: bold;
            color: rgba(3, 173, 232, 1);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .arrows {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .item {
                width: calc(~"77*@{pw}vw");
                height: calc(~"49*@{ph}vh");
                background: url("../../../assets/JJ/交通警卫安保/border-arrow.png")
                    no-repeat;
                background-size: 100% 100%;
                font-size: 2.8rem;
                font-weight: bold;
                color: rgba(15, 243, 247, 1);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .profile-rt {
        width: calc(~"36*@{pw}vw");
        height: calc(~"180*@{ph}vh");
        position: absolute;
        left: calc(~"394*@{pw}vw");
        bottom: calc(~"36*@{ph}vh");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item {
            width: calc(~"36*@{pw}vw");
            height: calc(~"62*@{ph}vh");
            background: url("../../../assets/JJ/交通警卫安保/border-vertical.png")
                no-repeat;
            background-size: 100% 100%;
            font-size: 2.8rem;
            font-weight: bold;
            color: rgba(3, 173, 232, 1);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
