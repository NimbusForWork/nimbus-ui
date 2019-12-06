import React, { FC } from 'react'
import styled, { css } from 'styled-components/native'

import { ITheme, IFontWeight, IColor, ITextSize, IMargin } from '../index'

const Container = styled.Text`
  color: ${({ color, theme }: { color: string; theme: ITheme }) => theme.colors[color as string]};
  font-size: ${({ size, theme }: { size: string; theme: ITheme }) => theme.textSize[size]};
  font-family: ${({ theme, fontWeight }: { theme: ITheme; fontWeight: string }) => `${theme.fontFamily}_${fontWeight}`};

  ${({ margin, theme }: { margin: any; theme: ITheme }) => {
    if (margin) {
      if (typeof margin === 'string') {
        return css`
          margin: ${theme.spacing[margin]}px;
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

interface IProps extends IColor, ITextSize, IMargin, IFontWeight {
  text: string
}

const Text: FC<IProps> = ({ color = 'neutral700', text, size = 'base', margin, fontWeight = 'base' }) => {
  return (
    <Container color={color} size={size} margin={margin} fontWeight={fontWeight}>
      {text}
    </Container>
  )
}

export default Text
