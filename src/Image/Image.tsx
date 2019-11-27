import React, { FC } from 'react'
import styled, { css } from 'styled-components/native'

import { IRounded, ISpacing } from '../utils'

import { ITheme } from '..'

const Container = styled.Image`
  width: ${({ width }: { width: number }) => width};
  height: ${({ height }: { height: number }) => height};

  ${({ rounded, width, theme }: { rounded: string; width: number; theme: ITheme }) => {
    if (rounded) {
      if (rounded === 'full') {
        return css`
          border-radius: ${width / 2};
        `
      }

      return css`
        border-radius: ${theme.rounded[rounded]};
      `
    }

    return null
  }}

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

interface IProps extends IRounded, ISpacing {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any
  width: number
  height: number
}

const Image: FC<IProps> = ({ src, width, height, rounded, margin }) => {
  return <Container source={src} width={width} height={height} rounded={rounded} margin={margin} />
}

export default Image
