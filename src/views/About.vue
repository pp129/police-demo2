<template>
    <div class="circle">
        <div class="center">
            <div
                v-for="(item, index) in ball"
                :key="item.name"
                class="ball"
                :class="'ball' + (index + 1)"
                @mouseenter="stop"
                @mouseleave="run"
                ref="ball"
                @click="goto(item.link)"
            ></div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
export default {
    name: "About",
    data() {
        return {
            ball: [
                {
                    name: "jiaojing",
                    link: "/JJIndex"
                },
                {
                    name: "bianjian",
                    link: "/BJIndex"
                },
                {
                    name: "gongan",
                    link: "/GAIndex"
                }
            ]
        };
    },
    methods: {
        stop() {
            const ball = this.$refs.ball;
            _.each(ball, e => {
                e.style.WebkitAnimationPlayState = "paused";
            });
        },
        run() {
            const ball = this.$refs.ball;
            _.each(ball, e => {
                e.style.WebkitAnimationPlayState = "running";
            });
        },
        goto(link) {
            this.$router.push(link);
        }
    }
};
</script>

<style scoped lang="less">
@import "../style/ball-animation";
</style>
