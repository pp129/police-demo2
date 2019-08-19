<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            基于GIS地图及物联网技术，采用可靠的数据传输技术和大数据分布式存储技术，制定统一标准规范，打破原有
            资源壁垒，实现各类交通设施信息的数字化综合采集、存储、管理和维护。从而促进交通设施数字化、设施运维管理
            信息化，提升交通管理部门的管理水平及管理效率。
        </div>
        <div class="row">
            <div class="col">
                <div class="title"><p>交通设施数据中心</p></div>
                <ul class="list">
                    <li class="item">交通路网信息库</li>
                    <li class="item">交通设施类别库</li>
                    <li class="item">交通设施基础数据库</li>
                    <li class="item">交通设施运维数据库</li>
                </ul>
            </div>
            <div class="col">
                <div class="title"><p>交通设施运维子系统</p></div>
                <ul class="list">
                    <li class="item">移动验收管理</li>
                    <li class="item">设施台账管理</li>
                    <li class="item">故障管理</li>
                    <li class="item">巡检管理</li>
                </ul>
            </div>
            <div class="col">
                <div class="title"><p>交通设施移动作业子系统</p></div>
                <ul class="list">
                    <li class="item">交通设施检索</li>
                    <li class="item">运维事件监督</li>
                    <li class="item">运维服务报表</li>
                </ul>
            </div>
            <div class="col">
                <div class="title"><p>交通设施GIS监管子系统</p></div>
                <ul class="list">
                    <li class="item">移动采集</li>
                    <li class="item">日常巡检</li>
                    <li class="item">保障抢修</li>
                    <li class="item">监督管理</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JiaoTongSheShiGuanLi"
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        position: absolute;
        width: calc(~"241*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/交通设施管理系统/交通设施管理系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"764*@{pw}vw");
        height: calc(~"70*@{ph}vh");
        position: absolute;
        top: calc(~"53*@{ph}vh");
        left: calc(~"98*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .row {
        width: calc(~"764*@{pw}vw");
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        top: calc(~"(123 + 13 + 23)*@{ph}vh");
        left: calc(~"99*@{pw}vw");
        .col {
            width: calc(~"121*@{pw}vw");
            display: flex;
            flex-direction: column;
            align-items: center;
            .title {
                width: calc(~"121*@{pw}vw");
                height: calc(~"74*@{ph}vh");
                background: url("../../../assets/JJ/交通设施管理系统/border.png")
                    no-repeat;
                background-size: 100% 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                p {
                    width: calc(~"90*@{pw}vw");
                    font-size: 3rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    text-align: center;
                }
            }
            .list {
                .item {
                    width: calc(~"98*@{pw}vw");
                    margin-top: calc(~"18*@{ph}vh");
                    text-align: center;
                    font-size: 2.8rem;
                    font-weight: 400;
                    color: rgba(3, 244, 253, 1);
                }
            }
        }
    }
}
</style>
