import React from 'react'
import { useEffect } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme'

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen')
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color="#900" />
      </Text>
    </View>
  )
}

export default Tab1Screen
