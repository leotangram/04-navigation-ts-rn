import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

const AlbumsScreen = () => {
  const { authState, logout } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {authState.isLoggedIn && <Button title="Loogut" onPress={logout} />}
    </View>
  )
}

export default AlbumsScreen
