const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(createProxyMiddleware('/languages', {
        target: 'https://test-admin-api.gozem.co/hiring/api/v1/',
        changeOrigin: true,
       
    }));
    app.use(createProxyMiddleware('/testimonials', {
        target: 'https://test-admin-api.gozem.co/hiring/api/v1/',
        changeOrigin: true,
       
    }));
}