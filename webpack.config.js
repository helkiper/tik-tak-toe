var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: "build/"
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery'
    //     })
    // ]
};