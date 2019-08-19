<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            平台采用智能化模式，结合手机定位接入服务、车辆信息查询服务等模块，实现短信/微信的自助举报诈骗信息、自助
            移车服务、自助开锁等报警求助。
        </div>
        <div class="profile profile-1">语音自助移车</div>
        <div class="line line-1"></div>
        <div class="profile profile-2">自助开锁</div>
        <div class="line line-2"></div>
        <div class="profile profile-3">诈骗举报</div>
        <div class="line line-3"></div>
        <div class="profile profile-4">政府投诉</div>
        <ul class="list list-lf">
            <li class="item">短信发送</li>
            <li class="item">报警处理</li>
            <li class="item">处理记录</li>
        </ul>
        <ul class="list list-rt">
            <li class="item">手机定位</li>
            <li class="item">微信提醒</li>
            <li class="item">每日统计</li>
        </ul>
        <div class="demo"></div>
        <div class="bottom"></div>
    </div>
</template>

<script>
export default {
    name: "GAServerSystem"
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        position: absolute;
        width: calc(~"240*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/110便民服务系统/110便民服务系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"810*@{pw}vw");
        height: calc(~"44*@{ph}vh");
        position: absolute;
        top: calc(~"29*@{ph}vh");
        left: calc(~"52*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .profile {
        position: absolute;
        top: calc(~"88*@{ph}vh");
        width: calc(~"111*@{pw}vw");
        height: calc(~"45*@{ph}vh");
        font-size: 3.6rem;
        font-weight: bold;
        color: rgba(3, 173, 232, 1);
        line-height: 6rem;
        text-align: center;
        background: url("../../../assets/GA/110便民服务系统/border-2.png")
            no-repeat;
        background-size: 100% 100%;
        &-1 {
            width: calc(~"140*@{pw}vw");
            left: calc(~"184*@{pw}vw");
        }
        &-2 {
            left: calc(~"360*@{pw}vw");
        }
        &-3 {
            left: calc(~"507*@{pw}vw");
        }
        &-4 {
            left: calc(~"652*@{pw}vw");
        }
    }
    .line {
        position: absolute;
        top: calc(~"110*@{ph}vh");
        width: calc(~"42*@{pw}vw");
        height: calc(~"2*@{ph}vh");
        background: url("../../../assets/GA/110便民服务系统/line.png") no-repeat;
        background-size: 100% 100%;
        &-1 {
            left: calc(~"321*@{pw}vw");
        }
        &-2 {
            left: calc(~"467*@{pw}vw");
        }
        &-3 {
            left: calc(~"621*@{pw}vw");
        }
    }
    .list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(~"128*@{pw}vw");
        height: calc(~"174*@{ph}vh");
        position: absolute;
        top: calc(~"175*@{ph}vh");
        &-lf {
            left: calc(~"128*@{pw}vw");
        }
        &-rt {
            right: calc(~"128*@{pw}vw");
        }
        .item {
            width: calc(~"128*@{pw}vw");
            height: calc(~"58*@{ph}vh");
            background: url("../../../assets/GA/110便民服务系统/border.png")
                no-repeat;
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
        }
    }
    .demo {
        position: absolute;
        top: calc(~"139*@{ph}vh");
        left: calc(~"277*@{pw}vw");
        width: calc(~"387*@{pw}vw");
        height: calc(~"278*@{ph}vh");
        background: url("../../../assets/GA/110便民服务系统/demo.png") no-repeat;
        background-size: 100% 100%;
    }
    .bottom {
        width: calc(~"652*@{pw}vw");
        height: calc(~"85*@{ph}vh");
        background: url("../../../assets/GA/110便民服务系统/bottom.png")
            no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: calc(~"-2*@{ph}vh");
        left: calc(~"149*@{pw}vw");
    }
}
</style>
