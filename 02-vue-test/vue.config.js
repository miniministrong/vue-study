const {devServer} = require("./vue.config");
module.exports = {
  pages: {
    index: {
      // 入口
      entry: 'src/main.js'
    }  
  },
  // 关于语法检查
  lintOnSave: false,
  // 开启代理服务器(方式一)
  /*devServer: {
    proxy: 'http://localhost:5000'
  },*/
  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/wenze': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/wenze': ''},
        // 用于支持WebSocket
        // ws: true,
        // 用于控制请求头中的host值
        // changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo': ''},
      }
    }
  }
}