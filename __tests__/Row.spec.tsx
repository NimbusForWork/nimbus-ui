import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { Row, Image } from '../src'
import theme from '../src/theme'

test('ListItem should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <Row
        title="Item 1"
        avatar={() => <Image src={{ uri: '' }} width={18} height={18} rounded="full" />}
        bottomDivider
      />
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
