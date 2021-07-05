import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '~/screens/Home'
import Profile from '~/screens/Profile'

const screens = [Home, Profile]

const { Navigator, Screen } = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        {screens.map((component) => (
          <Screen
            component={component}
            key={component.name}
            name={component.name}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  )
}

export default App
