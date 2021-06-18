import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme'

const Page2Screen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.globalMargin}>
      <Text>Page2Screen</Text>
      <Button
        title="Go Page 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />
    </View>
  )
}

export default Page2Screen
