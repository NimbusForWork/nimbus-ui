import React, { FC, useState, useEffect } from 'react'
import styled, { css } from 'styled-components/native'
import { Animated, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import {
  startOfWeek,
  addDays,
  getMonth,
  getYear,
  format,
  isSameDay,
  compareAsc,
  getHours,
  getMinutes,
  set,
  addHours,
  subHours,
  addMinutes,
  subMinutes,
  isAfter
} from 'date-fns'

import { ITheme, Button } from '../index'
import { Text } from '../Text'
import baseColor from '../color'
import { FeatherIcon } from '../FeatherIcon'
// import { Slider } from '../Slider'

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
  max-height: 475;
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

const Datewrap = styled.View``

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

  ${({ currentDate, theme, levelColor }: { currentDate: boolean; theme: ITheme; levelColor: string }) =>
    currentDate &&
    css`
      width: 30;
      height: 30;
      background: ${theme.colors[`primary${levelColor}`]};
      border-radius: 15;
    `}
`

interface IProps {
  mode?: 'date' | 'time' | 'date-time'
  value: Date
  /** ### title deprecated. */
  title?: string
  visible: boolean
  minDate?: Date
  incrementMinutes?: number
  onPress: Function
  /** ### onClose deprecated. Using onCancel to instead */
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
  minDate,
  month,
  year,
  currentDate,
  onSelectDate,
  setShowMonth
}: {
  data: Array<Array<Date>>
  minDate?: Date
  month: number
  year: number
  currentDate: Date
  onSelectDate: Function
  setShowMonth: Function
}) => {
  const setColor = item => {
    let color = 'neutral700'
    if (!isSameDay(new Date(item), new Date()) && compareAsc(item, new Date()) === -1) {
      color = 'neutral400'
    }

    if (minDate && compareAsc(item, minDate) === -1) {
      color = 'neutral400'
    }

    if (isSameDay(new Date(), item) || isSameDay(currentDate, item)) {
      return 'white'
    }

    return color
  }

  const disabledButton = item => {
    let rs = getMonth(item) !== month

    if (minDate && isAfter(minDate, item)) {
      rs = true
    }

    return rs
  }

  const displayMonthYear = set(new Date(), { month, year })

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
            <Text text={format(displayMonthYear, 'MMMM yyyy')} fontWeight="bold" />
          </CurrentMonth>
        </Columns>
      </Rows>

      {data.map((items, idx) => (
        <Rows key={idx.toString()}>
          <Columns>
            {items.map((item, idx1) => (
              <DateItem
                key={idx1.toString()}
                disabled={disabledButton(item)}
                onPress={() => {
                  onSelectDate(item)
                }}
              >
                {getMonth(item) === month && (
                  <DateStyled
                    currentDate={isSameDay(new Date(), item)}
                    levelColor={isSameDay(currentDate, item) ? '700' : '300'}
                    active={isSameDay(currentDate, item)}
                  >
                    <Text text={format(item, 'd')} color={setColor(item) as any} />
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

const TimeWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 56;
  border-top-color: ${baseColor.gray300};
  border-top-width: 1;
  border-style: solid;
`

const Time = ({ date }: { date: Date }) => {
  return (
    <TimeWrap>
      <Text text={format(date, 'hh')} size="lg" />
      <Text text=":" margin={{ right: '2xl', left: '2xl' }} color="neutral500" />
      <Text text={format(date, 'mm')} size="lg" margin={{ right: '2xl' }} />
      <Text text={format(date, 'a')} margin={{ left: '2xl', right: '2xl' }} color="neutral500" />
      <FeatherIcon name="chevron-up" color="primary700" size="lg" />
    </TimeWrap>
  )
}

const TimeViewWrap = styled.View`
  display: ${props => (props.show ? 'flex' : 'none')};
`

const TimeViewHeader = styled.View`
  height: 50;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-bottom-color: ${baseColor.gray300};
  border-bottom-width: 1;
  border-style: solid;
`

const TimeViewTitle = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
`

const TimeContentBox = styled.View`
  padding-top: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-left: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  padding-right: ${({ theme }: { theme: ITheme }) => theme.spacing['2xl']};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const TimeItem = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const TimeView = ({
  show,
  date,
  mode,
  incrementMinutes,
  onChange,
  onPress
}: {
  show: boolean
  date: Date
  mode: 'date' | 'time' | 'date-time'
  incrementMinutes: number
  onChange: Function
  onPress: Function
}) => {
  return (
    <TimeViewWrap show={show}>
      {mode !== 'time' && (
        <TouchableOpacity onPress={() => onPress()}>
          <TimeViewHeader>
            <TimeViewTitle>
              <Text text={format(date, 'E dd MMM, yyyy')} size="md" margin={{ right: '2xl' }} />
              <FeatherIcon name="chevron-down" color="primary700" size="lg" />
            </TimeViewTitle>
          </TimeViewHeader>
        </TouchableOpacity>
      )}

      <TimeContentBox>
        <TimeItem>
          <Button
            onPress={() => {
              const val = addHours(date, 1)
              onChange(val)
            }}
          >
            <FeatherIcon name="chevron-up" color="neutral500" size="lg" />
          </Button>

          <Text text={format(date, 'hh')} size="xl" fontWeight="bold" />

          <Button
            onPress={() => {
              const val = subHours(date, 1)
              onChange(val)
            }}
          >
            <FeatherIcon name="chevron-down" color="neutral500" size="lg" />
          </Button>
        </TimeItem>

        <TimeItem>
          <Button
            onPress={() => {
              const val = addMinutes(date, incrementMinutes)
              onChange(val)
            }}
          >
            <FeatherIcon name="chevron-up" color="neutral500" size="lg" />
          </Button>

          <Text text={format(date, 'mm')} size="xl" fontWeight="bold" />

          <Button
            onPress={() => {
              const val = subMinutes(date, incrementMinutes)
              onChange(val)
            }}
          >
            <FeatherIcon name="chevron-down" color="neutral500" size="lg" />
          </Button>
        </TimeItem>

        <TimeItem>
          <Button
            onPress={() => {
              const val = addHours(date, 12)
              onChange(val)
            }}
          >
            <FeatherIcon name="chevron-up" color="neutral500" size="lg" />
          </Button>

          <Text text={format(date, 'a')} size="lg" color="neutral500" />

          <Button
            onPress={() => {
              const val = subHours(date, 12)
              onChange(val)
            }}
          >
            <FeatherIcon name="chevron-down" color="neutral500" size="lg" />
          </Button>
        </TimeItem>
      </TimeContentBox>
    </TimeViewWrap>
  )
}

const Calendar: FC<IProps> = ({
  mode = 'date-time',
  value,
  visible,
  incrementMinutes = 1,
  minDate,
  onSelect,
  onCancel,
  onPress
}) => {
  const [fadeAnim] = useState(new Animated.Value(0))

  // const [val, setVal] = useState(set(value, { hours: getHours(new Date()), minutes: getMinutes(new Date()) }))
  const [val, setVal] = useState(set(value, { hours: getHours(value), minutes: getMinutes(value) }))

  const [showMonth, setShowMonth] = useState(false)
  const [showYear, setShowYear] = useState(false)
  const [showTime, setShowTime] = useState(mode === 'time')

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
          <ScrollView style={{ maxHeight: 475 }}>
            {!showTime && ['date', 'date-time'].includes(mode) && (
              <Datewrap>
                <ContentBox>
                  {!showMonth && !showYear && (
                    <DateList
                      minDate={minDate}
                      data={matrix}
                      currentDate={val}
                      onSelectDate={date => {
                        const hours = getHours(val)
                        const minutes = getMinutes(val)
                        const d = set(date, { hours, minutes })
                        setVal(d)
                        onPress(d)
                      }}
                      month={selectedMonth}
                      year={selectedYear}
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
                        setShowMonth(false)
                      }}
                    />
                  )}

                  {showYear && (
                    <YearList
                      year={selectedYear}
                      onSelect={y => {
                        setSelectedYear(y)
                        setShowYear(false)
                      }}
                    />
                  )}
                </ContentBox>

                {['time', 'date-time'].includes(mode) && (
                  <TouchableOpacity onPress={() => setShowTime(true)}>
                    <Time date={val} />
                  </TouchableOpacity>
                )}
              </Datewrap>
            )}

            {showTime && ['time', 'date-time'].includes(mode) && (
              <TimeView
                show={showTime}
                date={val}
                mode={mode}
                incrementMinutes={incrementMinutes}
                onPress={() => setShowTime(false)}
                onChange={date => {
                  const d = set(val, { hours: getHours(date), minutes: getMinutes(date) })
                  setVal(d)
                }}
              />
            )}

            <Footer>
              <Button
                style={{ flex: 1 }}
                margin={{ right: '2xl' }}
                title="Cancel"
                variant="outlined"
                color="primary"
                onPress={() => onCancel && onCancel()}
              />
              <Button
                style={{ flex: 1 }}
                variant="contained"
                title="Select"
                color="primary"
                onPress={() => {
                  if (onSelect) onSelect(val)
                }}
              />
            </Footer>
          </ScrollView>
        </ModalContent>

        <Overlay />
      </Box>
    </Animated.View>
  ) : null
}

export default Calendar
