import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/appTheme'

interface ITouchableIconProps {
  iconName: string
}

const TouchableIcon: FC<ITouchableIconProps> = ({ iconName }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Icon name={iconName} size={80} color={colors.primary} />
    </TouchableOpacity>
  )
}

export default TouchableIcon
