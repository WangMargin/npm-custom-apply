module.exports = {
  publicPath: '/',
  pages: {
    app: {
      // page 的入口
      entry: 'src/main.js',
      // entry: isTs ? 'src/main.ts' : 'src/main.js',
      filename: 'index.html',
    },
  },
  devServer: {
    open: false, //是否自动弹出浏览器页面
    host: "localhost",
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://suojing.wangyc.top:3210/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      // '/api': {
      //   target: 'http://suojing.wangyc.top:3210/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // },
    },
  },
};
