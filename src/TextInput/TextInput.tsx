import React, { FC } from 'react'
import styled, { css } from 'styled-components/native'

import { Text, ITheme, IMargin } from '../index'

const Container = styled.View`
  min-height: 68;

  ${({ margin, theme }: { margin: any; theme: ITheme }) => {
    if (margin) {
      if (typeof margin === 'string') {
        return css`
          margin: ${theme.spacing[margin]}px;
        `
      }

      return css`
        margin-top: ${theme.spacing[margin.top || 'none']};
        margin-bottom: ${theme.spacing[margin.bottom || 'none']};
        margin-left: ${theme.spacing[margin.left || 'none']};
        margin-right: ${theme.spacing[margin.right || 'none']};
      `
    }

    return null
  }};
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

interface IProps extends IMargin {
  value: string
  label?: string
  desc?: string
  editable?: boolean
  multiline?: boolean
  placeholder?: string
  numberOfLines?: number
  secureTextEntry?: boolean
  onChangeText: Function
  onContentSizeChange?: Function
  inputStyle?: any
}

const TextInput: FC<IProps> = ({
  label = '',
  desc = '',
  onChangeText,
  value,
  editable,
  multiline = false,
  placeholder,
  numberOfLines,
  secureTextEntry,
  onContentSizeChange,
  inputStyle,
  margin
}) => {
  return (
    <Container margin={margin}>
      <Text text={label} fontWeight="bold" margin={{ left: '2xl', bottom: '2xl' }} />
      <Content>
        <Input
          style={inputStyle}
          placeholder={placeholder}
          multiline={multiline}
          editable={editable}
          disabled={editable}
          onChangeText={text => onChangeText(text)}
          value={value}
          numberOfLines={numberOfLines}
          secureTextEntry={secureTextEntry}
          onContentSizeChange={onContentSizeChange}
        />

        {desc ? <Text text={desc} size="sm" margin={{ top: 'lg' }} style={{ textAlign: 'right' }} /> : null}
      </Content>
    </Container>
  )
}

export default TextInput
