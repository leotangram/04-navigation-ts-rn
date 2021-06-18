import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, Text } from 'react-native'
import Tab1Screen from '../screens/Tab1Screen'
import Tab2Screen from '../screens/Tab2Screen'
import StackNavigator from './StackNavigator'
import { colors } from '../theme/appTheme'
import TopTabNavigator from './TopTabNavigator'

const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator()

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      barStyle={{
        backgroundColor: colors.primary
      }}
      sceneAnimationEnabled
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '1'
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break
            case 'TopTabNavigator':
              iconName = 'T2'
              break
            case 'StackNavigator':
              iconName = 'ST'
              break
          }
          return <Text style={{ color }}>{iconName}</Text>
        }
      })}
    >
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{ title: 'Tab1' }}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{ title: 'Tab2' }}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ title: 'Stack' }}
      />
    </BottomTabAndroid.Navigator>
  )
}

const BottomTabIOS = createBottomTabNavigator()

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
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
            case 'TopTabNavigator':
              iconName = 'T2'
              break
            case 'StackNavigator':
              iconName = 'ST'
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
      <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1'
        }}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{ title: 'Tab2' }}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ title: 'Stack' }}
      />
    </BottomTabIOS.Navigator>
  )
}

export default Tabs
