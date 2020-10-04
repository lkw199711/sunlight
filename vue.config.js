module.exports = {
    lintOnSave: false,
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
    }
};
