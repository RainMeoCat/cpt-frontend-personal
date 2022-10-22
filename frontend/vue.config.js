module.exports = {
  publicPath: '/cpt-pet-cats/',
  configureWebpack: {
    plugins: [],
    devServer: {
      historyApiFallback: {
        index: '/cpt-pet-cats/'
      }
    }
  },
  transpileDependencies: true
}
