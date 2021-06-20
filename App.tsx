import 'react-native-gesture-handler'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/context/AuthContext'
import LateralMenu from './src/navigator/LateralMenu'

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <LateralMenu />
      </NavigationContainer>
    </AppState>
  )
}

const AppState: FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default App
