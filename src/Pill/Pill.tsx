import React, { FC } from 'react'
import styled, { css } from 'styled-components/native'

import { Text, ITheme } from '../index'
import { IColor } from '../utils'

const Container = styled.View`
  ${({ color, variant, theme }: { color: string; variant: string; theme: ITheme }) => {
    if (variant === 'outlined') {
      return css`
        background-color: ${theme.colors.white};
        border-color: ${theme.colors[color]};
        border-style: solid;
        border-width: 1px;
      `
    }

    return css`
      background-color: ${theme.colors[color]};
    `
  }}

  height: 25;
  border-radius: ${25 / 2};
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-right: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
`

interface IProps extends IColor {
  text: string
  variant?: 'contained' | 'outlined'
}

const Pill: FC<IProps> = ({ children, text, color = 'primary700', variant = 'contained' }) => {
  return (
    <Container color={color} variant={variant}>
      {children || <Text text={text} color={variant === 'outlined' ? color : 'white'} fontWeight="bold" />}
    </Container>
  )
}

export default Pill
