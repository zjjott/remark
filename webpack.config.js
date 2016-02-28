module.exports = {
    entry: "./src/remark.js",
    output: {
        path: __dirname,
        filename: "remark.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
        ]
    }
};