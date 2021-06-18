import React, { FC } from 'react'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView
} from '@react-navigation/drawer'
import { Image, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/appTheme'
import StackNavigator from './StackNavigator'
import SettingsScreen from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator()

const LateralMenu = () => {
  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerContent={props => <InternalMenu {...props} />}
      drawerType={width > 768 ? 'permanent' : 'front'}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export default LateralMenu

const InternalMenu: FC<DrawerContentComponentProps<DrawerContentOptions>> =
  () => {
    return (
      <DrawerContentScrollView>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
            }}
            style={styles.avatar}
          />
        </View>
      </DrawerContentScrollView>
    )
  }
