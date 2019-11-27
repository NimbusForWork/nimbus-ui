import React from 'react'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'

import { Image } from '../src'

export default { title: 'Image', component: Image, decorators: [withKnobs] }

export const Default = () => {
  const uri = text(
    'Source',
    'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'
  )

  const width = number('Width', 100)
  const height = number('Height', 100)

  return <Image src={{ uri }} width={width} height={height} />
}

export const withRounded = () => {
  const uri = text(
    'Source',
    'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'
  )

  const width = number('Width', 100)
  const height = number('Height', 100)

  const optsRounded = {
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    '2XL': '2xl',
    Full: 'full'
  }
  const rounded: any = select('Sizes', optsRounded, '2xl')

  return <Image src={{ uri }} width={width} height={height} rounded={rounded} />
}

export const withRoundedFull = () => {
  const uri = text(
    'Source',
    'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'
  )

  const width = number('Width', 100)
  const height = number('Height', 100)

  return <Image src={{ uri }} width={width} height={height} rounded="full" />
}

export const withMargin = () => {
  const uri = text(
    'Source',
    'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'
  )

  const width = number('Width', 100)
  const height = number('Height', 100)

  const optsMargin = {
    None: 'none',
    SM: 'sm',
    Base: 'base',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    '2XL': '2xl'
  }
  const margin: any = select('Margin', optsMargin, '2xl')

  return <Image src={{ uri }} width={width} height={height} margin={margin} />
}
