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
    Small: 'small',
    Normal: 'normal',
    Heading1: 'heading1',
    Heading2: 'heading2',
    Heading3: 'heading3'
  }
  const size: any = select('Sizes', optsSize, 'normal')

  //   const optsFontWeight = {
  //     Bold: 'bold'
  //   }
  //   const fontWeight: any = select('Font Weight', optsFontWeight, 'bold')
  const fontWeight = boolean('Font Weight', false)

  return <Text text={str} color={color} size={size} fontWeight={fontWeight ? 'bold' : undefined} />
})
