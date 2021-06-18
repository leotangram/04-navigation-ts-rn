import React from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'

interface Page3ScreenProps extends StackScreenProps<any, any> {}

const Page3Screen: FC<Page3ScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3Screen</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button title="Go to Page 1" onPress={() => navigation.popToTop()} />
    </View>
  )
}

export default Page3Screen
