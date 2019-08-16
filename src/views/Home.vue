<template>
    <div class="home">
        <div class="top">
            <img class="logo" :src="logoSrc" alt="" />
            <i class="icon-home" @click="backHome"></i>
            <i class="icon-return"></i>
        </div>
        <router-view @changeView="changeView"></router-view>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            logoSrc: require("../assets/title.png")
        };
    },
    methods: {
        changeView(link) {
            this.$router.push(link);
        },
        backHome() {
            this.$router.push("/dashboard/About");
        }
    }
};
</script>
<style scoped lang="less">
.home {
    .top {
        width: 100%;
        position: relative;
        top: calc(~"21*@{ph}vh");
        left: 0;
        .logo {
            display: block;
            width: 921px;
            height: 141px;
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -460px;
        }
        i {
            display: block;
            position: absolute;
            cursor: pointer;
            width: 72px;
            height: 72px;
            &.icon-home {
                right: 197px;
                background: url("../assets/icon_home.png");
                cursor: pointer;
                z-index: 999;
                &:hover {
                    background: url("../assets/icon_home_s.png");
                }
            }
            &.icon-return {
                right: 109px;
                background: url("../assets/icon_return.png");
                cursor: pointer;
                z-index: 999;
                &:hover {
                    background: url("../assets/icon_return_s.png");
                }
            }
        }
    }
}
</style>
