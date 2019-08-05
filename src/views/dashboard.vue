<template>
    <div class="dashboard">
        <div class="circle">
            <div class="center">
                <div class="ball ball1"></div>
                <div class="ball ball3"></div>
                <div class="ball ball5"></div>
            </div>
        </div>
        <div class="bottom" @click="changeView"></div>
    </div>
</template>

<script>
export default {
    name: "dashboard",
    data() {
        return {};
    },
    methods: {
        changeView() {
            this.$emit("changeView");
        }
    }
};
</script>

<style lang="less">
.dashboard {
    width: 100vw;
    height: 100vh;
    position: relative;
}
@import "../style/ball-animation";
</style>
