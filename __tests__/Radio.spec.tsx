import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { Radio } from '../src'
import theme from '../src/theme'

test('Radio should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <Radio status="checked" onPress={() => console.info('Radio Clicked')} />
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
