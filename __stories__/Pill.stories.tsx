import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import styled from 'styled-components/native'

import { Pill } from '../src'
import { optsColors } from './utils'

export default { title: 'Pill', component: Pill, decorators: [withKnobs] }

const PillWrap = styled.View`
  margin-bottom: 15px;
`

export const Default = () => {
  const str = text('Text', 'Welcome to Nimbus For Work')
  const color: any = select('Colors', optsColors, 'primary700')

  return <Pill text={str} color={color} />
}

export const withAllPill = () => {
  return (
    <>
      <PillWrap>
        <Pill text="pill-primay" color="primary700" />
      </PillWrap>
      <Pill text="pill-primary-outline" color="primary700" variant="outlined" />
    </>
  )
}
