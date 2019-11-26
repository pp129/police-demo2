<template>
    <div class="home">
        <top @setActive="setActive"></top>
        <router-view @changeView="changeView" ref="main"></router-view>
        <logo class="logo"></logo>
    </div>
</template>

<script>
import top from "../components/top";
import logo from "../components/logo";
export default {
    name: "home",
    components: { top, logo },
    methods: {
        changeView(link) {
            this.$router.push(link);
        },
        setActive() {
            const id = this.$refs.main.$el.id;
            if (id && id === "dashboard") {
                this.$refs.main.clearActive();
            }
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
    .logo {
        position: absolute;
        bottom: 18px;
        right: 18px;
        z-index: 999;
    }
}
</style>
