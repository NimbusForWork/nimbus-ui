import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

import { FeatherIcon } from '../FeatherIcon'
import { ITheme, IMargin } from '../index'

const Container = styled.View`
  ${({ margin, theme }: { margin: any; theme: ITheme }) => {
    if (margin) {
      if (typeof margin === 'string') {
        return css`
          margin: ${theme.spacing[margin]}px;
        `
      }

      return css`
        margin-top: ${theme.spacing[margin.top || 'none']};
        margin-bottom: ${theme.spacing[margin.bottom || 'none']};
        margin-left: ${theme.spacing[margin.left || 'none']};
        margin-right: ${theme.spacing[margin.right || 'none']};
      `
    }

    return null
  }};
`

interface IProps extends IMargin {
  status: 'unchecked' | 'checked'
  //   color?: 'primary' | 'neutral' | 'danger' | 'success'
  onPress: Function
}

/**
 * Note:
 * This component does not support radio group. It depends on the data with status
 */
const Radio: FC<IProps> = ({ status, onPress, margin }) => {
  const color = 'neutral700'

  let name = 'circle'
  if (status === 'checked') name = 'check-circle'

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Container margin={margin}>
        <FeatherIcon name={name} color={color} size="lg" />
      </Container>
    </TouchableOpacity>
  )
}

export default Radio
