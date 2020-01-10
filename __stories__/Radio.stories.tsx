import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components/native'

import { Radio } from '../src/index'
import { updateKnob } from '../.storybook/helper'

export default { title: 'Radio', component: Radio, decorators: [withKnobs] }

const Box = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 30px;
`

export const Default = () => {
  let status = boolean('Status', false)

  return (
    <Box>
      <Radio
        status={status ? 'checked' : 'unchecked'}
        onPress={() => updateKnob('Status', !status)}
        margin={{ bottom: 'xl', right: 'xl' }}
      />

      <Radio status="checked" onPress={() => alert('Radio Clicked')} margin={{ right: 'xl' }} />
      <Radio status="checked" color="primary" onPress={() => alert('Radio Clicked')} margin={{ right: 'xl' }} />
    </Box>
  )
}
