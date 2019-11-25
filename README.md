# Nimbus Kiosk

UI components for React Native and React Native Web, built with Typescript

# Expo App

Import theme and custom Font

```sh
import * as Font from 'expo-font'
import { ThemeProvider } from 'styled-components/native'
import { theme, FontFamily } from '@nimbusforwork/nimbus-ui'
...

const initFont = async () => {
     await Font.loadAsync({
        body_bold: FontFamily.FontInterBold,
        body_base: FontFamily.FontInterRegular,
        body_medium: FontFamily.FontInterMedium
    })
}

render() {
    return (
        <ThemeProvider theme={theme}>
            {!loading && <AppContainer />}
        </ThemeProvider>
    )
}
...
```

# Web App with NextJS

.babelrc

```sh
{
  "presets": ["next/babel"],
  "plugins": [["react-native-web", { "commonjs": true }]]
}
```

next.config.js

```sh
const withTM = require('next-transpile-modules')

module.exports = withTM({
  transpileModules: [
    'react-native',
    'styled-components',
    'styled-components/native'
  ],
  webpack: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [
          '.web.ts',
          '.web.tsx',
          '.ts',
          '.tsx',
          '.web.js',
          '.web.jsx',
          '.js',
          '.jsx',
          ...config.resolve.extensions
        ],
        alias: {
          ...config.resolve.alias,
          'react-native$': 'react-native-web'
        }
      }
    }
  }
})

```
