import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

import { FeatherIcon } from '../FeatherIcon'
import { ITheme, IMargin } from '../index'

const Container = styled.View`
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

const Rectangle = styled.View`
  width: 20;
  height: 20;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ color, theme }: { color: string; theme: ITheme }) => theme.colors[`${color}700`]};
  border-radius: ${({ theme }: { theme: ITheme }) => theme.rounded.md};

  ${({ status, color, theme }: { status: string; color: string; theme: ITheme }) =>
    status === 'checked' &&
    css`
      background-color: ${theme.colors[`${color}700`]};
    `}
`

interface IProps extends IMargin {
  status: 'unchecked' | 'checked' | 'indeterminate'
  color?: 'primary' | 'neutral' | 'danger' | 'success'
  onPress: Function
}

const CheckBox: FC<IProps> = ({ status, color = 'primary', onPress, margin }) => {
  let name = ''
  if (status === 'checked') name = 'check'
  if (status === 'indeterminate') name = 'minus'

  const colorIcon: any = status === 'checked' ? 'white' : `${color}700`

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Container marginProp={margin}>
        <Rectangle color={color} status={status}>
          {status !== 'unchecked' && <FeatherIcon name={name} color={colorIcon} />}
        </Rectangle>
      </Container>
    </TouchableOpacity>
  )
}

export default CheckBox
