import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigator/StackNavigator'
import BasicLateralMenu from './src/navigator/BasicLateralMenu'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BasicLateralMenu />
    </NavigationContainer>
  )
}

export default App
