import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Radio } from '../src/index'
import { updateKnob } from '../.storybook/helper'

export default { title: 'Radio', component: Radio, decorators: [withKnobs] }

export const Default = () => {
  let status = boolean('Status', false)

  return (
    <>
      <Radio
        status={status ? 'checked' : 'unchecked'}
        onPress={() => updateKnob('Status', !status)}
        margin={{ bottom: 'xl' }}
      />

      <Radio status="checked" onPress={() => alert('CheckBox Clicked')} margin={{ right: 'xl' }} />
    </>
  )
}
