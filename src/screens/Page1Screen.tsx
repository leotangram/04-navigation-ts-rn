import React, { FC, useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { styles, colors } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'

interface Page1ScreenProps extends DrawerScreenProps<any, any> {}

const Page1Screen: FC<Page1ScreenProps> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        // <Button onPress={() => navigation.toggleDrawer()} title="Menu" />
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{ marginLeft: 10 }}
        >
          <Icon name="menu-outline" size={35} color={colors.primary} />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text style={{ fontSize: 20, marginVertical: 20 }}>
        Navigation with Arguments
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Peter'
            })
          }
          style={{ ...styles.bigButton, backgroundColor: '#5856d6' }}
        >
          <Icon name="body-outline" size={35} color="#ffffff" />
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'María'
            })
          }
          style={{ ...styles.bigButton, backgroundColor: '#ff9427' }}
        >
          <Icon name="woman-outline" size={35} color="#ffffff" />
          <Text style={styles.bigButtonText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Page1Screen
