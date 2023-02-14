import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // важен порядок!
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
    }
    
    // Если не используем TS - нужен Babel
    const typescriptLoader = {
        test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
    }
    return [
        typescriptLoader,
        cssLoader
    ];
}