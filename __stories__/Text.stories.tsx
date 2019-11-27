import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Text } from '../src'
import { optsColors } from './utils'

export default { title: 'Text', component: Text, decorators: [withKnobs] }

export const Default = () => {
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

  const fontWeight = boolean('Font Weight', false)

  return (
    <Text text={str} margin={{ top: 'lg' }} color={color} size={size} fontWeight={fontWeight ? 'bold' : undefined} />
  )
}
