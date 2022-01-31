const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
var path = require('path');
var webpack = require('webpack');

var manifestOptions = {
    name: 'Solve My Wordle',
    short_name: 'SolveMyWordle',
    description: 'Easy to use wordle solver. Input your known letters, excluded letters and BAM, get a recommendation.',
    background_color: '#ffffff',
    crossorigin: 'anonymous',
    // icons: [
    //     {
    //         src: '/android-icon-36x36.png',
    //         sizes: '36x36',
    //         type: 'image/png',
    //         density: '0.75',
    //     },
    //     {
    //         src: '/android-icon-48x48.png',
    //         sizes: '48x48',
    //         type: 'image/png',
    //         density: '1.0',
    //     },
    //     {
    //         src: '/android-icon-72x72.png',
    //         sizes: '72x72',
    //         type: 'image/png',
    //         density: '1.5',
    //     },
    //     {
    //         src: '/android-icon-96x96.png',
    //         sizes: '96x96',
    //         type: 'image/png',
    //         density: '2.0',
    //     },
    //     {
    //         src: '/android-icon-144x144.png',
    //         sizes: '144x144',
    //         type: 'image/png',
    //         density: '3.0',
    //     },
    //     {
    //         src: '/android-icon-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //         density: '4.0',
    //     },
    // ],
};

module.exports = env => {
    const outputPath = path.join(__dirname, '/dist');
    return {
        entry: './src/index.js',
        devtool: 'inline-source-map',
        output: {
            path: outputPath,
            publicPath: '/',
        },
        devServer: {
            historyApiFallback: true,
            contentBase: path.join(__dirname, '../'),
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: '/node_modules/',
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['@babel/plugin-transform-runtime'],
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                    loader: 'file-loader?name=[name].[ext]', // Do not remove, retains original name to support favicon
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/',
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve('./public/index.html'),
                filename: './index.html',
            }),
            new WebpackManifestPlugin(manifestOptions),
            new FilterWarningsPlugin({
                exclude: /node_modules/,
            }),
            new ServiceWorkerWebpackPlugin({
                entry: path.join(__dirname, 'src/serviceWorker.js'),
            }),
        ],
    };
};
