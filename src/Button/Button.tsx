import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled, { css } from 'styled-components/native'

import { Text, ITheme } from '../index'

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  border-radius: 3;
  padding-top: 13;
  padding-bottom: 13;
  padding-left: 30;
  padding-right: 30;

  ${({ variant, color, theme }: { variant: string; color: string; theme: ITheme }) => {
    if (variant === 'contained') {
      return css`
        background-color: ${theme.colors[`${color}500`]};
      `
    }
    if (variant === 'outlined') {
      return css`
        border-color: ${theme.colors[`${color}500`]};
        border-style: solid;
        border-width: 1;
      `
    }

    return null
  }}

  ${({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
  }: {
    margin: number
    marginTop: number
    marginBottom: number
    marginLeft: number
    marginRight: number
  }) => {
    if (Number(margin)) {
      return css`
        margin: ${margin}px;
      `
    }

    return css`
      margin-top: ${marginTop || 0};
      margin-bottom: ${marginBottom || 0};
      margin-left: ${marginLeft || 0};
      margin-right: ${marginRight || 0};
    `
  }}
`

interface IProps extends TouchableOpacityProps {
  title: string
  variant?: 'contained' | 'outlined' | 'flat'
  color?: 'primary' | 'danger' | 'neutral'
  loading?: boolean
  margin?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}

const Button: React.FC<IProps> = props => {
  const {
    children,
    title,
    variant,
    color = 'primary',
    loading,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
  } = props

  const textColor: any = variant === 'contained' ? 'background100' : `${color}500`

  return (
    <Container
      {...props}
      disabled={loading}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children || <Text text={title} fontWeight="bold" color={textColor} />}
    </Container>
  )
}

export default Button
