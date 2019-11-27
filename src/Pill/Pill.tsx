import React, { FC } from 'react'
import styled, { css } from 'styled-components/native'

import { Text, ITheme } from '../index'
import { IColor } from '../utils'

const Container = styled.View`
  ${({ color, theme }: { color: string; theme: ITheme }) =>
    color &&
    css`
      background-color: ${theme.colors[color]};
    `}

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
}

const Pill: FC<IProps> = ({ children, text, color = 'primary700' }) => {
  return <Container color={color}>{children || <Text text={text} color="white" fontWeight="bold" />}</Container>
}

export default Pill
