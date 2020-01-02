import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Calendar, Button } from '../src'
import { updateKnob } from '../.storybook/helper'

export default { title: 'Calendar', component: Calendar, decorators: [withKnobs] }

export const Default = () => {
  const visible = boolean('Visible', false)

  return (
    <>
      <Button title="Show Calendar" onPress={() => updateKnob('Visible', true)} />

      <Calendar
        value={new Date()}
        mode="date-time"
        title="Check-in -- Checkout"
        visible={visible}
        minDate={new Date('2020-1-1')}
        incrementMinutes={10}
        onClose={() => updateKnob('Visible', false)}
        onPress={item => alert(item)}
        onSelect={value => alert(value)}
        onCancel={() => updateKnob('Visible', false)}
      />
    </>
  )
}
