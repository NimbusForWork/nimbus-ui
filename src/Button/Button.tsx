import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled, { css } from 'styled-components/native'

import { Text, ITheme } from '../index'

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  border-radius: 5;
  height: 50;

  ${({ variant, color, theme }: { variant: string; color: string; theme: ITheme }) => {
    if (variant === 'contained') {
      return css`
        background-color: ${theme.colors[`${color}500`]};
        ${Text} & {
          color: ${theme.colors.background100} !important;
        }
      `
    }
    if (variant === 'outlined') {
      return css`
        border-color: ${theme.colors[`${color}500`]};
        border-style: solid;
        border-width: 1;

        ${Text} & {
          color: ${theme.colors[`${color}500`]};
        }
      `
    }

    return null
  }}
`

interface IProps extends TouchableOpacityProps {
  title: string
  variant?: 'contained' | 'outlined' | 'flat'
  color?: 'primary' | 'danger' | 'neutral'
  loading?: boolean
}

const Button: React.FC<IProps> = props => {
  const { children, title, variant, color, loading } = props

  const textColor: any = variant === 'contained' ? 'background100' : `${color}500`

  return (
    <Container {...props} disabled={loading}>
      {children || <Text text={title} fontWeight="bold" color={textColor} />}
    </Container>
  )
}

export default Button
