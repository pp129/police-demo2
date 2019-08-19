<template>
    <div class="main page">
        <div class="title-img"></div>
        <div class="content-text">
            平台通过整合交通行业各业务线视频图像资源，搭建城市交通统一的视频图像管理
            平台，实现视频图像资源共建共享，利用视频检索、视频增强、智能识别、车辆检测，流
            量统计等技术，将视频信息化、信息应用化，为城市交通运行监测、应急事件处置等提供
            视频应用支撑。
        </div>
        <div class="cloud"></div>
        <div class="dots dots-1"></div>
        <div class="icons">
            <i class="icon icon-face"></i>
            <p class="title title-1">智能识别</p>
            <i class="icon icon-video"></i>
            <p class="title title-2">视频增强</p>
        </div>
        <div class="dots dots-2"></div>
        <div class="profiles">
            <div class="item">
                云台控制，图像拼接，图像抓拍
            </div>
            <div class="item">
                车辆识别，人脸识别，智能路线
            </div>
            <div class="item item-3">
                <p>录像回放，录像倒放，多路放像 视频跟随</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: ""
};
</script>

<style scoped type="text/less" lang="less">
.page {
    .title-img {
        position: absolute;
        width: calc(~"244*@{pw}vw");
        height: calc(~"26*@{ph}vh");
        top: 0;
        left: calc(~"38*@{pw}vw");
        background: url("../../../assets/JJ/交通视频管理系统/交通视频管理系统.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .content-text {
        width: calc(~"606*@{pw}vw");
        height: calc(~"84*@{ph}vh");
        position: absolute;
        top: calc(~"39*@{ph}vh");
        left: calc(~"174*@{pw}vw");
        font-size: 3rem;
        font-weight: 400;
        text-indent: 6rem;
        color: rgba(255, 255, 255, 1);
        line-height: calc(~"25*@{ph}vh");
    }
    .cloud {
        width: calc(~"146*@{pw}vw");
        height: calc(~"109*@{ph}vh");
        position: absolute;
        bottom: calc(~"152*@{ph}vh");
        left: calc(~"77*@{pw}vw");
        background: url("../../../assets/JJ/交通视频管理系统/cloud.png")
            no-repeat;
        background-size: 100% 100%;
    }
    .icons {
        width: calc(~"174*@{pw}vw");
        height: calc(~"305*@{ph}vh");
        position: absolute;
        bottom: calc(~"23*@{ph}vh");
        left: calc(~"313*@{pw}vw");
        background: url("../../../assets/JJ/交通视频管理系统/border-tall.png")
            no-repeat;
        background-size: 100% 100%;
        .icon {
            display: block;
            position: absolute;
            &-face {
                width: calc(~"76*@{pw}vw");
                height: calc(~"97*@{ph}vh");
                background: url("../../../assets/JJ/交通视频管理系统/face.png")
                    no-repeat;
                background-size: 100% 100%;
                top: 0;
                left: calc(~"48*@{pw}vw");
            }
            &-video {
                width: calc(~"59*@{pw}vw");
                height: calc(~"71*@{ph}vh");
                background: url("../../../assets/JJ/交通视频管理系统/icon-video.png")
                    no-repeat;
                background-size: 100% 100%;
                top: calc(~"116*@{ph}vh");
                left: calc(~"61*@{pw}vw");
            }
        }
        .title {
            font-size: 3rem;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            position: absolute;
            left: calc(~"60*@{pw}vw");
            &-1 {
                top: calc(~"94*@{ph}vh");
            }
            &-2 {
                top: calc(~"180*@{ph}vh");
            }
            &-3 {
                top: calc(~"269*@{ph}vh");
            }
        }
    }
    .dots {
        width: calc(~"42*@{pw}vw");
        height: calc(~"10*@{ph}vh");
        position: absolute;
        bottom: calc(~"191*@{ph}vh");
        background: url("../../../assets/JJ/交通视频管理系统/dots.png")
            no-repeat;
        background-size: 100% 100%;
        &-1 {
            left: calc(~"246*@{pw}vw");
        }
        &-2 {
            left: calc(~"503*@{pw}vw");
        }
    }
    .profiles {
        width: calc(~"369*@{pw}vw");
        height: calc(~"304*@{ph}vh");
        position: absolute;
        bottom: calc(~"24*@{ph}vh");
        right: calc(~"33*@{pw}vw");
        background: url("../../../assets/JJ/交通视频管理系统/border.png")
            no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .item {
            width: calc(~"346*@{pw}vw");
            background: url("../../../assets/JJ/交通视频管理系统/border-horizontal.png")
                no-repeat;
            background-size: 100% 100%;
            font-size: 3.6rem;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(~"47*@{ph}vh");
            &-3 {
                height: calc(~"66*@{ph}vh");
                p {
                    width: calc(~"260*@{pw}vw");
                    height: calc(~"42*@{ph}vh");
                }
            }
        }
    }
}
</style>
