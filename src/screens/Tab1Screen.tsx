import React from 'react'
import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles, colors } from '../theme/appTheme'

const Tab1Screen = () => {
  const { top } = useSafeAreaInsets()

  useEffect(() => {
    console.log('Tab1Screen')
  }, [])

  return (
    <View style={{ ...styles.globalMargin, marginTop: top + 20 }}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="aperture-outline" size={80} color={colors.primary} />
        <Icon name="bandage-outline" size={80} color={colors.primary} />
        <Icon name="balloon-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  )
}

export default Tab1Screen
