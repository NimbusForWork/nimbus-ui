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

  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    'react-native$': require.resolve('react-native-web')
  }

  return config
}
