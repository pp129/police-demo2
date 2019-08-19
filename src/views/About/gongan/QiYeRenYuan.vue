<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            采用数依托公安信息资源服务平台，通过采集企业员工身份信息，进行身份核查，提供分级分色预警服务,
            同时与公安联网报警，帮助企业把好“入口关”，协助民警开展人员信息采集管控工作的系统。
        </div>
        <div class="demo"></div>
        <ul class="list list-lf">
            <li class="item">身份采集</li>
            <li class="item">身份核查</li>
            <li class="item">信息核查</li>
            <li class="item">批量核查</li>
        </ul>
        <ul class="list list-rt">
            <li class="item">分级预警</li>
            <li class="item">异常人员管理</li>
            <li class="item">查询统计</li>
            <li class="item">联动报警</li>
        </ul>
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
        width: calc(~"300*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/企业人员身份核查系统/企业人员身份核查系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"754*@{pw}vw");
        height: calc(~"39*@{ph}vh");
        position: absolute;
        top: calc(~"65*@{ph}vh");
        left: calc(~"76*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .demo {
        width: calc(~"408*@{pw}vw");
        height: calc(~"260*@{ph}vh");
        position: absolute;
        top: calc(~"122*@{ph}vh");
        left: calc(~"257*@{pw}vw");
        background: url("../../../assets/GA/企业人员身份核查系统/demo.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .list {
        //width: calc(~"103*@{pw}vw");
        height: calc(~"140*@{ph}vh");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        bottom: calc(~"110*@{ph}vh");
        &-lf {
            left: calc(~"121*@{pw}vw");
        }
        &-rt {
            left: calc(~"690*@{pw}vw");
        }
        .item {
            font-size: 3.8rem;
            font-weight: bold;
            color: rgba(3, 173, 232, 1);
            padding-left: calc(~"24*@{pw}vw");
            background: url("../../../assets/dot.png") no-repeat;
            background-size: contain;
        }
    }
}
</style>
