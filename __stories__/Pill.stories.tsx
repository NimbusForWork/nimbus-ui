import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'

import { Pill } from '../src'
import { optsColors } from './utils'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)

stories.add('Pill', () => {
  const str = text('Text', 'Welcome to Nimbus For Work')

  const color: any = select('Colors', optsColors, 'primary700')

  return <Pill text="Actions" />
})
