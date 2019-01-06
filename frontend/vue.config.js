module.exports = {
    baseUrl: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000', // 需要请求的地址
                changeOrigin: true, // 是否跨域
            }
        }
    }
}