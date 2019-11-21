import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components/native'

import { Button, theme } from '../src'

const stories = storiesOf('Components', module)

stories.addDecorator(withKnobs)

stories.add('Button', () => {
  const title = text('Title', 'Click Me')

  const optsMargin = {
    None: 'none',
    SM: 'sm',
    Base: 'base',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    '2XL': '2xl'
  }
  const margin: any = select('Margin', optsMargin, 'base')

  const optsColors = {
    Primary: 'primary',
    Neutral: 'neutral',
    Danger: 'danger'
  }
  const color: any = select('Color', optsColors, 'primary')

  const optsVariant = { Flat: 'flat', Contained: 'contained', Outline: 'outlined' }
  const variant: any = select('Colors', optsVariant, 'contained')

  return (
    <ThemeProvider theme={theme}>
      <Button title={title} variant={variant} color={color} margin={margin} />
    </ThemeProvider>
  )
})
