import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import { ParamList } from '~/types/navigation'

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamList, 'Home'>>()

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        style='auto'
      />
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'John' })}
        title='Go to Profile page'
      />
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

export default Home
