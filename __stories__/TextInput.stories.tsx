import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { TextInput } from '../src'

export default { title: 'TextInput', component: TextInput, decorators: [withKnobs] }

export const Default = () => {
  const label = text('Label', 'TextInput')
  const desc = text('Description', 'Info component')
  const value = text('Value', 'Some value changed')

  return <TextInput value={value} cssType="bootstrap" label={label} desc={desc} onChangeText={t => console.log(t)} />
}

export const withAllTextInput = () => {
  return (
    <>
      <TextInput
        value=""
        label="TextInput"
        placeholder="Some placeholder text"
        onChangeText={t => console.log(t)}
        margin={{ bottom: '2xl' }}
      />

      <TextInput
        value=""
        label="TextInput"
        placeholder="Some placeholder text"
        desc="Info component"
        onChangeText={t => console.log(t)}
        margin={{ top: '2xl' }}
      />
    </>
  )
}

export const withEditable = () => {
  const label = text('Label', 'TextInput')
  const desc = text('Description', 'Info component.')
  const value = text('Value', 'Some value changed')

  return <TextInput value={value} label={label} desc={desc} onChangeText={t => console.log(t)} editable />
}
