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

interface IProps extends IMargin {
  status: 'unchecked' | 'checked'
  //   color?: 'primary' | 'neutral' | 'danger' | 'success'
  disabled?: boolean
  onPress: Function
}

/**
 * Note:
 * This component does not support radio group. It depends on the data with status
 */
const Radio: FC<IProps> = ({ disabled, status, onPress, margin }) => {
  const color = 'neutral700'

  let name = 'circle'
  if (status === 'checked') name = 'check-circle'

  return (
    <TouchableOpacity disabled={disabled} onPress={() => onPress && onPress()}>
      <Container marginProp={margin}>
        <FeatherIcon name={name} color={color} size="lg" />
      </Container>
    </TouchableOpacity>
  )
}

export default Radio
