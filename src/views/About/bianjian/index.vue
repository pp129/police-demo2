<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="center">
            <p>
                以PGIS地图（陆地）和电子海图（海上）为基础，整合现有
                海防监控、船舶AIS、船用北斗、通信终端等前端感知系统，
                依托大数据、北斗定位、船舶AIS等技术，引进和共享公安、
                渔政等多个部门数据资源，对边检管理部门提供船舶监管、
                区域管控、决策分析等信息服务，实现智慧边检一体化的检
                查和安全监管工作。
            </p>
        </div>
        <div class="gears"></div>
        <div
            v-for="(item, index) in list"
            :key="item.name"
            class="btn"
            :class="'btn-' + (index + 1)"
            @click="goto(item.name)"
            v-html="item.text"
        ></div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            list: [
                {
                    name: "ChuRuJing",
                    text: "出入境（港）船舶<br>监管系统"
                },
                {
                    name: "KouAnXianDingQuYu",
                    text: "口岸限定区域<br>管控系统"
                },
                {
                    name: "TiKouZhiNengJianGuan",
                    text: "梯口智能<br>监管系统"
                },
                {
                    name: "HaiGangBianJian",
                    text: "海港边检决策<br>分析系统"
                },
                {
                    name: "YiDongBianJian",
                    text: "移动边检<br>APP"
                }
            ]
        };
    },
    methods: {
        goto(link) {
            this.$router.push(link);
        }
    }
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        width: calc(~"193*@{pw}vw");
        height: calc(~"46*@{ph}vh");
        background: url("../../../assets/BJ/智慧边检/智慧边检.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: calc(~"386*@{pw}vw");
    }
    .center {
        width: calc(~"510*@{pw}vw");
        height: calc(~"394*@{ph}vh");
        background: url("../../../assets/BJ/智慧边检/center.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: calc(~"0*@{ph}vh");
        left: calc(~"240*@{pw}vw");
        p {
            width: calc(~"423*@{pw}vw");
            height: calc(~"165*@{ph}vh");
            font-size: 3.6rem;
            color: #ffffff;
            position: absolute;
            top: calc(~"33*@{ph}vh");
            left: calc(~"49*@{pw}vw");
        }
    }
    .gears {
        width: calc(~"50*@{pw}vw");
        height: calc(~"269*@{ph}vh");
        background: url("../../../assets/BJ/智慧边检/gears.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: calc(~"106*@{ph}vh");
        left: calc(~"36*@{pw}vw");
    }
    .btn {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.4rem;
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
        width: calc(~"125*@{pw}vw");
        height: calc(~"34*@{ph}vh");
        background: url("../../../assets/BJ/智慧边检/icon.png") no-repeat;
        background-size: 100% 100%;
        left: calc(~"72*@{pw}vw");
        text-align: center;
        &:hover {
            background: url("../../../assets/BJ/智慧边检/icon-select.png")
                no-repeat;
            background-size: 100% 100%;
        }
        &-1 {
            bottom: calc(~"358*@{ph}vh");
        }
        &-2 {
            bottom: calc(~"(358 - 34 - 25)*@{ph}vh");
        }
        &-3 {
            bottom: calc(~"(358 - 34 - 25 - 34 - 25)*@{ph}vh");
        }
        &-4 {
            bottom: calc(~"(358 - 34 - 25 - 34 - 25 - 34 - 25)*@{ph}vh");
        }
        &-5 {
            bottom: calc(
                ~"(358 - 34 - 25 - 34 - 25 - 34 - 25 - 34 - 25)*@{ph}vh"
            );
        }
    }
}
</style>
