import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import { Card, Text } from '../src'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)

stories.add('Card', () => {
  const content = text('Text', 'Welcome to Nimbus For Work')
  const padding = number('Padding', 0)
  const paddingTop = number('Padding Top', 0)
  const paddingBottom = number('Padding Bottom', 0)
  const paddingLeft = number('Padding Left', 0)
  const paddingRight = number('Padding Right', 0)

  return (
    <Card
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRigt={paddingRight}
    >
      <Text text={content} />
    </Card>
  )
})
