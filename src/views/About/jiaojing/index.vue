<template>
    <div class="main">
        <ul>
            <li v-for="item in list" :key="item.path" @click="goto(item)">
                {{ item.path }}
            </li>
        </ul>
    </div>
</template>

<script>
import routes from "../../../config/routes-JJ";
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

<style scoped lang="less">
ul,
li {
    color: #ffffff;
    cursor: pointer;
}
</style>
