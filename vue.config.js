const path = require("path");
module.exports = {
    publicPath: "",
    //注入LESS全局变量
    chainWebpack: config => {
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        types.forEach(type =>
            addStyleResource(config.module.rule("less").oneOf(type))
        );
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
};
function addStyleResource(rule) {
    rule.use("style-resource")
        .loader("style-resources-loader")
        .options({
            patterns: [path.resolve(__dirname, "src/style/variables.less")]
        });
}
