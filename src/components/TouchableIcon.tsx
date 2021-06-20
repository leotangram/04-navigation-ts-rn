import React, { FC } from 'react'
import { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

interface ITouchableIconProps {
  iconName: string
}

const TouchableIcon: FC<ITouchableIconProps> = ({ iconName }) => {
  const { changeFavoriteIcon } = useContext(AuthContext)

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={80} color={colors.primary} />
    </TouchableOpacity>
  )
}

export default TouchableIcon
