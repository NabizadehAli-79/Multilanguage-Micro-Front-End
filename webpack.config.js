const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => {

  const isDevelopment = argv.mode == "development";

  const domainHandler = (appname, port, domain) => {
    const path = isDevelopment
      ?
        `${appname}@http://localhost:${port}/remoteEntry.js`
      :
        domain;

    return path;
  }


  return {
    output: {
      publicPath: isDevelopment ? "http://localhost:3007/" : "",
    },
  
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
  
    devServer: {
      port: 3007,
      historyApiFallback: true,
    },
  
    module: {
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
    },
  
    plugins: [
      new ModuleFederationPlugin({
        name: "AppHolder",
        filename: "remoteEntry.js",
        remotes: {
          NavigateSection: domainHandler("NavigateSection", "3004", ""),
          TypesOfAi: domainHandler("TypesOfAI", "3002", ""), 
          header: domainHandler("Header", "3000", ""), 
          Slider: domainHandler("Slider", "3003", ""), 
          footer: domainHandler("Footer", "3012", ""), 
          BigBg: domainHandler("BigBg", "3005", ""), 
          AI: domainHandler("Ai", "3006", ""), 
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
} 


