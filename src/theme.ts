import baseColor from './color'

export interface ITheme {
  colors: {
    primary100: string
    primary200: string
    primary300: string
    primary400: string
    primary500: string
    primary600: string
    primary700: string
    primary800: string
    primary900: string

    neutral100: string
    neutral200: string
    neutral300: string
    neutral400: string
    neutral500: string
    neutral600: string
    neutral700: string
    neutral800: string
    neutral900: string

    danger100: string
    danger200: string
    danger300: string
    danger400: string
    danger500: string
    danger600: string
    danger700: string
    danger800: string
    danger900: string

    success100: string
    success200: string
    success300: string
    success400: string
    success500: string
    success600: string
    success700: string
    success800: string
    success900: string

    background100: string
    background200: string
  }

  textSize: {
    xs: number
    sm: number
    base: number
    md: number
    lg: number
    xl: number
    '2xl': number
    '3xl': number
    '4xl': number
  }

  rounded: {
    sm: number
    md: number
    lg: number
    xl: number
    '2xl': number
    full: number
  }

  spacing: {
    none: number
    sm: number
    base: number
    md: number
    lg: number
    xl: number
    '2xl': number
  }

  fontFamily: string
  platform: 'ios' | 'android' | 'windows' | 'macos' | 'web'
}

const theme: ITheme = {
  colors: {
    primary100: baseColor.blue100,
    primary200: baseColor.blue200,
    primary300: baseColor.blue300,
    primary400: baseColor.blue400,
    primary500: baseColor.blue500,
    primary600: baseColor.blue600,
    primary700: baseColor.blue700,
    primary800: baseColor.blue800,
    primary900: baseColor.blue900,

    neutral100: baseColor.gray100,
    neutral200: baseColor.gray200,
    neutral300: baseColor.gray300,
    neutral400: baseColor.gray400,
    neutral500: baseColor.gray500,
    neutral600: baseColor.gray600,
    neutral700: baseColor.gray700,
    neutral800: baseColor.gray800,
    neutral900: baseColor.gray900,

    danger100: baseColor.red100,
    danger200: baseColor.red200,
    danger300: baseColor.red300,
    danger400: baseColor.red400,
    danger500: baseColor.red500,
    danger600: baseColor.red600,
    danger700: baseColor.red700,
    danger800: baseColor.red800,
    danger900: baseColor.red900,

    success100: baseColor.green100,
    success200: baseColor.green200,
    success300: baseColor.green300,
    success400: baseColor.green400,
    success500: baseColor.green500,
    success600: baseColor.green600,
    success700: baseColor.green700,
    success800: baseColor.green800,
    success900: baseColor.green900,

    background100: '#FFFFFF',
    background200: '#FAFAFA'
  },

  textSize: {
    xs: 10,
    sm: 12,
    base: 15,
    md: 18,
    lg: 20,
    xl: 24,
    '2xl': 30,
    '3xl': 36,
    '4xl': 40
  },

  rounded: {
    sm: 2,
    md: 4,
    lg: 6,
    xl: 10,
    '2xl': 14,
    full: 25
  },

  spacing: {
    none: 0,
    sm: 2,
    base: 4,
    md: 6,
    lg: 8,
    xl: 10,
    '2xl': 12
  },

  fontFamily: 'Inter',
  platform: 'web'
}

export default theme
