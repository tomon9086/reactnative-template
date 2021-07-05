import { RouteProp, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { ParamList } from '~/types/navigation'

const Profile = () => {
  const route = useRoute<RouteProp<ParamList, 'Profile'>>()

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        style='auto'
      />
      <Text>Hello, {route.params.name}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile
