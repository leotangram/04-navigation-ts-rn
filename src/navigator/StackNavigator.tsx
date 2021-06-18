import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Page1Screen from '../screens/Page1Screen'
import Page2Screen from '../screens/Page2Screen'
import Page3Screen from '../screens/Page3Screen'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Page2Screen"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        }
      }}
    >
      <Stack.Screen
        name="Page1Screen"
        component={Page1Screen}
        options={{ title: 'Page 1' }}
      />
      <Stack.Screen
        name="Page2Screen"
        component={Page2Screen}
        options={{ title: 'Page 2' }}
      />
      <Stack.Screen
        name="Page3Screen"
        component={Page3Screen}
        options={{ title: 'Page 3' }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
