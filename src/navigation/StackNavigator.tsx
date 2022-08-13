import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import useAuth from '../hooks/useAuth'
import ChatScreen from '../screen/ChatScreen'
import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import useLoggedInUser from '../hooks/useLoggedInUser'
import ModalScreen from '../screen/ModalScreen'

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
  const { loggedInUser } = useLoggedInUser()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!loggedInUser?.id ? (
        <Stack.Screen name='Login' component={LoginScreen} />
      ) : (
        <>
          <Stack.Group>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='ChatScreen' component={ChatScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name='ModalScreen' component={ModalScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  )
}
