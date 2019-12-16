import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Button } from '../src'

export default { title: 'Button', component: Button, decorators: [withKnobs] }

export const Default = () => {
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
  const variant: any = select('Variant', optsVariant, 'contained')

  const clear = boolean('Clear Button', false)
  const loading = boolean('Loading', false)

  return (
    <Button
      title={title}
      variant={variant}
      clear={clear}
      color={color}
      margin={margin}
      loading={loading}
      onPress={() => alert('Button clicked')}
    />
  )
}

export const withAllButton = () => {
  return (
    <>
      <Button
        title="Click Me"
        variant="contained"
        color="primary"
        onPress={() => alert('Button clicked')}
        margin={{ bottom: '2xl' }}
      />
      <Button
        title="Click Me"
        variant="outlined"
        color="primary"
        onPress={() => alert('Button clicked')}
        margin={{ bottom: '2xl' }}
      />

      <Button
        title="Click Me"
        variant="contained"
        color="primary"
        onPress={() => alert('Button clicked')}
        margin={{ bottom: '2xl' }}
        loading
      />

      <Button
        title="Click Me"
        variant="contained"
        color="neutral"
        onPress={() => alert('Button clicked')}
        margin={{ bottom: '2xl' }}
      />

      <Button
        title="Click Me"
        variant="outlined"
        color="neutral"
        onPress={() => alert('Button clicked')}
        margin={{ bottom: '2xl' }}
      />
    </>
  )
}
