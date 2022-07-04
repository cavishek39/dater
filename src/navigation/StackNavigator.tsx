import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ChatScreen from '../screen/ChatScreen'
import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
  const userToken: boolean = false
  return (
    <Stack.Navigator>
      {!userToken ? (
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
