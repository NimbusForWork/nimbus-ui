import React, { FC, useEffect, useState } from 'react'
import { Formik, FormikProps, FormikValues, FormikHelpers } from 'formik'
import styled from 'styled-components/native'
import { View, TouchableOpacity } from 'react-native'

import { TextInput, Button, CheckBox, Row, Text } from '..'

interface ISchema {
  schema: {
    id: number
    name: string
    description: string
    json_schema: string
    ui_schema: string
  }
}

interface IFormikPropsExtends extends FormikProps<FormikValues> {
  fields: any
  submitButton?: (args: any) => any
}

interface IProps extends ISchema {
  onSubmit?: (values: FormikValues, actions: FormikHelpers<FormikValues>) => void
  submitButton?: (args: any) => any
}

const Container = styled.View`
  border-top-width: 1;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.neutral300};
`

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

const FormRender: FC<IFormikPropsExtends> = props => {
  const { fields, values, setFieldValue, handleSubmit, submitButton } = props

  return (
    <View style={{ flex: 1 }}>
      {Object.keys(fields).map(k => {
        // render TextInput
        if (fields[k]['ui:widget'] === 'textinput' || fields[k].type === 'string') {
          return (
            <TextInput
              key={k}
              value={values[k]}
              label={fields[k].title}
              desc={fields[k].description}
              onChangeText={val => setFieldValue(`${k}`, val)}
              margin={fields[k]['ui:margin'] || 'none'}
            />
          )
        }

        // Render Checkbox Array
        if (fields[k]['ui:widget'] === 'checkboxes' && fields[k].type === 'array') {
          return (
            <View key={k}>
              {fields[k].title && (
                <Text
                  text={fields[k].title}
                  fontWeight="bold"
                  margin={{ left: '2xl', bottom: '2xl', ...fields[k]['ui:margin'] }}
                />
              )}
              <Container>
                {fields[k]?.items?.enum.map((item: string, idx: number) => (
                  <TouchableOpacity
                    key={`${item}_${idx}`}
                    onPress={() =>
                      setFieldValue(
                        `${k}.items.${item}`,
                        values[k].items[item] === 'unchecked' ? 'checked' : 'unchecked'
                      )
                    }
                  >
                    <Row bottomDivider>
                      <Content>
                        <Text text={item} color="neutral600" />
                        <CheckBox
                          status={values[k].items[item]}
                          onPress={() =>
                            setFieldValue(
                              `${k}.items.${item}`,
                              values[k].items[item] === 'unchecked' ? 'checked' : 'unchecked'
                            )
                          }
                        />
                      </Content>
                    </Row>
                  </TouchableOpacity>
                ))}
              </Container>
            </View>
          )
        }

        return null
      })}

      {submitButton ? (
        submitButton({ values, handleSubmit })
      ) : (
        <Button onPress={handleSubmit} variant="contained" color="primary" title="Submit" margin={{ top: '2xl' }} />
      )}
    </View>
  )
}

const FormBuilder: FC<IProps> = ({ schema, onSubmit, submitButton }) => {
  const [loading, setLoading] = useState(false)

  const [initialValues, setInitialValues] = useState({})
  const [fields, setFields] = useState({})
  const json_schema = JSON.parse(schema.json_schema)
  const ui_schema = JSON.parse(schema.ui_schema)

  useEffect(() => {
    const values = {}
    let _fields = {}

    Object.keys(json_schema.properties).forEach(k => {
      if (json_schema.properties[k].type === 'string') {
        values[k] = json_schema.properties[k].default || ''
      }

      if (json_schema.properties[k].type === 'array') {
        values[k] = { items: {} }
        json_schema.properties[k]?.items?.enum?.forEach(item => {
          values[k].items[item] = 'unchecked'
        })
      }

      _fields = {
        ..._fields,
        [k]: {
          type: json_schema.properties[k].type,
          title: json_schema.properties[k].title,
          description: json_schema.properties[k].description,
          items: json_schema.properties[k].items
        }
      }
    })

    Object.keys(ui_schema).forEach(k => {
      let obj = {}
      Object.keys(ui_schema[k]).forEach(k1 => {
        obj = { ...obj, [k1]: ui_schema[k][k1] }
      })

      _fields[k] = { ..._fields[k], ...obj }
    })

    setInitialValues(values)
    setFields(_fields)
    setLoading(true)
  }, [])

  const handleSubmit = (values, actions) => {
    if (onSubmit) {
      onSubmit(values, actions)
    }
  }

  return loading ? (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formProps: IFormikPropsExtends) => <FormRender {...formProps} fields={fields} submitButton={submitButton} />}
    </Formik>
  ) : null
}

export default FormBuilder
