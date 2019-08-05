<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less">
html,
body {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100vw;
    height: 100vh;
}
#app {
    width: 100%;
    height: 100%;
    background: url("../src/assets/bg@2x.png");
}
</style>
