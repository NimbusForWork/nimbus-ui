export interface IColor {
  color?:
    | 'primary100'
    | 'primary200'
    | 'primary300'
    | 'primary400'
    | 'primary500'
    | 'primary600'
    | 'primary700'
    | 'primary800'
    | 'primary900'
    | 'neutral100'
    | 'neutral200'
    | 'neutral300'
    | 'neutral400'
    | 'neutral500'
    | 'neutral600'
    | 'neutral700'
    | 'neutral800'
    | 'neutral900'
    | 'danger100'
    | 'danger200'
    | 'danger300'
    | 'danger400'
    | 'danger500'
    | 'danger600'
    | 'danger700'
    | 'danger800'
    | 'danger900'
    | 'dark'
    | 'white'
}

export interface ITextSize {
  size?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
}

export interface IRounded {
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export interface IShadow {
  shadow?: 'base' | 'md' | 'lg' | 'xl' | '2xl' | 'inner'
}

export interface IFontWeight {
  fontWeight?: 'base' | 'medium' | 'bold'
}

export interface ISpacingPosition {
  top?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'
  bottom?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'
  left?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'
  right?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'
}

export interface ISpacing {
  margin?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | ISpacingPosition
  padding?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | ISpacingPosition
}
