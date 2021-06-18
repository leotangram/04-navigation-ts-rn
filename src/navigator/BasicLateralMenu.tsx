import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useWindowDimensions } from 'react-native'
import StackNavigator from './StackNavigator'
import SettingsScreen from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator()

const BasicLateralMenu = () => {
  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerType={width > 768 ? 'permanent' : 'front'}
    >
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Drawer.Navigator>
  )
}

export default BasicLateralMenu
