import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled, { css } from 'styled-components/native'

import { ITextSize, IColor } from '../utils'

import { Text } from '../Text'

import { ITheme } from '..'

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;

  ${({ variant, color, theme }: { variant: string; color: string; theme: ITheme }) => {
    if (color) {
      if (variant === 'contained') {
        return css`
          background-color: ${theme.colors[color]};
          border-color: ${theme.colors[color]};
        `
      }

      if (variant === 'outlined') {
        return css`
          background-color: rgba(0, 0, 0, 0);
          border-color: ${theme.colors[color]};
          border-style: solid;
          border-width: 1;
        `
      }

      return css`
        background: rgba(52, 52, 52, 0.8);
      `
    }
  }}

  ${({ size }: { size: string }) => {
    switch (size) {
      case 'small':
        return css`
          padding-top: 4;
          padding-bottom: 4;
          padding-left: 8;
          padding-right: 8;
          border-radius: 3.2;
        `

      case 'large':
        return css`
          padding-top: 8;
          padding-bottom: 8;
          padding-left: 16;
          padding-right: 16;
          border-radius: 4.8;
        `

      default:
        return css`
          padding-top: 6;
          padding-bottom: 6;
          padding-left: 12;
          padding-right: 12;
          border-radius: 4;
        `
    }
  }}
`

interface IProps extends IColor, ITextSize, TouchableOpacityProps {
  title: string
  variant?: 'contained' | 'outlined' | 'flat'
}

const Button: React.FC<IProps> = props => {
  const { children, title } = props

  return <Container {...props}>{children || <Text text={title} />}</Container>
}

export default Button
