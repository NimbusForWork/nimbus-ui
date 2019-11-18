module.exports = ({ config, mode }) => {
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
