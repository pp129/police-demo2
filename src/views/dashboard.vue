<template>
    <div class="dashboard">
        <router-view @changeView="changeView"></router-view>
        <div class="dock"></div>
        <div class="dock-box">
            <div
                v-for="item in docks"
                :key="item.link"
                class="dock-items"
                :class="item.active ? 'dock-items-active' : ''"
                @click="changeView(item)"
            >
                <span>{{ item.content }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
export default {
    name: "dashboard",
    data() {
        return {
            docks: [
                {
                    name: "About",
                    content: "业务简介",
                    link: "About",
                    active: true
                },
                {
                    name: "ClassicCase",
                    content: "典型案例",
                    link: "ClassicCase",
                    active: false
                },
                {
                    name: "HonoraryAndCertificate",
                    content: "荣誉资质",
                    link: "/HonoraryAndCertificate",
                    active: false
                }
            ]
        };
    },
    mounted() {
        this.setActive();
    },
    methods: {
        setActive() {
            const link = this.$route;
            _.each(this.docks, e => {
                e.active = false;
            });
            _.find(this.docks, { name: link.name }).active = true;
        },
        changeView(item) {
            _.each(this.docks, e => {
                e.active = false;
            });
            this.$router.push(item.link);
            item.active = true;
        }
    }
};
</script>

<style lang="less">
.dashboard {
    width: 100vw;
    height: 100vh;
    position: relative;
    .dock {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: calc(~"630*@{pw}vw");
        height: calc(~"82*@{ph}vh");
        margin-left: calc(~"-315*@{pw}vw");
        background: url("../assets/bottom_lights.png");
        background-size: 100% 100%;
    }
    .dock-box {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: calc(~"435*@{pw}vw");
        margin-left: calc(~"-217.5*@{pw}vw");
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .dock-items {
            width: calc(~"167*@{pw}vw");
            height: calc(~"51*@{ph}vh");
            cursor: pointer;
            background: url("../assets/icon-dock.png") no-repeat center 25px;
            text-align: center;
            span {
                font-size: 3.2rem;
                font-family: NotoSansHans-Regular, serif;
                font-weight: 400;
                color: rgba(0, 180, 241, 1);
                line-height: 6.4rem;
            }
            &-active {
                width: calc(~"167*@{pw}vw");
                height: calc(~"51*@{ph}vh");
                background: url("../assets/icon-dock-a.png") no-repeat center -20px;
                span {
                    color: #fff;
                }
            }
            &:hover {
                width: calc(~"167*@{pw}vw");
                height: calc(~"51*@{ph}vh");
                background: url("../assets/icon-dock-a.png") no-repeat center -20px;
                span {
                    color: #fff;
                }
            }
        }
    }
}
</style>
