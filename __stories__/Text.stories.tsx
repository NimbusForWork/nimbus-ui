import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'

import { Text } from '../src'
import { optsColors } from './utils'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)

stories.add('Text', () => {
  const str = text('Text', 'Welcome to Nimbus For Work')

  const color: any = select('Colors', optsColors, 'primary500')

  const optsSize = {
    XS: 'xs',
    SM: 'sm',
    Base: 'base',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    '2XL': '2xl',
    '3XL': '3xl',
    '4XL': '4xl'
  }
  const size: any = select('Sizes', optsSize, 'Base')

  //   const optsFontWeight = {
  //     Bold: 'bold'
  //   }
  //   const fontWeight: any = select('Font Weight', optsFontWeight, 'bold')
  const fontWeight = boolean('Font Weight', false)

  return (
    <Text text={str} margin={{ top: 'lg' }} color={color} size={size} fontWeight={fontWeight ? 'bold' : undefined} />
  )
})
