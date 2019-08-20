<template>
    <div class="top">
        <img class="logo" :src="logoSrc" alt="" />
        <i class="icon-home" @click="backHome"></i>
        <i class="icon-return" @click="backStep"></i>
    </div>
</template>

<script>
export default {
    name: "top",
    data() {
        return {
            logoSrc: require("../assets/title.png")
        };
    },
    methods: {
        backHome() {
            if (this.$route.name) {
                if (this.$route.name === "Home") {
                    window.location.href = window.HomeUrl;
                } else {
                    this.$router.push("Home");
                    this.$emit("setActive");
                }
            }
        },
        backStep() {
            const parent = this.$route.meta.parent;
            if (parent) {
                this.$router.push(parent);
            } else {
                this.$router.push("Home");
                this.$emit("setActive");
            }
        }
    }
};
</script>

<style scoped lang="less" type="text/less">
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
</style>
