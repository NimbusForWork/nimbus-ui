import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

import { theme, ITextSize, IColor } from '../index'

interface IProps extends IColor, ITextSize {
  name: string
}

const FeatherIcon: React.FC<IProps> = ({ name, size = 'base', color = 'neutral700' }) => {
  return <Feather name={name} color={theme.colors[color as string]} size={theme.textSize[size as string]} />
}

export default FeatherIcon
