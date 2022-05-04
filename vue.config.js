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
};
