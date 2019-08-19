<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            项目工程管理系统根据业务方向，分为互联网和公安网双网双平台，实现工程信息化、标准化管理，提高效率。
        </div>
        <div class="bottom"></div>
        <div class="stack"></div>
        <div class="profiles">
            <div class="item">
                <div class="title">施工单位</div>
                <ul class="list">
                    <li class="item">
                        占道施工，申请
                    </li>
                    <li class="item">
                        施工反馈
                    </li>
                    <li class="item">
                        设备移交，申请
                    </li>
                    <li class="item">
                        进度咨询
                    </li>
                </ul>
            </div>
            <div class="item">
                <div class="title">公安交警</div>
                <ul class="list">
                    <li class="item">
                        占道施工，审批
                    </li>
                    <li class="item">
                        施工巡查
                    </li>
                    <li class="item">
                        设备移交，审批
                    </li>
                    <li class="item">
                        进度查询
                    </li>
                </ul>
            </div>
            <div class="item">
                <div class="title">公安交警</div>
                <ul class="list">
                    <li class="item">
                        施工评审管理
                    </li>
                    <li class="item">
                        项目工程管理
                    </li>
                    <li class="item">
                        项目财务管理
                    </li>
                </ul>
            </div>
        </div>
        <p class="sub-title sub-title-1">
            互联网平台
        </p>
        <p class="sub-title sub-title-2">公安网平台</p>
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
        width: calc(~"249*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/项目工程管理/项目工程管理.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        position: absolute;
        top: calc(~"102*@{ph}vh");
        left: calc(~"59*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .bottom {
        position: absolute;
        width: calc(~"417*@{pw}vw");
        height: calc(~"283*@{ph}vh");
        bottom: 0;
        left: 0;
        background: url("../../../assets/JJ/项目工程管理/bottom.png") no-repeat;
        background-size: 100% 100%;
        z-index: 1;
    }
    .stack {
        position: absolute;
        width: calc(~"301*@{pw}vw");
        height: calc(~"160*@{ph}vh");
        bottom: calc(~"120*@{ph}vh");
        left: calc(~"51*@{pw}vw");
        background: url("../../../assets/JJ/项目工程管理/stack.png") no-repeat;
        background-size: 100% 100%;
        z-index: 2;
    }
    .profiles {
        width: calc(~"547*@{pw}vw");
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        bottom: calc(~"155*@{ph}vh");
        right: calc(~"30*@{pw}vw");
        > .item {
            width: calc(~"174*@{pw}vw");
            height: calc(~"154*@{ph}vh");
            background: url("../../../assets/JJ/项目工程管理/border.png")
                no-repeat;
            background-size: 100% 100%;
            position: relative;
            .title {
                width: 100%;
                text-align: center;
                font-size: 3.6rem;
                font-weight: bold;
                color: #fff;
                margin-top: calc(~"12*@{ph}vh");
                margin-bottom: calc(~"13*@{ph}vh");
            }
            .list {
                position: absolute;
                top: calc(~"43*@{ph}vh");
                left: calc(~"18*@{pw}vw");
                .item {
                    padding-left: calc(~"24*@{pw}vw");
                    background: url("../../../assets/dot.png") no-repeat;
                    background-size: contain;
                    font-size: 3rem;
                    font-weight: bold;
                    color: rgba(3, 173, 232, 1);
                    margin-bottom: calc(~"10*@{pw}vw");
                }
            }
        }
    }
    .sub-title {
        font-size: 3.6rem;
        font-weight: bold;
        color: #fff;
        position: absolute;
        bottom: calc(~"101*@{ph}vh");
        &-1 {
            left: calc(~"505*@{pw}vw");
        }
        &-2 {
            right: calc(~"54*@{pw}vw");
        }
    }
}
</style>
