module.exports = {
  devServer: {
    port: 8502,
    proxy: {
      '/api': {
        target: 'https://echarts-www.cdn.bcebos.com/examples/data/asset/geo',//跨域要访问的地址及端口
        changeOrigin: true,
        secure: false,
        pathRewrite:{
          '^/api': ''
        }
      }
    }
  }
}