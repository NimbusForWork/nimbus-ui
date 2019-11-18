import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import { Card, ListItem, Image } from '../src'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)

stories.add('List Item', () => {
  const content = text('Text', 'Welcome to Nimbus For Work')
  const padding = number('Padding', 0)
  const paddingTop = number('Padding Top', 0)
  const paddingBottom = number('Padding Bottom', 0)
  const paddingLeft = number('Padding Left', 0)
  const paddingRight = number('Padding Right', 0)

  const uri = text(
    'Source',
    'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'
  )

  return (
    <Card
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRigt={paddingRight}
    >
      <ListItem title="Item 1" avatar={() => <Image src={{ uri }} width={30} height={30} rounded />} bottomDivider />
      <ListItem title="Item 2" avatar={() => <Image src={{ uri }} width={30} height={30} rounded />} bottomDivider />
    </Card>
  )
})
