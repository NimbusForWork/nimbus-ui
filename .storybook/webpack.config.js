const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(stories)\.mdx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]]
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
    test: /\.(ts|tsx)$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            semi: true,
            singleQuote: true,
            jsxSingleQuote: false,
            useTabs: false,
            tabWidth: 2,
            trailingComma: 'all',
            printWidth: 80,
            arrowParens: 'always'
          }
        }
      }
    ],
    exclude: [/node_modules/],
    enforce: 'pre'
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),

    options: {
      presets: [['react-app', { flow: false, typescript: true }]]
    }
  })

  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    'react-native$': require.resolve('react-native-web')
  }

  return config
}
