const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;


module.exports = (_, argv) => {

  const domainHandler = (port, domain) => {
    const path = isDevelopment
      ?
        `@http://localhost:${port}/remoteEntry.js`
      :
        domain;

    return path;
  }

  return {
    output: {
      publicPath: isDevelopment ? "http://localhost:3002/" : "",
    },
  
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
  
    devServer: {
      port: 3002,
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
        name: "TypesOfAI",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          "./TypesOfAi" : "./src/TypesOfAi"
        },
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

