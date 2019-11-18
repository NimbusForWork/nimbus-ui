import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { Card } from '../src'
import theme from '../src/theme'

test('Card should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <Card>Content Card</Card>
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
