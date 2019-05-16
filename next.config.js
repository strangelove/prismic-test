const withTypescript = require("@zeit/next-typescript");
const webpack = require("webpack");

const plugins = withTypescript({
  webpack(config) {
    config.plugins.push(
      new webpack.IgnorePlugin(/^encoding$/, /node-fetch/),
    );
    return config;
  },
});

module.exports = {
  target: "serverless",
  ...plugins,
};
