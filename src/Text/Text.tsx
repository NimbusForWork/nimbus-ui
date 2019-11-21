import React from 'react'
import { TextProps } from 'react-native'
import styled, { css } from 'styled-components/native'

import { IFontWeight, IColor, ITextSize, ISpacing } from '../utils'
import { ITheme } from '../theme'

const Container = styled.Text`
  color: ${({ color, theme }: { color: string; theme: ITheme }) => theme.colors[color as string]};
  font-size: ${({ size, theme }: { size: string; theme: ITheme }) => theme.textSize[size]};

  ${({ theme, fontWeight }: { theme: ITheme; fontWeight: string }) => {
    if (fontWeight === 'bold') {
      return css`
        font-family: ${`${theme.fontFamily}-Bold`}};
        font-weight: bold;
      `
    }

    return css`
      font-family: ${`${theme.fontFamily}-Regular`}};
    `
  }}};

  ${({ margin, theme }: { margin: any; theme: ITheme }) => {
    if (margin) {
      if (typeof margin === 'string') {
        return css`
          margin: ${theme.spacing[margin]};
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

interface IText extends IColor, ITextSize, ISpacing, IFontWeight, TextProps {
  text: string
}

const Text: React.FC<IText> = ({ color = 'neutral500', text, size = 'normal', margin, fontWeight }) => {
  return (
    <Container color={color} size={size} margin={margin} fontWeight={fontWeight}>
      {text}
    </Container>
  )
}

export default Text

/* ${({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
  }: {
    margin: string
    marginTop: string
    marginBottom: string
    marginLeft: string
    marginRight: string
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
  }}; */
