module.exports = {
    entry: './src/App.ts',
    mode: 'development',
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            loader: "ts-loader",
        },
        ],
    },
};
