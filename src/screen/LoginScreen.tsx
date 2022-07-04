import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

export default function LoginScreen() {
  const { signInWithGoogle } = useAuth()
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title='Login' onPress={signInWithGoogle} />
    </View>
  )
}
