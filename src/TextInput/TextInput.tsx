import React, { FC } from 'react'
import styled from 'styled-components/native'

import { Text, ITheme } from '../index'

const Container = styled.View`
  height: 60;
`

const Content = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ theme }: { theme: ITheme }) => theme.colors.neutral400};
  padding: ${({ theme }: { theme: ITheme }) => theme.spacing.xl}px;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
`

const Input = styled.TextInput`
  font-family: 'body_base';
  color: ${({ theme }: { theme: ITheme }) => theme.colors.neutral700};
`

interface IProps {
  value: string
  label?: string
  desc?: string
  editable?: boolean
  multiline?: boolean
  placeholder?: string
  onChangeText: Function
}

const TextInput: FC<IProps> = ({ label = '', desc = '', onChangeText, value, editable, multiline, placeholder }) => {
  return (
    <Container>
      <Text text={label} fontWeight="bold" margin={{ left: '2xl', bottom: '2xl' }} />
      <Content>
        {desc ? <Text text={desc} size="sm" margin={{ bottom: 'md' }} /> : null}
        <Input
          placeholder={placeholder}
          multiline={multiline}
          editable={editable}
          disabled={editable}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </Content>
    </Container>
  )
}

export default TextInput
