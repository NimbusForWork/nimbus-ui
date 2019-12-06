import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { TextInput } from '../src'
import theme from '../src/theme'

test('TextInput should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <TextInput value="" label="Test Passed" onChangeText={() => {}} />
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
