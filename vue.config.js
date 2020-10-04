module.exports = {
    lintOnSave: false,
    // 开发环境代理
    devServer: {
        proxy: {//配置代理
            '/cms': {
                target: 'http://localhost',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/cms': ''
                }
            }
        }
    },
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        autoprefixer: {
            // 筛选浏览器
            browsers: ['Android >= 4.0', 'iOS >= 8'],
        },
        'postcss-pxtorem': {
            // 根元素,1rem的大小
            rootValue: 32,
            // 哪些需要进行px转rem
            propList: ['*'],
            // 排除哪些开头的如 .weui-button 等等
            selectorBlackList: [],
            // 最小转换，如低于 4px的不会进行转成rem
            minPixelValue: 4,
            // re单位的小数位数上限
            unitPrecision: 10,
        }
    }
};
