import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tab1Screen from '../screens/Tab1Screen'
import Tab2Screen from '../screens/Tab2Screen'
import StackNavigator from './StackNavigator'
import { colors } from '../theme/appTheme'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#ffffff'
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{ title: 'Tab1' }}
      />
      <Tab.Screen
        name="Tab2Screen"
        component={Tab2Screen}
        options={{ title: 'Tab2' }}
      />
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ title: 'Stack' }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
