import React from 'react'
import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colors } from '../theme/appTheme'
import TouchableIcon from '../components/TouchableIcon'

const Tab1Screen = () => {
  const { top } = useSafeAreaInsets()

  useEffect(() => {
    console.log('Tab1Screen')
  }, [])

  return (
    <View style={{ ...styles.globalMargin, marginTop: top + 20 }}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="bandage-outline" />
        <TouchableIcon iconName="balloon-outline" />
      </Text>
    </View>
  )
}

export default Tab1Screen
