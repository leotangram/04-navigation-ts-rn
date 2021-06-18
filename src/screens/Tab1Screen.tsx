import React from 'react'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen')
  }, [])

  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  )
}

export default Tab1Screen
