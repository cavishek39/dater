import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import useAuth from '../hooks/useAuth'
import ChatScreen from '../screen/ChatScreen'
import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import useLoggedInUser from '../hooks/useLoggedInUser'

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
  const { loggedInUser } = useLoggedInUser()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!loggedInUser?.id ? (
        <Stack.Screen name='Login' component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Chat' component={ChatScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}
