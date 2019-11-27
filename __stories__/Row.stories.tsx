import React from 'react'
import { text } from '@storybook/addon-knobs'

import { Row, Image } from '../src'

export default { title: 'Row', component: Row }

export const Default = () => {
  const uri = text(
    'Source',
    'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'
  )

  return (
    <Row title="Item 1" avatar={() => <Image src={{ uri }} width={30} height={30} rounded="full" />} bottomDivider />
  )
}

export const withSubtitle = () => {
  const uri = text(
    'Source',
    'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'
  )

  return (
    <Row
      title="Item 2"
      subtitle="Sub title item 2"
      avatar={() => <Image src={{ uri }} width={30} height={30} rounded="full" />}
    />
  )
}

export const withDivider = () => {
  const uri = text(
    'Source',
    'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'
  )

  return (
    <Row
      title="Item 2"
      subtitle="Sub title item 2"
      avatar={() => <Image src={{ uri }} width={30} height={30} rounded="full" />}
      bottomDivider
    />
  )
}
