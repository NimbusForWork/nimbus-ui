import { IColor } from './utils'

export interface ITheme extends IColor {
  textSize: {
    small: number
    normal: number
    heading1: number
    heading2: number
    heading3: number
  }
}
declare const theme: ITheme
export default theme
