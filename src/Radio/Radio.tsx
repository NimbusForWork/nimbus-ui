import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

import { FeatherIcon } from '../FeatherIcon'
import { ITheme, IMargin, ILevelColor } from '../index'

const Container = styled.View`
  width: 20;
  height: 20;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-radius: 9999;
  border-color: ${({ color, levelColor, theme }: { color: string; levelColor: string; theme: ITheme }) =>
    theme.colors[`${color}${levelColor}`]};

  ${({ status, color, levelColor, theme }: { status: string; color: string; levelColor: string; theme: ITheme }) =>
    status === 'checked' &&
    css`
      background-color: ${theme.colors[`${color}${levelColor}`]};
    `}

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

interface IProps extends IMargin, ILevelColor {
  status: 'unchecked' | 'checked'
  color?: 'primary' | 'neutral' | 'danger' | 'success'
  disabled?: boolean
  style?: any
  onPress: Function
}

/**
 * Note:
 * This component does not support radio group. It depends on the data with status
 */
const Radio: FC<IProps> = ({ disabled, style, status, color = 'neutral', onPress, margin, levelColor = '700' }) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={() => onPress && onPress()}>
      <Container style={style} status={status} color={color} levelColor={levelColor} marginProp={margin}>
        {status === 'checked' && <FeatherIcon name="check" color="white" size="sm" />}
      </Container>
    </TouchableOpacity>
  )
}

export default Radio
