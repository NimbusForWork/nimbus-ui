import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Calendar } from '../src'

export default { title: 'Calendar', component: Calendar, decorators: [withKnobs] }

export const Default = () => {
  const visible = boolean('Visible', false)

  return (
    <Calendar
      value={new Date()}
      title="Check-in -- Checkout"
      visible={visible}
      onClose={() => alert('onClose Clicked')}
      onPress={item => alert(item)}
      onSelect={value => alert(value)}
      onCancel={() => alert('onCancel Clicked')}
    />
  )
}
