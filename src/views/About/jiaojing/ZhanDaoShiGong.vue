<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            为了对轨道、道路等占道施工的审批流程和施工情况进行统一管理，简化原有的占道施工审批流程，将传统落后的纸质作业方式更新为高效快捷的信息化模式，对占道施工审批和施工信息进行统一的管理和存储，保证统计分析施工信息的准确性，提高交警支队的管理效率。
        </div>
        <div class="main"></div>
        <div class="box box-1">
            <ul class="list">
                <li class="item">
                    网上预约
                </li>
                <li class="item">
                    占道施工审批
                </li>
                <li class="item">
                    转段施工审批
                </li>
                <li class="item">
                    审批信息查询
                </li>
            </ul>
        </div>
        <i class="arrow arrow-right arrow-right-1"></i>
        <div class="box box-2">
            <ul class="list">
                <li class="item">
                    施工信息展示
                </li>
                <li class="item">
                    岗点信息展示
                </li>
                <li class="item">
                    相关信息查询
                </li>
            </ul>
        </div>
        <i class="arrow arrow-left arrow-left-1"></i>
        <div class="box box-3">
            <ul class="list">
                <li class="item">
                    警力申报
                </li>
                <li class="item">
                    考勤管理
                </li>
                <li class="item">
                    查询管理
                </li>
            </ul>
        </div>
        <i class="arrow arrow-right arrow-right-2"></i>
        <div class="box box-4">
            <ul class="list">
                <li class="item">
                    道路巡查维护
                </li>
                <li class="item">
                    道路巡查查询
                </li>
            </ul>
        </div>
        <i class="arrow arrow-left arrow-left-2"></i>
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
        width: calc(~"243*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/占道施工管理系统/占道施工管理系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"599*@{pw}vw");
        height: calc(~"63*@{ph}vh");
        position: absolute;
        top: calc(~"63*@{ph}vh");
        left: calc(~"174*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .main {
        position: absolute;
        width: calc(~"528*@{pw}vw");
        height: calc(~"376*@{ph}vh");
        bottom: 0;
        left: calc(~"205*@{pw}vw");
        background: url("../../../assets/JJ/占道施工管理系统/main.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .box {
        background: url("../../../assets/JJ/占道施工管理系统/border.png")
            no-repeat;
        background-size: 100% 100%;
        position: absolute;
        width: calc(~"129*@{pw}vw");
        box-sizing: border-box;
        .list {
            padding: calc(~"14*@{ph}vh") calc(~"18*@{pw}vw") calc(~"5*@{ph}vh")
                calc(~"4*@{pw}vw");
            .item {
                padding-left: calc(~"12*@{pw}vw");
                background: url("../../../assets/dot.png") no-repeat left center;
                background-size: calc(~"11*@{pw}vw") calc(~"11*@{ph}vh");
                font-size: 2.2rem;
                font-weight: bold;
                color: rgba(3, 173, 232, 1);
                margin-bottom: 1rem;
            }
        }
        &-1 {
            bottom: calc(~"202*@{ph}vh");
            left: calc(~"42*@{pw}vw");
        }
        &-2 {
            top: calc(~"152*@{ph}vh");
            right: calc(~"54*@{pw}vw");
        }
        &-3 {
            bottom: calc(~"21*@{ph}vh");
            left: calc(~"42*@{pw}vw");
        }
        &-4 {
            bottom: calc(~"46*@{ph}vh");
            right: calc(~"54*@{pw}vw");
        }
    }
    .arrow {
        position: absolute;
        display: block;
        width: calc(~"29*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        &-left {
            background: url("../../../assets/arrow-left.png") no-repeat;
            background-size: 100% 100%;
            &-1 {
                top: calc(~"(156 + 18)*@{ph}vh");
                right: calc(~"(197)*@{pw}vw");
            }
            &-2 {
                bottom: calc(~"72*@{ph}vh");
                right: calc(~"(197)*@{pw}vw");
            }
        }
        &-right {
            background: url("../../../assets/arrow-right.png") no-repeat;
            background-size: 100% 100%;
            &-1 {
                top: calc(~"(156 + 18)*@{ph}vh");
                left: calc(~"176*@{pw}vw");
            }
            &-2 {
                bottom: calc(~"72*@{ph}vh");
                left: calc(~"176*@{pw}vw");
            }
        }
    }
}
</style>
