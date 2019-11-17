export interface ITheme {
  colors: {
    primary100: string
    primary200: string
    primary300: string
    primary400: string
    primary500: string
    primary600: string
    primary700: string

    neutral100: string
    neutral200: string
    neutral300: string
    neutral400: string
    neutral500: string
    neutral600: string
    neutral700: string

    danger100: string
    danger200: string
    danger300: string
    danger400: string
    danger500: string
    danger600: string
    danger700: string
  }

  textSize: {
    small: number
    normal: number
    heading1: number
    heading2: number
    heading3: number
  }

  fontFamily: string
  platform: 'ios' | 'android' | 'windows' | 'macos' | 'web'
}

const theme: ITheme = {
  colors: {
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
  },
  fontFamily: 'Inter',
  platform: 'web'
}

export default theme
