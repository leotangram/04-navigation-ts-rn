import React, { FC } from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Page1ScreenProps extends StackScreenProps<any, any> {}

const Page1Screen: FC<Page1ScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
    </View>
  )
}

export default Page1Screen
