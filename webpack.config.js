import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

export default {
  entry: {
   index: [
      './index.less',
      './index.js',
    ],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.less$/,
        use: [MiniCssExtractPlugin.loader, require.resolve("css-loader"), require.resolve("less-loader")],
      },
    ],
  },
  optimization: {
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin({filename: `css/[name].css`})],
};