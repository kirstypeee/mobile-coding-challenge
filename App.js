import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AcceptedBookings from './screens/acceptedBookings/AcceptedBookings'
import DeclinedBookings from './screens/declinedBookings/DeclinedBookings'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AcceptedBookings}
          options={{title: 'Meetings'}}
        />
        <Stack.Screen name="Declined Meetings" component={DeclinedBookings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
