const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist'),
  assets: join(__dirname, '..', 'assets')
}

module.exports = {
  paths,

  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.dist,
    filename: '[name]-[chunkhash].js'
  },

  htmlPluginConfig: {
    title: 'Spotfy platform',
    template: join(paths.root, 'public', 'index.html')
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: [{
      loader: 'babel-loader'
    }]
  },

  cssLoader: {
    exclude: '/node_modules/',
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ]
  },

  stylusLoader: {
    test: /\.styl$/,
    exclude: paths.modules,
    include: paths.src,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        query: {
          modules: true,
          sourceMap: true,
          localIdentName: '[name]--[local]--[hash:base64:8]'
        }
      },
      {
        loader: 'stylus-loader',
        options: {
          preferPathResolver: 'webpack'
        }
      }
    ]
  },

  svgLoader: {
    test: /\.svg$/,
    use: [
      {
        loader: 'babel-loader'
      },
      {
        loader: 'react-svg-loader',
        options: {
          jsx: true
        }
      }
    ]
  },

  resolve: {
    alias: {
      components: join(paths.src, 'components'),
      storage: join(paths.src, 'storage'),
      api: join(paths.src, 'api'),
      actions: join(paths.src, 'actions'),
      layout: join(paths.src, 'layout'),
      assets: paths.assets
    }
  }
}
