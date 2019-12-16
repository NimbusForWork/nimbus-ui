import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import styled from 'styled-components/native'

import { CheckBox, Text } from '../src/index'
import { updateKnob } from '../.storybook/helper'

const Box = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 30px;
`

export default { title: 'CheckBox', component: CheckBox, decorators: [withKnobs] }

export const Default = () => {
  const status: any = text('Status', 'unchecked')

  return (
    <Box>
      <CheckBox
        status={status}
        onPress={() => {
          if (status === 'unchecked') updateKnob('Status', 'checked')
          else if (status === 'checked') updateKnob('Status', 'indeterminate')
          else updateKnob('Status', 'unchecked')
        }}
        margin={{ right: 'xl' }}
      />

      <Text text="Click me" />
    </Box>
  )
}

export const withAllStatus = () => {
  return (
    <Box>
      <CheckBox status="unchecked" onPress={() => alert('CheckBox Clicked')} margin={{ right: 'xl' }} />
      <CheckBox status="checked" onPress={() => alert('CheckBox Clicked')} margin={{ right: 'xl' }} />
      <CheckBox status="indeterminate" onPress={() => alert('CheckBox Clicked')} />

      <Text text="Primary" margin={{ left: 'xl' }} />
    </Box>
  )
}

export const withColor = () => {
  return (
    <>
      <Box>
        <CheckBox status="unchecked" onPress={() => alert('CheckBox Clicked')} margin={{ right: 'md' }} />
        <CheckBox status="checked" onPress={() => alert('CheckBox Clicked')} margin={{ right: 'md' }} />
        <CheckBox status="indeterminate" onPress={() => alert('CheckBox Clicked')} />

        <Text text="Primary" margin={{ left: 'xl' }} />
      </Box>

      <Box>
        <CheckBox
          status="unchecked"
          color="neutral"
          onPress={() => alert('CheckBox Clicked')}
          margin={{ right: 'md' }}
        />
        <CheckBox status="checked" color="neutral" onPress={() => alert('CheckBox Clicked')} margin={{ right: 'md' }} />
        <CheckBox status="indeterminate" color="neutral" onPress={() => alert('CheckBox Clicked')} />

        <Text text="Neutral" margin={{ left: 'xl' }} />
      </Box>

      <Box>
        <CheckBox
          status="unchecked"
          color="danger"
          onPress={() => alert('CheckBox Clicked')}
          margin={{ right: 'md' }}
        />
        <CheckBox status="checked" color="danger" onPress={() => alert('CheckBox Clicked')} margin={{ right: 'md' }} />
        <CheckBox status="indeterminate" color="danger" onPress={() => alert('CheckBox Clicked')} />

        <Text text="Danger" color="danger700" margin={{ left: 'xl' }} />
      </Box>

      <Box>
        <CheckBox
          status="unchecked"
          color="success"
          onPress={() => alert('CheckBox Clicked')}
          margin={{ right: 'md' }}
        />
        <CheckBox status="checked" color="success" onPress={() => alert('CheckBox Clicked')} margin={{ right: 'md' }} />
        <CheckBox status="indeterminate" color="success" onPress={() => alert('CheckBox Clicked')} />

        <Text text="Success" color="success700" margin={{ left: 'xl' }} />
      </Box>
    </>
  )
}
