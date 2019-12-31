import React, { FC } from 'react'
import styled, { css } from 'styled-components/native'

import { Text, ITheme, IMargin, FeatherIcon } from '../index'

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  border-radius: 3px;
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
          border-width: 1px;
        `
      }

      return css`
        border-color: ${theme.colors[`${color}700`]};
        border-style: solid;
        border-width: 1px;
      `
    }

    return null
  }}

  ${({ marginProp, theme }: { marginProp: any; theme: ITheme }) => {
    if (marginProp) {
      if (typeof marginProp === 'string') {
        return css`
          margin: ${theme.spacing[marginProp]}px;
        `
      }

      return css`
        margin-top: ${theme.spacing[marginProp.top || 'none']};
        margin-bottom: ${theme.spacing[marginProp.bottom || 'none']};
        margin-left: ${theme.spacing[marginProp.left || 'none']};
        margin-right: ${theme.spacing[marginProp.right || 'none']};
      `
    }

    return null
  }};
`

interface IProps extends IMargin {
  title?: string
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'danger' | 'neutral'
  clear?: boolean
  loading?: boolean
  disabled?: boolean
  style?: any
  onPress: Function
}

const Button: FC<IProps> = props => {
  const {
    children,
    title = '',
    variant = 'flat',
    color = 'primary',
    loading,
    disabled,
    margin,
    clear = false,
    style = {},
    onPress
  } = props

  let textColor

  if (!clear) {
    textColor = variant === 'contained' ? 'white' : `${color}700`
  } else {
    textColor = variant === 'contained' ? `${color}700` : 'white'
  }

  return (
    <Container
      onPress={onPress}
      style={style}
      color={color}
      disabled={loading || disabled}
      marginProp={margin}
      clear={clear}
      variant={variant}
    >
      {loading ? (
        <FeatherIcon name="loader" color={textColor} spin />
      ) : (
        children || <Text text={title} fontWeight="bold" color={textColor} />
      )}
    </Container>
  )
}

export default Button
