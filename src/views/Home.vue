<template>
    <div class="home">
        <div class="top">
            <img class="logo" :src="logoSrc" alt="" />
            <i class="icon-home"></i>
            <i class="icon-return"></i>
        </div>
        <div class="main">
            <router-view @changeView="changeView"></router-view>
        </div>
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
        changeView() {
            this.$router.push("about");
        }
    }
};
</script>
<style scoped lang="less">
.home {
    .top {
        width: 100%;
        position: relative;
        top: 41px;
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
                &:hover {
                    background: url("../assets/icon_home_s.png");
                }
            }
            &.icon-return {
                right: 109px;
                background: url("../assets/icon_return.png");
                &:hover {
                    background: url("../assets/icon_return_s.png");
                }
            }
        }
    }
}
</style>
