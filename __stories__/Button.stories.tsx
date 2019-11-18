import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components/native'

import { Button, theme } from '../src'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)

stories.add('Button', () => {
  const title = text('Title', 'Click Me')
  const margin = number('Margin', 0)
  const marginTop = number('Margin Top', 0)
  const marginBottom = number('Margin Bottom', 0)
  const marginLeft = number('Margin Left', 0)
  const marginRight = number('Margin Right', 0)

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
      <Button
        title={title}
        variant={variant}
        color={color}
        margin={margin}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
      />
    </ThemeProvider>
  )
})
