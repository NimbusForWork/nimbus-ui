import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { Tag, Text } from '../src'
import theme from '../src/theme'

test('Tag should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <Tag>
        <Text text="My Tag" />
      </Tag>
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
