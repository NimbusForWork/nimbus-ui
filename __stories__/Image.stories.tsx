import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs'

import { Image } from '../src'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)

stories.add('Image', () => {
  const uri = text(
    'Source',
    'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'
  )
  const width = number('Width', 100)
  const height = number('Height', 100)
  const rounded = boolean('Rounded', false)
  const borderRadius = number('Border Radius', 5)
  const margin = number('Margin', 0)
  const marginTop = number('Margin Top', 0)
  const marginBottom = number('Margin Bottom', 0)
  const marginLeft = number('Margin Left', 0)
  const marginRight = number('Margin Right', 0)

  return (
    <Image
      src={{ uri }}
      width={width}
      height={height}
      rounded={rounded}
      borderRadius={borderRadius}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  )
})
