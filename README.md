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
const path = require('path')

const withTM = require('next-transpile-modules')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')

const nextConf = {
  env: {
    API_PATH: process.env.API_PATH,
    API_KEY: process.env.API_KEY
  },
  transpileModules: ['react-native', 'styled-components', 'styled-components/native', '@nimbusforwork/nimbus-ui'],
  webpack: config => {
    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: path.resolve(__dirname, 'node_modules/react-native-vector-icons')
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

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
  },
  cssModules: true
}

module.exports = withTM(withFonts(withCSS(nextConf)))

```

Default fontFamily in nimbus-ui theme

```
theme.fontFamily = 'body'
```

fonts type

```
body_base: Inter-Regular
body_bold: Inter-Bold
body_medium: Inter-Medium
```

Custom fonts

```
@font-face {
  font-family: 'body_base';
  src: url('./fonts/Inter-Regular.ttf');
}
@font-face {
  font-family: 'body_bold';
  src: url('./fonts/Inter-Bold.ttf');
}
@font-face {
  font-family: 'body_medium';
  src: url('./fonts/Inter-Medium.ttf');
}
```
