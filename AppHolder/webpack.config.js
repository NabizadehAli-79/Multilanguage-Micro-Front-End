const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
    output: {
      publicPath: "http://localhost:3010/",
    },
  
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
  
    devServer: {
      port: 3007,
      historyApiFallback: true,
    },
  
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.(png|jpe?g|gif|avif|eot|woff2)$/i,
          use: [
            {
              loader: "file-loader"
            }
          ]
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
  
    plugins: [
      new ModuleFederationPlugin({
        name: "AppHolder",
        filename: "remoteEntry.js",
        remotes: {
          header: "Header@http://localhost:3000/remoteEntry.js", 
          NavigateSection: "NavigateSection@http://localhost:3004/remoteEntry.js", 
          TypesOfAi: "TypesOfAI@http://localhost:3002/remoteEntry.js", 
          Slider: "Slider@http://localhost:3003/remoteEntry.js", 
          header: "Header@http://localhost:3000/remoteEntry.js", 
          footer: "Footer@http://localhost:3012/remoteEntry.js", 
          BigBg: "BigBg@http://localhost:3005/remoteEntry.js", 
          AI: "Ai@http://localhost:3006/remoteEntry.js", 
        },
        exposes: {},
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  };


