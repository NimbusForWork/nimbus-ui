import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import styled, { ThemeProvider } from 'styled-components/native'

import theme from '../src/theme'

const Root = styled.View`
  padding: 15px;
`

const req = require.context('../__stories__', true, /\.stories\.tsx$/)

const loadStories = () => {
  req.keys().forEach(req)
}

const withGlobalStyles = storyFn => {
  return (
    <ThemeProvider theme={theme}>
      <Root>{storyFn()}</Root>
    </ThemeProvider>
  )
}

addDecorator(withGlobalStyles)
addDecorator(withInfo)

configure(loadStories, module)
