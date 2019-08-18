<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            采用数据采集、交换、整合等处理手段，建成集采集、社会资源监督掌控、协同办案、情报预警等社会资源
            监督信息服务系统，为政府部门提供公民身份核查信息服务，有效防范和遏制欺诈、犯罪等行为。
        </div>
        <div class="profile profile-1">身份核查</div>
        <div class="line line-1"></div>
        <div class="profile profile-2">身份核查</div>
        <div class="line line-2"></div>
        <div class="profile profile-3">身份核查</div>
        <div class="arrow-down arrow-down-1"></div>
        <div class="arrow-down arrow-down-2"></div>
        <div class="arrow-down arrow-down-3"></div>
        <div class="contents contents-1">
            数据采集系统
        </div>
        <div class="arrow-left arrow-left-1"></div>
        <div class="contents contents-2">
            统一服务系统
        </div>
        <div class="arrow-left arrow-left-2"></div>
        <div class="contents contents-3">
            核查比对服务系统
        </div>
        <div class="arrow-left arrow-left-3"></div>
        <div class="contents contents-4">
            监督及报警系统
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
    .title-img {
        position: absolute;
        //width: calc(~"297*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        /*background: url("../../../assets/GA/汽车租赁安全监管/汽车租赁安全监管.png")
            no-repeat;
        background-size: 100% 100%;*/
    }
    .content-text {
        width: calc(~"762*@{pw}vw");
        height: calc(~"39*@{ph}vh");
        position: absolute;
        top: calc(~"47*@{ph}vh");
        left: calc(~"152*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .profile {
        position: absolute;
        top: calc(~"143*@{ph}vh");
        width: calc(~"111*@{pw}vw");
        height: calc(~"45*@{ph}vh");
        background: url("../../../assets/GA/社会资源安全监管/border.png")
            no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3.6rem;
        font-weight: bold;
        color: rgba(3, 173, 232, 1);
        line-height: 4.8rem;
        &-1 {
            left: calc(~"288*@{pw}vw");
        }
        &-2 {
            left: calc(~"435*@{pw}vw");
        }
        &-3 {
            left: calc(~"582*@{pw}vw");
        }
    }
    .line {
        position: absolute;
        top: calc(~"166*@{ph}vh");
        width: calc(~"42*@{pw}vw");
        height: calc(~"2*@{ph}vh");
        background: url("../../../assets/GA/社会资源安全监管/line.png")
            no-repeat;
        background-size: 100% 100%;
        &-1 {
            left: calc(~"395*@{pw}vw");
        }
        &-2 {
            left: calc(~"542*@{pw}vw");
        }
    }
    .arrow-down {
        width: calc(~"26*@{pw}vw");
        height: calc(~"30*@{ph}vh");
        background: url("../../../assets/GA/社会资源安全监管/arrow-down.png")
            no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: calc(~"193*@{ph}vh");
        &-1 {
            left: calc(~"328*@{pw}vw");
        }
        &-2 {
            left: calc(~"478*@{pw}vw");
        }
        &-3 {
            left: calc(~"627*@{pw}vw");
        }
    }
    .contents {
        width: calc(~"142*@{pw}vw");
        height: calc(~"89*@{ph}vh");
        position: absolute;
        bottom: calc(~"121*@{ph}vh");
        font-size: 2.8rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"120*@{ph}vh");
        text-align: center;
        &-1 {
            background: url("../../../assets/GA/社会资源安全监管/border-1.png")
                no-repeat;
            background-size: 100% 100%;
            left: calc(~"161*@{pw}vw");
        }
        &-2 {
            background: url("../../../assets/GA/社会资源安全监管/border-2.png")
                no-repeat;
            background-size: 100% 100%;
            left: calc(~"328*@{pw}vw");
        }
        &-3 {
            background: url("../../../assets/GA/社会资源安全监管/border-3.png")
                no-repeat;
            background-size: 100% 100%;
            left: calc(~"494*@{pw}vw");
        }
        &-4 {
            background: url("../../../assets/GA/社会资源安全监管/border-4.png")
                no-repeat;
            background-size: 100% 100%;
            left: calc(~"661*@{pw}vw");
        }
    }
    .arrow-left {
        width: calc(~"14*@{pw}vw");
        height: calc(~"20*@{ph}vh");
        position: absolute;
        bottom: calc(~"153*@{ph}vh");
        background: url("../../../assets/GA/社会资源安全监管/arrow-left.png")
            no-repeat;
        background-size: 100% 100%;
        &-1 {
            left: calc(~"308*@{pw}vw");
        }
        &-2 {
            left: calc(~"475*@{pw}vw");
        }
        &-3 {
            left: calc(~"641*@{pw}vw");
        }
    }
}
</style>
