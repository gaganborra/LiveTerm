module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.json$/,
        type: 'javascript/auto',
        use: [require.resolve('json-loader')]
      });
  
      return config;
    }
  };
  