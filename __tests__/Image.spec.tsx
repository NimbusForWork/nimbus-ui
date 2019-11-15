import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { Image } from '../src'
import theme from '../src/theme'

test('Image should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <Image src={{ uri: '' }} width={10} height={10} />
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
