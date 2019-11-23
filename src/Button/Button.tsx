import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled, { css } from 'styled-components/native'

import { Text, ITheme } from '../index'
import { ISpacing } from '../utils'

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  border-radius: 3;
  height: 50;

  ${({ variant, color, clear, theme }: { variant: string; color: string; clear: boolean; theme: ITheme }) => {
    if (variant === 'contained') {
      if (clear) {
        return css`
          background-color: ${theme.colors.white};
        `
      }

      return css`
        background-color: ${theme.colors[`${color}700`]};
      `
    }

    if (variant === 'outlined') {
      if (clear) {
        return css`
          border-color: ${theme.colors.white};
          border-style: solid;
          border-width: 1;
        `
      }

      return css`
        border-color: ${theme.colors.neutral500};
        border-style: solid;
        border-width: 1;
      `
    }

    return null
  }}

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

interface IProps extends ISpacing, TouchableOpacityProps {
  title?: string
  variant?: 'contained' | 'outlined' | 'flat'
  color?: 'primary' | 'danger' | 'neutral'
  clear?: boolean
  loading?: boolean
  disabled?: boolean
}

const Button: React.FC<IProps> = props => {
  const { children, title = '', variant = 'flat', color = 'primary', loading, disabled, margin, clear } = props

  let textColor

  if (!clear) {
    textColor = variant === 'contained' ? 'white' : `${color}700`
  } else {
    textColor = variant === 'contained' ? `${color}700` : 'white'
  }

  // const textColor: any = variant === 'contained' ? 'white' : `${color}700`

  return (
    <Container {...props} color={color} disabled={loading || disabled} margin={margin} clear={clear}>
      {children || <Text text={title} fontWeight="bold" color={textColor} />}
    </Container>
  )
}

export default Button
