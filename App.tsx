import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
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
