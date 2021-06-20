import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

interface PersonScreenProps
  extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

const PersonScreen: FC<PersonScreenProps> = ({ navigation, route }) => {
  const { changeUserName } = useContext(AuthContext)
  const params = route.params

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
    changeUserName(params.name)
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  )
}

export default PersonScreen
