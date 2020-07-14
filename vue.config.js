module.exports = {
  configureWebpack: { //对webpack进行配置
    resolve: {
      alias: {
        'assets': '@/assets', // @:指代src目录
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

