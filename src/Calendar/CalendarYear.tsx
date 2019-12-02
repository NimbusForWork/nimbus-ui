import React, { FC, useState } from 'react'
import { TouchableOpacity, FlatList } from 'react-native-web'
import styled, { css } from 'styled-components/native'

import { getYear } from 'date-fns'

import { ITheme } from '../index'
import { Text } from '../Text'

const YearContainer = styled.View`
  padding-left: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-right: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
`

const YearStyled = styled.View`
  width: ${282 / 3};
  height: 50;
  align-content: center;
  align-items: center;
  justify-content: center;

  ${({ active, theme }: { active: boolean; theme: ITheme }) =>
    active &&
    css`
      background-color: ${theme.colors.neutral200};
      border-radius: ${theme.rounded.lg};
    `}
`

const Rows = styled.View`
  flex-direction: column;
  justify-content: space-between;
`

interface IProps {
  yearSelected: number
  onSelectYear: Function
}

const Item = ({ item, active, onSelect }: { item: string; active: boolean; onSelect: Function }) => {
  return (
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => onSelect(item)}>
      <YearStyled active={active}>
        <Text text={item.toString()} />
      </YearStyled>
    </TouchableOpacity>
  )
}

const data: Array<string> = []
for (let i = getYear(new Date()) - 5; i < getYear(new Date()) + 15; i += 1) {
  data.push(i.toString())
}

const CalendarYear: FC<IProps> = ({ yearSelected, onSelectYear }) => {
  const [years, setYears] = useState<Array<string>>(data)

  const loadMore = () => {
    const latest = Number(years[years.length - 1])
    for (let i = latest; i < latest + 15; i += 1) {
      years.push(i.toString())
    }

    setYears(years)
  }

  return (
    <YearContainer>
      <Rows>
        <FlatList
          style={{ maxHeight: 200 }}
          numColumns={3}
          contentContainerStyled={{ justifyContent: 'center' }}
          data={years}
          renderItem={({ item }: { item: string }) => (
            <Item item={item} active={item === yearSelected.toString()} onSelect={onSelectYear} />
          )}
          onRefresh={() => console.log('refesh')}
          refreshing
          keyExtractor={item => item}
          onEndReachedThreshold={0.1}
          onEndReached={loadMore}
        />
      </Rows>
    </YearContainer>
  )
}

export default CalendarYear
