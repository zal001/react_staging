const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:4999',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}