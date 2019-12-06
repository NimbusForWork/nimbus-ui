import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { CheckBox } from '../src'
import theme from '../src/theme'

test('CheckBox should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <CheckBox status="checked" onPress={() => console.info('CheckBox Clicked')} />
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
