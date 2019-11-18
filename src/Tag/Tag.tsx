import React from 'react'
import styled, { css } from 'styled-components/native'

import { ITheme } from '../theme'
import { IColor } from '../utils'

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-color: ${({ theme, color }: { theme: ITheme; color: string }) => theme.colors[color]};
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
    if (Number(padding) || padding === 0) {
      return css`
        padding: ${padding}px;
      `
    }

    return css`
      padding-top: ${paddingTop || 3};
      padding-bottom: ${paddingBottom || 3};
      padding-left: ${paddingLeft || 5};
      padding-right: ${paddingRight || 5};
    `
  }}
  padding-top: 3;
  padding-bottom: 3;
  padding-left: 5;
  padding-right: 5;

  margin-top: ${({ marginTop }: { marginTop: number }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }: { marginBottom: number }) => marginBottom || 0};
  margin-left: ${({ marginLeft }: { marginLeft: number }) => marginLeft || 0};
  margin-right: ${({ marginRight }: { marginRight: number }) => marginRight || 0};
`

interface IProps extends IColor {
  padding?: number
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}

const Tag: React.FC<IProps> = ({
  children,
  color = 'neutral100',
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
}) => {
  return (
    <Container
      color={color}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRigt={paddingRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </Container>
  )
}

export default Tag
