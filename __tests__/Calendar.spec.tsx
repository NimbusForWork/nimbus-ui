import React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import 'jest-styled-components/native'

import { Calendar } from '../src'
import theme from '../src/theme'

test('Calendar should render', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <Calendar
        value={new Date()}
        title="Check-in -- Checkout"
        visible={true}
        onClose={() => alert('onClose Clicked')}
        onPress={item => alert(item)}
      />
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
