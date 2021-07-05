import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '~/screens/Home'
import Profile from '~/screens/Profile'

const { Navigator, Screen } = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          component={Home}
          name='Home'
        />
        <Screen
          component={Profile}
          name='Profile'
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default App
