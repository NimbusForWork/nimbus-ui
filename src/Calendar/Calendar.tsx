import React, { FC, useState, useEffect } from 'react'
import styled, { css } from 'styled-components/native'
import { Animated, Dimensions, FlatList } from 'react-native'
import { startOfWeek, addDays, getMonth, getYear, format, isSameDay, compareAsc, setMonth, setYear } from 'date-fns'

import { ITheme, Button, FeatherIcon } from '../index'
import { Text } from '../Text'

const Box = styled.View`
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  height: ${Dimensions.get('window').height};
  width: ${Dimensions.get('window').width};
`

const ModalContent = styled.View`
  z-index: 100;
  width: 330;
  background: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  border-radius: ${({ theme }: { theme: ITheme }) => theme.rounded.xl};
`

const Header = styled.View`
  height: 50;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`
const ButtonWrap = styled.View`
  flex: 1;
  max-width: 50;
`
const Title = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  margin-right: 50px;
`

const Footer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  padding: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']}px;
  border-top-width: 1;
  border-top-color: ${({ theme }: { theme: ITheme }) => theme.colors.neutral300};
  border-bottom-left-radius: ${({ theme }: { theme: ITheme }) => theme.rounded.xl};
  border-bottom-right-radius: ${({ theme }: { theme: ITheme }) => theme.rounded.xl};
`

const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 99;
`

const ContentBox = styled.View`
  padding-top: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-left: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-right: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
`

const Rows = styled.View`
  flex-direction: column;
  justify-content: space-between;
`

const Columns = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const DateItem = styled.TouchableOpacity`
  height: 40;
  width: 40;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const MonthItem = styled.TouchableOpacity``

const YearItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`

const CurrentMonth = styled(DateItem)`
  flex: 1;
  padding-left: ${40 / 3}px;
  align-items: flex-start;
`

const DateStyled = styled.View`
  align-content: center;
  align-items: center;
  justify-content: center;

  ${({ active, theme }: { active: boolean; theme: ITheme }) =>
    active &&
    css`
      background: ${theme.colors.neutral700};
      border-radius: 15;
      width: 30;
      height: 30;
    `}

  ${({ currentDate, theme }: { currentDate: boolean; theme: ITheme }) =>
    currentDate &&
    css`
      width: 30;
      height: 30;
      background: ${theme.colors.primary700};
      border-radius: 15;
    `}
`

interface IProps {
  value: Date
  title: string
  visible: boolean
  onPress: Function
  onClose: Function
  onSelect?: Function
  onCancel?: Function
}

const range = n => {
  return Array(...Array(n)).map((_, i) => i)
}

const rows = range(6)
const cols = range(7)

const getMatrix = (month: number, year: number) => {
  const matrix: any[] = []
  const date = new Date(year, month)

  let curDate: any = startOfWeek(date, { weekStartsOn: 1 })

  rows.forEach(() => {
    const week: any[] = []
    cols.forEach(() => {
      week.push(curDate)
      curDate = addDays(curDate, 1)
    })

    matrix.push(week)
  })

  return matrix
}

const DateList = ({
  data,
  month,
  currentDate,
  onSelectDate,
  setShowMonth
}: {
  data: Array<Array<Date>>
  month: number
  currentDate: Date
  onSelectDate: Function
  setShowMonth: Function
}) => {
  const setColor = item => {
    if (!isSameDay(new Date(item), new Date()) && compareAsc(item, new Date()) === -1) {
      return 'neutral400'
    }

    if (isSameDay(new Date(), item) || isSameDay(currentDate, item)) {
      return 'white'
    }

    return 'neutral700'
  }

  return (
    <>
      <Rows>
        <Columns>
          {data[0].map((item, idx) => (
            <DateItem disabled key={idx.toString()}>
              <Text text={format(item, 'EEEEE')} />
            </DateItem>
          ))}
        </Columns>
      </Rows>

      <Rows>
        <Columns>
          <CurrentMonth onPress={() => setShowMonth(true)}>
            <Text text={format(currentDate, 'MMMM yyyy')} fontWeight="bold" />
          </CurrentMonth>
        </Columns>
      </Rows>

      {data.map((items, idx) => (
        <Rows key={idx.toString()}>
          <Columns>
            {items.map((item, idx1) => (
              <DateItem
                key={idx1.toString()}
                disabled={getMonth(item) !== month}
                onPress={() => {
                  onSelectDate(item)
                }}
              >
                {getMonth(item) === month && (
                  <DateStyled currentDate={isSameDay(new Date(), item)} active={isSameDay(currentDate, item)}>
                    <Text text={format(item, 'd')} color={setColor(item)} />
                  </DateStyled>
                )}
              </DateItem>
            ))}
          </Columns>
        </Rows>
      ))}
    </>
  )
}

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

const MonthColumns = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`

const MonthList = ({
  month,
  year,
  onSelectMonth,
  setShowYear
}: {
  month: number
  year: number
  onSelectMonth: Function
  setShowYear: Function
}) => {
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

  return (
    <>
      <Rows>
        <Columns>
          <CurrentMonth onPress={() => setShowYear(true)}>
            <Text text={year.toString()} fontWeight="bold" margin={{ bottom: 'xl' }} />
          </CurrentMonth>
        </Columns>
      </Rows>

      <Rows>
        <MonthColumns>
          {months.map((item, idx) => (
            <MonthItem key={idx.toString()} onPress={() => onSelectMonth(idx)}>
              <MonthStyled active={idx === month}>
                <Text text={item} />
              </MonthStyled>
            </MonthItem>
          ))}
        </MonthColumns>
      </Rows>
    </>
  )
}

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

const YearList = ({ year, onSelect }: { year: number; onSelect: Function }) => {
  const data: Array<string> = []
  for (let i = getYear(new Date()) - 5; i < getYear(new Date()) + 15; i += 1) {
    data.push(i.toString())
  }

  const [years, setYears] = useState<Array<string>>(data)

  const loadMore = () => {
    const latest = Number(years[years.length - 1])
    for (let i = latest; i < latest + 15; i += 1) {
      years.push(i.toString())
    }

    setYears(years)
  }

  return (
    <Rows>
      <FlatList
        style={{ maxHeight: 200 }}
        numColumns={3}
        data={years}
        renderItem={({ item }) => (
          <YearItem onPress={() => onSelect(item)}>
            <YearStyled active={Number(item) === year}>
              <Text text={item.toString()} />
            </YearStyled>
          </YearItem>
        )}
        keyExtractor={item => item.toString()}
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
      />
    </Rows>
  )
}

const Calendar: FC<IProps> = ({ value, title, visible, onClose, onSelect, onCancel, onPress }) => {
  const [fadeAnim] = useState(new Animated.Value(0))
  const [val, setVal] = useState(value)
  const [showMonth, setShowMonth] = useState(false)
  const [showYear, setShowYear] = useState(false)

  const [selectedMonth, setSelectedMonth] = useState(getMonth(val))
  const [selectedYear, setSelectedYear] = useState(getYear(val))

  const matrix = getMatrix(selectedMonth, selectedYear)

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100
      }).start()
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100
      }).start()
    }
  }, [visible])

  return visible ? (
    <Animated.View style={{ opacity: fadeAnim }}>
      <Box>
        <ModalContent>
          <Header>
            <ButtonWrap>
              <Button onPress={() => onClose()}>
                <FeatherIcon name="x" size="xl" />
              </Button>
            </ButtonWrap>
            <Title>
              <Text text={title} />
            </Title>
          </Header>

          <ContentBox>
            {!showMonth && !showYear && (
              <DateList
                data={matrix}
                currentDate={val}
                onSelectDate={date => {
                  setVal(date)
                  onPress(date)
                }}
                month={selectedMonth}
                setShowMonth={val => setShowMonth(val)}
              />
            )}

            {showMonth && !showYear && (
              <MonthList
                month={selectedMonth}
                year={selectedYear}
                setShowYear={val => setShowYear(val)}
                onSelectMonth={m => {
                  setSelectedMonth(m)
                  setVal(setMonth(val, m))
                  setShowMonth(false)
                }}
              />
            )}

            {showYear && (
              <YearList
                year={selectedYear}
                onSelect={y => {
                  setSelectedYear(y)
                  setVal(setYear(val, y))
                  setShowYear(false)
                }}
              />
            )}
          </ContentBox>

          <Footer>
            <Button
              style={{ flex: 1 }}
              margin={{ right: '2xl' }}
              title="Cancel"
              variant="outlined"
              color="neutral"
              onPress={() => onCancel && onCancel()}
            />
            <Button
              style={{ flex: 1 }}
              variant="contained"
              title="Select"
              color="neutral"
              onPress={() => {
                if (onSelect) onSelect(val)
              }}
            />
          </Footer>
        </ModalContent>

        <Overlay />
      </Box>
    </Animated.View>
  ) : null
}

export default Calendar
