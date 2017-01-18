/**
 * Created by vincebloise on 1/17/17.
 */
const path = require('path');

module.exports = {
    entry: "./build/hello_server",
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    watch: true,
    devServer: {
        contentBase: '.'
    }
};