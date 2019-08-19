<template>
    <div class="main page">
        <div class="title-img"></div>
    </div>
</template>

<script>
import routes from "../../../config/routes-GA";
export default {
    name: "index",
    data() {
        return {
            list: routes
        };
    },
    methods: {
        goto(item) {
            this.$router.push(item.path);
        }
    }
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        width: calc(~"193*@{pw}vw");
        height: calc(~"46*@{ph}vh");
        background: url("../../../assets/GA/智慧公安/智慧公安.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: calc(~"386*@{pw}vw");
    }
}
</style>
