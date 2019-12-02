import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components/native'

import { ITheme } from '../index'
import { Text } from '../Text'

import CalendarYear from './CalendarYear'

const MonthContainer = styled.View`
  padding-left: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-right: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
`

const MonthColumns = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`

const ItemMonth = styled.TouchableOpacity``

const MonthStyled = styled.View`
  width: 102;
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

const Columns = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const CurrentYear = styled.TouchableOpacity`
  flex: 1;
  padding-left: ${40 / 3}px;
  align-items: flex-start;
`

interface IProps {
  monthSelected: number
  onSelectMonth: Function
  year: number
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const CalendarMonth: FC<IProps> = ({ monthSelected, onSelectMonth, year }) => {
  const [isChooseYear, setIsChooseYear] = useState(false)
  const [yearSelected, setYearSelected] = useState(year)

  return (
    <MonthContainer>
      {!isChooseYear ? (
        <>
          <Rows>
            <Columns>
              <CurrentYear onPress={() => setIsChooseYear(true)}>
                <Text text={yearSelected.toString()} fontWeight="bold" margin={{ bottom: 'xl' }} />
              </CurrentYear>
            </Columns>
          </Rows>

          <Rows>
            <MonthColumns>
              {months.map((month, idx) => (
                <ItemMonth key={idx.toString()} onPress={() => onSelectMonth(idx, yearSelected)}>
                  <MonthStyled active={idx === monthSelected}>
                    <Text text={month} />
                  </MonthStyled>
                </ItemMonth>
              ))}
            </MonthColumns>
          </Rows>
        </>
      ) : (
        <CalendarYear
          onSelectYear={y => {
            setYearSelected(y)
            setIsChooseYear(false)
          }}
          yearSelected={yearSelected}
        />
      )}
    </MonthContainer>
  )
}

export default CalendarMonth
