import React, { FC } from 'react'
import styled, { css } from 'styled-components/native'

import { Text, ITheme, ISpacing } from '../index'
import baseColor from '../color'

interface IProps extends ISpacing {
  title?: string
  subtitle?: string
  bottomDivider?: boolean
  avatar?: Function
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  min-height: 59;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.white};

  ${({ marginProp, theme }: { marginProp: any; theme: ITheme }) => {
    if (marginProp) {
      if (typeof marginProp === 'string') {
        return css`
          margin: ${theme.spacing[marginProp]}px;
        `
      }

      return css`
        ${marginProp.top && `margin-top: ${theme.spacing[marginProp.top]};`};
        ${marginProp.bottom && `margin-bottom: ${theme.spacing[marginProp.bottom]};`};
        ${marginProp.left && `margin-left: ${theme.spacing[marginProp.left]};`};
        ${marginProp.right && `margin-right: ${theme.spacing[marginProp.right]};`};
      `
    }

    return null
  }};

  ${({ paddingProp, theme }: { paddingProp: any; theme: ITheme }) => {
    if (paddingProp) {
      if (typeof paddingProp === 'string') {
        return css`
          padding: ${theme.spacing[paddingProp]}px;
        `
      }

      return css`
        ${paddingProp.top && `padding-top: ${theme.spacing[paddingProp.top]};`};
        ${paddingProp.bottom && `padding-bottom: ${theme.spacing[paddingProp.bottom]};`};
        ${paddingProp.left && `padding-left: ${theme.spacing[paddingProp.left]};`};
        ${paddingProp.right && `padding-right: ${theme.spacing[paddingProp.right]};`};
      `
    }

    return css`
      padding-left: 15;
      padding-right: 15;
    `
  }};

  ${({ bottomDivider }: { bottomDivider: boolean }) =>
    bottomDivider &&
    css`
      border-bottom-color: ${baseColor.gray300};
      border-bottom-width: 1;
      border-style: solid;
    `};
`

const Content = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
`

/**
 * **NOTE: Margin and Padding always work with custom content
 */
const Row: FC<IProps> = ({ title = '', subtitle, avatar, bottomDivider, children, padding, margin }) => {
  return (
    <Container bottomDivider={bottomDivider} paddingProp={padding} marginProp={margin}>
      {children || (
        <>
          {avatar && avatar()}
          <Content>
            <Text text={title} size="base" fontWeight={subtitle ? 'bold' : 'base'} margin={{ left: 'lg' }} />
            {subtitle && <Text text={subtitle} size="base" margin={{ left: 'lg', top: 'sm' }} />}
          </Content>
        </>
      )}
    </Container>
  )
}

export default Row
