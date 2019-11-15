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

const theme: ITheme = {
  color: {
    primary100: '#CFE2EE',
    primary200: '#9EC5DE',
    primary300: '#6EA8CD',
    primary400: '#3D8BBD',
    primary500: '#0D6EAC',
    primary600: '#0F538C',
    primary700: '#0C3659',

    neutral100: '#E4E4E4',
    neutral200: '#ADADAD',
    neutral300: '#767676',
    neutral400: '#636363',
    neutral500: '#484848',
    neutral600: '#373737',
    neutral700: '#262626',

    danger100: '#FBEAEA',
    danger200: '#F8D6D6',
    danger300: '#ED9797',
    danger400: '#E35959',
    danger500: '#DC3030',
    danger600: '#B60505',
    danger700: '#7B0303'
  },
  textSize: {
    small: 12,
    normal: 15,
    heading1: 18,
    heading2: 20,
    heading3: 24
  }
}

export default theme
