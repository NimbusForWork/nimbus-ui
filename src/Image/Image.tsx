import React from 'react'

import styled, { css } from 'styled-components/native'

const Container = styled.Image`
  width: ${({ width }: { width: number }) => width};
  height: ${({ height }: { height: number }) => height};

  ${({ rounded, width, borderRadius }: { rounded: boolean; width: number; borderRadius: number }) => {
    if (rounded) {
      return css`
        border-radius: ${width / 2};
      `
    }

    if (typeof borderRadius !== 'undefined') {
      return css`
        border-radius: ${borderRadius};
      `
    }

    return null
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
  }}
`

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any
  width: number
  height: number
  rounded?: boolean
  borderRadius?: number
  margin?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}

const Image: React.FC<IProps> = ({
  src,
  width,
  height,
  rounded,
  borderRadius,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
}) => {
  return (
    <Container
      source={src}
      width={width}
      height={height}
      rounded={rounded}
      borderRadius={borderRadius}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  )
}

export default Image
