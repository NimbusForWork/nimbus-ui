import React from 'react'
import styled, { css } from 'styled-components/native'

import { Text, ITheme } from '../index'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 15;
  padding-bottom: 15;
  padding-left: 15;
  padding-right: 15;

  ${({ bottomDivider, theme }: { bottomDivider: boolean; theme: ITheme }) =>
    bottomDivider &&
    css`
      border-bottom-color: ${theme.colors.background100};
      border-bottom-width: 1;
      border-style: solid;
    `}
`

interface IProps {
  title?: string
  bottomDivider?: boolean
  avatar?: Function
}

const ListItem: React.FC<IProps> = ({ title = '', avatar, bottomDivider, children }) => {
  return (
    <Container bottomDivider={bottomDivider}>
      {children || (
        <>
          {avatar && avatar()}
          <Text text={title} size="small" marginLeft={15} />
        </>
      )}
    </Container>
  )
}

export default ListItem
