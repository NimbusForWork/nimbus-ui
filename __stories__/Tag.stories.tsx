import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'

import { Tag, Text } from '../src'
import { optsColors } from './utils'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)

stories.add('Tag', () => {
  return (
    <Tag>
      <Text text="Nimbus For Work" />
    </Tag>
  )
})
