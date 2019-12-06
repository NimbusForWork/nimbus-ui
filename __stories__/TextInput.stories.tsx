import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { TextInput } from '../src'

export default { title: 'TextInput', component: TextInput, decorators: [withKnobs] }

export const Default = () => {
  const label = text('Label', 'Your Label')
  const desc = text('Description', 'Some description')
  const value = text('Value', 'Some value changed')

  return <TextInput value={value} label={label} desc={desc} onChangeText={t => console.log(t)} />
}

export const withEditable = () => {
  const label = text('Label', 'Your Label')
  const desc = text('Description', 'Some description')
  const value = text('Value', 'Some value changed')

  return <TextInput value={value} label={label} desc={desc} onChangeText={t => console.log(t)} editable />
}
