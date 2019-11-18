import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { Button } from '../src'
import theme from '../src/theme'

test(' Button should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <Button title="Click Me" />
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
