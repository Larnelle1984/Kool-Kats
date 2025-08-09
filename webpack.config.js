const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // 'production' for production builds
  entry: './src/index.tsx', // Your main entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Needed for React Router if you use it later
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Rule for TypeScript and TSX files
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: false, // Ensure ts-loader emits output
          },
        },
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: [
          'style-loader',      // Injects CSS into the DOM
          'css-loader',        // Interprets @import and url()
          'postcss-loader',    // Processes CSS with PostCSS and Tailwind
        ],
      },
      {
        test: /\.(js|jsx)$/, // Rule for JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4|webm)$/, // Rule for images and videos
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the 'dist' folder before each build
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'), // Serve static files from 'public'
    compress: true,
    port: 3000,
    open: true, // Automatically open the browser
    hot: true,  // Enable Hot Module Replacement
    historyApiFallback: true, // For client-side routing (React Router)
  },
};
