import React, { useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { FormBuilder, Text } from '../src'

export default { title: 'FormBuilder', component: FormBuilder, decorators: [withKnobs] }

const response = {
  id: 1,
  name: 'Service Report',
  description: 'Service Report Description',
  json_schema:
    '{"title":"Service Report","description":"Fill out a report of the work you completed.","type":"object","properties":{"details":{"type":"string","title":"Details","description":"This prop works only for TextInput"},"service_type":{"type":"array","title":"Service Type","items":{"type":"string","enum":["Routine Servicing","One-off Servicing","Site Survey"]},"uniqueItems":"true"}}}',
  ui_schema:
    '{"details":{"ui:widget":"textinput","ui:margin":{"bottom":"2xl"}},"service_type":{"ui:widget":"checkboxes"}}'
}

export const Default = () => {
  const [valuesForm, setValuesFrom] = useState('{}')

  return (
    <>
      <Text text="Respone" margin={{ bottom: '2xl' }} />
      <Text text={JSON.stringify(response)} margin={{ bottom: '2xl' }} />

      <Text text="Result" margin={{ bottom: '2xl' }} />
      <Text text={valuesForm} margin={{ bottom: '2xl' }} />

      <FormBuilder
        schema={response}
        onSubmit={(values, _actions) => {
          console.log(values)
          setValuesFrom(JSON.stringify(values))
        }}
        // submitButton={args => (
        //   <Footer>
        //     <Button
        //       style={{ flex: 1 }}
        //       title="Submit and Check Out"
        //       variant="contained"
        //       margin={{ right: 'lg' }}
        //       onPress={() => args.handleSubmit()}
        //     />
        //   </Footer>
        // )}
      />
    </>
  )
}
