import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'

import { Text } from '../src'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)

stories.add('Text', () => {
  const str = text('Text', 'Your Text')

  const optsColors = {
    'Primary 100': 'primary100',
    'Primary 200': 'primary200',
    'Primary 300': 'primary300',
    'Primary 400': 'primary400',
    'Primary 500': 'primary500',
    'Primary 600': 'primary600',
    'Primary 700': 'primary700',

    'Neutral 100': 'neutral100',
    'Neutral 200': 'neutral200',
    'Neutral 300': 'neutral300',
    'Neutral 400': 'neutral400',
    'Neutral 500': 'neutral500',
    'Neutral 600': 'neutral600',
    'Neutral 700': 'neutral700',

    'Danger 100': 'danger100',
    'Danger 200': 'danger200',
    'Danger 300': 'danger300',
    'Danger 400': 'danger400',
    'Danger 500': 'danger500',
    'Danger 600': 'danger600',
    'Danger 700': 'danger700'
  }
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
