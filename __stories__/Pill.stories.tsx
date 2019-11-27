import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import { Pill } from '../src'
import { optsColors } from './utils'

export default { title: 'Pill', component: Pill, decorators: [withKnobs] }

export const Default = () => {
  const str = text('Text', 'Welcome to Nimbus For Work')
  const color: any = select('Colors', optsColors, 'primary700')

  return <Pill text={str} color={color} />
}
