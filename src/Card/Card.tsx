import React from 'react'
import styled, { css } from 'styled-components/native'

import { ITheme } from '../index'

const Container = styled.View`
  border-color: ${({ theme }: { theme: ITheme }) => theme.colors.neutral100};
  border-width: 1;
  border-style: solid;
  border-radius: 3;

  ${({
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  }: {
    padding: number
    paddingTop: number
    paddingBottom: number
    paddingLeft: number
    paddingRight: number
  }) => {
    if (Number(padding)) {
      return css`
        padding: ${padding}px;
      `
    }

    return css`
      padding-top: ${paddingTop || 15};
      padding-bottom: ${paddingBottom || 15};
      padding-left: ${paddingLeft || 15};
      padding-right: ${paddingRight || 15};
    `
  }}
`

interface IProps {
  padding?: number
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRigt?: number
}

const Card: React.FC<IProps> = ({ children, padding, paddingTop, paddingBottom, paddingLeft, paddingRigt }) => {
  return (
    <Container
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRigt={paddingRigt}
    >
      {children}
    </Container>
  )
}

export default Card
