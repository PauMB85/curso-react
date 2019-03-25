const path = require('path');
const entryPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname,'dist');

module.exports = {
    entry: path.join(entryPath, 'app.js'),
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx']
    }
}