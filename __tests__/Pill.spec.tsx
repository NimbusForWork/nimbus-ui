import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { Pill } from '../src'
import theme from '../src/theme'

test('Pill should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <Pill text="Test Passed" />
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
