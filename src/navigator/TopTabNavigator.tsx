import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../theme/appTheme'
import ChatScreen from '../screens/ChatScreen'
import ContactsScreen from '../screens/ContactsScreen'
import AlbumsScreen from '../screens/AlbumsScreen'
import Icon from 'react-native-vector-icons/Ionicons'

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
          let iconName: string = ''
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline'
              break
            case 'Contacts':
              iconName = 'people-outline'
              break
            case 'Albums':
              iconName = 'albums-outline'
              break
          }
          return <Icon name={iconName} size={20} color={color} />
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
