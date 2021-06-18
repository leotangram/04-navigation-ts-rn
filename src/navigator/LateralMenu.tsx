import React, { FC } from 'react'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView
} from '@react-navigation/drawer'
import {
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { styles } from '../theme/appTheme'
import SettingsScreen from '../screens/SettingsScreen'
import Tabs from './Tabs'

const Drawer = createDrawerNavigator()

const LateralMenu = () => {
  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerContent={props => <InternalMenu {...props} />}
      drawerType={width > 768 ? 'permanent' : 'front'}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export default LateralMenu

const InternalMenu: FC<DrawerContentComponentProps<DrawerContentOptions>> = ({
  navigation
}) => {
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
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.menuButton}
        >
          <Text style={styles.menuItem}>Navigation Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuButton}
        >
          <Text style={styles.menuItem}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}
