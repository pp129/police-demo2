<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            依托公安网与会议专网，针对市局情报信息综合
            研判会商业务需求，提供综合研判会商材料的上传、
            归档、会商督办事项维护、统计、催办、签到、材料
            查看、督办事项跟踪等，实现综合情报研判会商系统 的智能化管理。
        </div>
        <div class="sub-title"></div>
        <div class="items">
            <div class="item">会议<br />管理</div>
            <div class="item">指令<br />管理</div>
            <div class="item">会议<br />签到</div>
            <div class="item">事务<br />催办</div>
            <div class="item">绩效<br />考核</div>
        </div>
        <div class="demo-1"></div>
        <div class="demo-2"></div>
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
        height: calc(~"27*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/综合情报研判会商/综合情报研判会商.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"358*@{pw}vw");
        height: calc(~"111*@{ph}vh");
        position: absolute;
        top: calc(~"95*@{ph}vh");
        left: calc(~"81*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .sub-title {
        width: calc(~"309*@{pw}vw");
        height: calc(~"49*@{ph}vh");
        position: absolute;
        bottom: calc(~"152*@{ph}vh");
        left: calc(~"90*@{pw}vw");
        background: url("../../../assets/GA/综合情报研判会商/div.png") no-repeat;
        background-size: 100% 100%;
    }
    .items {
        width: calc(~"425*@{pw}vw");
        height: calc(~"93*@{ph}vh");
        position: absolute;
        bottom: calc(~"49*@{ph}vh");
        left: calc(~"30*@{pw}vw");
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item {
            width: calc(~"81*@{pw}vw");
            height: calc(~"92*@{ph}vh");
            background: url("../../../assets/GA/综合情报研判会商/border.png")
                no-repeat;
            background-size: 100% 100%;
            font-size: 4rem;
            font-weight: 400;
            color: rgba(3, 173, 232, 1);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .demo-1 {
        width: calc(~"391*@{pw}vw");
        height: calc(~"168*@{ph}vh");
        position: absolute;
        bottom: calc(~"58*@{ph}vh");
        right: calc(~"35*@{pw}vw");
        background: url("../../../assets/GA/综合情报研判会商/demo-1.png")
            no-repeat;
        background-size: 100% 100%;
        z-index: 2;
    }
    .demo-2 {
        width: calc(~"408*@{pw}vw");
        height: calc(~"187*@{ph}vh");
        position: absolute;
        bottom: calc(~"164*@{ph}vh");
        right: calc(~"59*@{pw}vw");
        background: url("../../../assets/GA/综合情报研判会商/demo-2.png")
            no-repeat;
        background-size: 100% 100%;
        z-index: 1;
    }
}
</style>
