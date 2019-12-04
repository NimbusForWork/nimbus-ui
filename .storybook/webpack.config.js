const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  })

  config.module.rules.push({
    test: /\.stories\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        query: {
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})]
        }
      }
    ]
  })

  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre'
  })

  config.module.rules.push({
    test: /\.(js|jsx)$/,
    include: path.resolve(__dirname, '../', 'node_modules/react-native-vector-icons'),
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        {
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      ]
    }
  })

  config.module.rules.push({
    test: /\.(ttf)$/,
    loader: 'url-loader',
    include: path.resolve(__dirname, '../', 'node_modules/react-native-vector-icons')
  })

  config.resolve.extensions.push('.web.ts', '.web.tsx', '.ts', '.tsx', '.web.js', '.web.jsx', '.js', '.jsx')
  config.resolve.alias = {
    'react-native$': require.resolve('react-native-web')
  }

  return config
}
