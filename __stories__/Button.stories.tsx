import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components/native'

import { Button, theme } from '../src'
import { optsColors } from './utils'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)

stories.add('Button', () => {
  const title = text('Title', 'Click Me')

  const color: any = select('Color', optsColors, 'primary500')

  const variantOpt = { Flat: 'flat', Contained: 'contained', Outline: 'outlined' }

  const variant: any = select('Colors', variantOpt, 'contained')

  return (
    <ThemeProvider theme={theme}>
      <Button title={title} variant={variant} color={color} />
    </ThemeProvider>
  )
})
