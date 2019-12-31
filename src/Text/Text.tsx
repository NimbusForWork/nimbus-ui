import React, { FC } from 'react'
import styled, { css } from 'styled-components/native'

import { ITheme, IFontWeight, IColor, ITextSize, IMargin } from '../index'

const Container = styled.Text`
  color: ${({ color, theme }: { color: string; theme: ITheme }) => theme.colors[color as string]};
  font-size: ${({ size, theme }: { size: string; theme: ITheme }) => theme.textSize[size]};
  font-family: ${({ theme, fontWeight }: { theme: ITheme; fontWeight: string }) => `${theme.fontFamily}_${fontWeight}`};

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

interface IProps extends IColor, ITextSize, IMargin, IFontWeight {
  text: string
  style?: any
}

const Text: FC<IProps> = ({ color = 'neutral700', text, size = 'base', margin, fontWeight = 'base', style }) => {
  return (
    <Container style={style} color={color} size={size} marginProp={margin} fontWeight={fontWeight}>
      {text}
    </Container>
  )
}

export default Text
