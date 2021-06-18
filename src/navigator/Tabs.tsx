import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'
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
        labelStyle: {
          fontSize: 15
        },
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '1'
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break
            case 'Tab2Screen':
              iconName = 'T2'
              break
            case 'StackNavigator':
              iconName = 'T3'
              break
          }
          return <Text style={{ color }}>{iconName}</Text>
        }
      })}
    >
      {/* <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{ color: props.color }}>T1</Text>
        }}
      /> */}
      <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1'
        }}
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
