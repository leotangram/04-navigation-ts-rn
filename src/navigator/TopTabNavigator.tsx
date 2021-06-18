import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../theme/appTheme'
import ChatScreen from '../screens/ChatScreen'
import ContactsScreen from '../screens/ContactsScreen'
import AlbumsScreen from '../screens/AlbumsScreen'

const Tab = createMaterialTopTabNavigator()

const TopTabNavigator = () => {
  const { top } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#ffffff'
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '1'
          switch (route.name) {
            case 'Chat':
              iconName = 'Ch'
              break
            case 'Contacts':
              iconName = 'Co'
              break
            case 'Albums':
              iconName = 'Al'
              break
          }
          return <Text style={{ color }}>{iconName}</Text>
        }
      })}
      style={{
        paddingTop: top
      }}
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: colors.primary
        },
        pressColor: colors.primary,
        showIcon: true,
        style: {
          shadowColor: 'transparent',
          elevation: 0
        }
      }}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  )
}

export default TopTabNavigator
