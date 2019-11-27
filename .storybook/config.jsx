import React from 'react'
import { addDecorator, configure, addParameters } from '@storybook/react'
import styled, { ThemeProvider } from 'styled-components/native'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

import theme from '../src/theme'

const req = require.context('../__stories__', true, /\.stories\.(tsx|mdx)$/)

const Root = styled.View`
  padding: 15px;
`

const GlobalStyle = storyFn => {
  return (
    <ThemeProvider theme={theme}>
      <Root>{storyFn()}</Root>
    </ThemeProvider>
  )
}

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
})

addDecorator(GlobalStyle)

configure(req, module)
