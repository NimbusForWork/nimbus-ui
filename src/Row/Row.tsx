import React from 'react'
import styled, { css } from 'styled-components/native'

import { Text, ITheme } from '../index'
import baseColor from '../color'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 15;
  padding-right: 15;
  min-height: 59;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.white};

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
`

interface IProps {
  title?: string
  subtitle?: string
  bottomDivider?: boolean
  avatar?: Function
}

const ListItem: React.FC<IProps> = ({ title = '', subtitle = '', avatar, bottomDivider, children }) => {
  return (
    <Container bottomDivider={bottomDivider}>
      {children || (
        <>
          {avatar && avatar()}
          <Content>
            <Text text={title} size="base" fontWeight={subtitle ? 'bold' : 'base'} margin={{ left: 'lg' }} />
            {subtitle !== null && <Text text={subtitle} size="base" margin={{ left: 'lg', top: 'sm' }} />}
          </Content>
        </>
      )}
    </Container>
  )
}

export default ListItem
