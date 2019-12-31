import React, { FC } from 'react'
import styled, { css } from 'styled-components/native'

import { IRounded, IMargin, ITheme } from '../index'

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

interface IProps extends IRounded, IMargin {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any
  width: number
  height: number
}

const Image: FC<IProps> = ({ src, width, height, rounded, margin }) => {
  return <Container source={src} width={width} height={height} rounded={rounded} marginProp={margin} />
}

export default Image
