import React, { useEffect } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Animated, Easing } from 'react-native'

import { theme, ITextSize, IColor } from '../index'

interface IProps extends IColor, ITextSize {
  name: string
  spin?: boolean
}

const FeatherIcon: React.FC<IProps> = ({ name, size = 'base', color = 'neutral700', spin = false }) => {
  const spinAnim = new Animated.Value(0)

  const loadingFunc = () => {
    if (spin) {
      spinAnim.setValue(0)
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      }).start(() => loadingFunc())
    }
  }

  useEffect(() => {
    loadingFunc()
  }, [spin])

  const spinning = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <Animated.View style={{ transform: [{ rotate: spinning }] }}>
      <Feather name={name} color={theme.colors[color as string]} size={theme.textSize[size as string]} />
    </Animated.View>
  )
}

export default FeatherIcon
