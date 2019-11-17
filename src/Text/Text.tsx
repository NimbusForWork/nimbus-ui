import React from 'react'
import { TextProps } from 'react-native'
import styled, { css } from 'styled-components/native'

import { IFontWeight, IColor, ITextSize } from '../utils'
import { ITheme } from '../theme'

const Container = styled.Text`
  color: ${({ color, theme }: { color: string; theme: ITheme }) => theme.colors[color as string]};
  font-size: ${({ size, theme }: { size: string; theme: ITheme }) => theme.textSize[size]};

  ${({ theme, size, fontWeight }: { theme: ITheme; size: string; fontWeight: string }) => {
    if (theme.platform !== 'web') {
      if ('heading'.indexOf(size) !== -1 || fontWeight) {
        return css`
          font-family: ${`${theme.fontFamily}-Bold`}};
        `
      }

      return css`
        font-family: ${`${theme.fontFamily}-Regular`}};
      `
    }

    return css`
      ${size.indexOf('heading') !== -1 && `font-weight: bold;`};
      ${fontWeight && `font-weight: ${fontWeight};`}
      font-family: ${`${theme.fontFamily}-Regular`}};
    `
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
  }};
`

interface IText extends IColor, ITextSize, IFontWeight, TextProps {
  text: string
  margin?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}

const Text: React.FC<IText> = ({
  color = 'neutral500',
  text,
  size = 'normal',
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  fontWeight
}) => {
  return (
    <Container
      color={color}
      size={size}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      fontWeight={fontWeight}
    >
      {text}
    </Container>
  )
}

export default Text
