<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            该系统是对标准地址，实有人口、实有房屋、实有单位所采集的信息内容进行统一管理和数据分析应用。做到
            共享互通，着力服务于公安实战、打击违法犯罪，加强重点人口的管控，打造平安稳定的社会环境。
        </div>
        <div class="demo"></div>
        <div class="bottom"></div>
        <div class="list">
            <div class="item">意外事件处置</div>
            <div class="item">寻回遗失物品</div>
            <div class="item">破获诈骗案</div>
            <div class="item">捕获在逃人员</div>
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
        width: calc(~"294*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/GA/一标三实/一标三实.png") no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"755*@{pw}vw");
        height: calc(~"44*@{ph}vh");
        position: absolute;
        top: calc(~"34*@{ph}vh");
        left: calc(~"92*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .demo {
        position: absolute;
        width: calc(~"454*@{pw}vw");
        height: calc(~"290*@{ph}vh");
        bottom: calc(~"56*@{ph}vh");
        left: calc(~"151*@{pw}vw");
        background: url("../../../assets/GA/一标三实/demo.png") no-repeat;
        background-size: 100% 100%;
    }
    .bottom {
        position: absolute;
        width: calc(~"456*@{pw}vw");
        height: calc(~"89*@{ph}vh");
        bottom: calc(~"-1*@{ph}vh");
        left: calc(~"141*@{pw}vw");
        background: url("../../../assets/GA/一标三实/bottom.png") no-repeat;
        background-size: 100% 100%;
    }
    .list {
        position: absolute;
        right: calc(~"168*@{pw}vw");
        top: calc(~"131*@{ph}vh");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item {
            width: calc(~"157*@{pw}vw");
            height: calc(~"68*@{ph}vh");
            background: url("../../../assets/GA/一标三实/border.png") no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 3.8rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
        }
    }
}
</style>
