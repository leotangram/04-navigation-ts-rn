import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LateralMenu from './src/navigator/LateralMenu'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicLateralMenu /> */}
      <LateralMenu />
    </NavigationContainer>
  )
}

export default App
