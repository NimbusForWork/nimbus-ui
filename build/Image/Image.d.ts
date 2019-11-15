import React from 'react'

interface IProps {
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
declare const Image: React.FC<IProps>
export default Image
