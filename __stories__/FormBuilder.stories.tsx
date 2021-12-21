import React, { useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { FormBuilder, Text } from '../src'

export default { title: 'FormBuilder', component: FormBuilder, decorators: [withKnobs] }

const response = {
  id: 1,
  name: 'Service Report',
  description: 'Service Report Description',
  // json_schema:
  //   '{"title":"Service Report","description":"Fill out a report of the work you completed.","type":"object","properties":{"details":{"type":"string","title":"Details","description":"This prop works only for TextInput"},"service_type":{"type":"array","title":"Service Type","items":{"type":"string","enum":["Routine Servicing","One-off Servicing","Site Survey"]},"uniqueItems":"true"}}}',
  json_schema: `{
    "type": "object",
    "properties": {
      "rating": {
        "type": "string",
        "title": "How was your job?",
        "translate_key": "rating_subheader_stars",
        "enum": ["0", "1", "2", "3", "4", "5"],
        "default": "5"
      },
      "explain": {
        "type": "string",
        "title": "Any other comments?",
        "translate_key": "rating_subheader_textbox"
      },
      "files": {
        "title": "Add Photo (if any)",
        "type": "array",
        "translate_key": "rating_subheader_camera",
        "items": {
          "type": "string"
        }
      }
    },
    "dependencies": {
      "rating": {
        "oneOf": [
          {
            "properties": {
              "rating": {
                "enum": ["0"]
              },
              "reason": {
                "type": "array",
                "title": "",
                "items": {
                  "type": "string",
                  "enum": []
                },
                "uniqueItems": true
              }
            }
          },
          {
            "properties": {
              "rating": {
                "enum": ["1", "2", "3"]
              },
              "reason": {
                "type": "array",
                "title": "What went wrong",
                "translate_key": "rating_subheader_tags_bad",
                "items": {
                  "type": "string",
                  "translate_key": ["rating_tags_bad_rude_customer", "rating_tags_bad_not_enough_time", "rating_tags_bad_job_scope"],
                  "enum": ["Rude Customer", "Not enough time", "Job Scope"]
                },
                "uniqueItems": true
              }
            }
          },
          {
            "properties": {
              "rating": {
                "enum": ["4", "5"]
              },
              "reason": {
                "type": "array",
                "title": "What went well",
                "translate_key": "rating_subheader_tags_good",
                "items": {
                  "type": "string",
                  "translate_key": ["rating_tags_good_polite_customer", "rating_tags_bad_job_scope"],
                  "enum": ["Polite Customer", "Job Scope"]
                },
                "uniqueItems": true
              }
            }
          }
        ]
      }
    }
  }
  `,
  // ui_schema:
  //   '{"details":{"ui:widget":"textinput","ui:margin":{"bottom":"2xl"}},"service_type":{"ui:widget":"checkboxes"}}'
  ui_schema: `{
    "rating": {
        "ui:widget": "RatingWidget",
        "classNames": "d-flex justify-content-center"
    },
    "explain": {
        "ui:widget": "textarea",
        "ui:numberOfLines": 3,
        "ui:options": {
            "lineHeight": 120
        }
    },
    "reason": {
        "ui:widget": "RadioAsButton",
        "classNames": "d-flex justify-content-center"
    },
    "files": {
        "ui:widget": "files"
    },
    "classNames": "d-flex justify-content-center align-items-center",
    "ui:order": [
        "rating",
        "reason",
        "explain",
        "files"
    ]
}`
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
