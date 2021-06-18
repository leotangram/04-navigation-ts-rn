import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme'

const Page2Screen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Go back',
      title: 'Hello'
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Go Page 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />
    </View>
  )
}

export default Page2Screen
