import { StyleSheet } from 'react-native'

export const colors = {
  primary: '#5856d6'
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  bigButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    height: 100,
    justifyContent: 'center',
    marginRight: 10,
    width: 100
  },
  bigButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  avatar: {
    borderRadius: 100,
    height: 150,
    width: 150
  },
  menuContainer: {
    marginHorizontal: 50,
    marginVertical: 30
  },
  menuButton: {
    marginVertical: 10
  },
  menuItem: {
    fontSize: 20
  }
})
