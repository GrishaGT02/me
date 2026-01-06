module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Отключаем минификацию CSS
      const minimizerIndex = webpackConfig.optimization.minimizer.findIndex(
        (plugin) => plugin.constructor.name === 'CssMinimizerPlugin'
      );
      if (minimizerIndex !== -1) {
        webpackConfig.optimization.minimizer.splice(minimizerIndex, 1);
      }
      return webpackConfig;
    },
  },
};

