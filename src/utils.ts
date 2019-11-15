export interface IColor {
  color?:
    | 'primary100'
    | 'primary200'
    | 'primary300'
    | 'primary400'
    | 'primary500'
    | 'primary600'
    | 'primary700'
    | 'neutral100'
    | 'neutral200'
    | 'neutral300'
    | 'neutral400'
    | 'neutral500'
    | 'neutral600'
    | 'neutral700'
    | 'danger100'
    | 'danger200'
    | 'danger300'
    | 'danger400'
    | 'danger500'
    | 'danger600'
    | 'danger700'
}

export interface ITextSize {
  size?: 'small' | 'normal' | 'heading1' | 'heading2' | 'heading3'
}

export interface IFontWeight {
  fontWeight?: 'bold'
}
