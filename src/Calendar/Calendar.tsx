import React, { FC, useState, useEffect } from 'react'
import styled, { css } from 'styled-components/native'
import { Animated, Dimensions } from 'react-native-web'
import { getYear, getMonth, startOfWeek, addDays, format, compareAsc, isSameDay } from 'date-fns'

import { Button, Text, ITheme } from '../index'
import { FeatherIcon } from '../FeatherIcon'

const Container = styled.View`
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  height: ${Dimensions.get('window').height};
  width: ${Dimensions.get('window').width};
`

const ModalContent = styled.View`
  z-index: 100;
  width: 320;
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

const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 99;
`

const CalendarStyled = styled.View`
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

const Item = styled.TouchableOpacity`
  height: 40;
  width: 40;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const DateStyled = styled.View`
  align-content: center;
  align-items: center;
  justify-content: center;

  ${({ active, theme }: { active: boolean; theme: ITheme }) =>
    active &&
    css`
      background: ${theme.colors.neutral700};
      color: ${theme.colors.white};
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
      color: ${theme.colors.white};
      border-radius: 15;
    `}
`

const MonthContainer = styled(Item)`
  flex: 1;
  padding-left: ${40 / 3}px;
  align-items: flex-start;
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

interface IProps {
  onPress: Function
  onClose: Function
  onSave?: Function
  onClear?: Function
  title: string
  visible: boolean
}

const range = n => {
  return Array(...Array(n)).map((_, i) => i)
}

const rows = range(6)
const cols = range(7)

const getMatrix = () => {
  const year = getYear(new Date())
  const month = getMonth(new Date())

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

const Calendar: FC<IProps> = ({ onPress, onClose, title, visible, onClear, onSave }) => {
  const matrix = getMatrix()
  const [fadeAnim] = useState(new Animated.Value(0))
  const [itemSelected, setItemSelected] = useState()

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

  const Modal = ({ children }) => {
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <Container fadeAnim={fadeAnim}>
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

            {children}

            <Footer>
              <Button
                clear
                style={{ flex: 1 }}
                margin={{ right: 'lg' }}
                title="Clear"
                variant="contained"
                color="neutral"
                onPress={() => onClear && onClear()}
              />
              <Button
                style={{ flex: 1 }}
                variant="contained"
                title="Save"
                color="neutral"
                onPress={() => onSave && onSave()}
              />
            </Footer>
          </ModalContent>

          <Overlay />
        </Container>
      </Animated.View>
    )
  }

  const setColor = item => {
    if (!isSameDay(new Date(item), new Date()) && compareAsc(item, new Date()) === -1) {
      return 'neutral400'
    }

    if (isSameDay(new Date(), item) || isSameDay(itemSelected, item)) {
      return 'white'
    }

    return 'neutral700'
  }

  const disableButton = item => {
    return getMonth(item) !== getMonth(new Date())
  }

  return visible ? (
    <Modal>
      <CalendarStyled>
        <Rows>
          <Columns>
            {matrix[0].map((item, idx) => {
              return (
                <Item disabled key={idx.toString()}>
                  <Text text={format(item, 'EEEEE')} />
                </Item>
              )
            })}
          </Columns>
        </Rows>

        <Rows>
          <Columns>
            <MonthContainer>
              <Text text={format(new Date(), 'MMMM yyyy')} fontWeight="bold" />
            </MonthContainer>
          </Columns>
        </Rows>

        {matrix.map((items, idx) => {
          return (
            <Rows key={idx.toString()}>
              <Columns>
                {items.map((item, idx1) => (
                  <Item
                    key={idx1.toString()}
                    disabled={disableButton(item)}
                    onPress={() => {
                      setItemSelected(item)
                      onPress(item)
                    }}
                  >
                    {getMonth(item) === getMonth(new Date()) && (
                      <DateStyled currentDate={isSameDay(new Date(), item)} active={isSameDay(itemSelected, item)}>
                        <Text text={format(item, 'd')} color={setColor(item)} />
                      </DateStyled>
                    )}
                  </Item>
                ))}
              </Columns>
            </Rows>
          )
        })}
      </CalendarStyled>
    </Modal>
  ) : null
}

export default Calendar
