import { createContext } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import { useState } from 'react'

const DUMMY_USER = {
  username: 'dummy',
  token: 'dummy',
}

export const AuthContext = createContext({})

const config = {
  androidClientId:
    '976645881698-vnt7fkhb2i3bu9gf433jtgogesqeseef.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  permissions: ['public_profile', 'email', 'gender', 'location'],
}

export const AuthProvider = ({ children }: any) => {
  const [userToken, setUserToken] = useState('')
  const [userInfo, setUserInfo] = useState('')

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '976645881698-vnt7fkhb2i3bu9gf433jtgogesqeseef.apps.googleusercontent.com',
    expoClientId:
      '690333661466-jteqqrh00oddtjitrvmk7mp4cvsjk260.apps.googleusercontent.com',
  })

  const signInWithGoogle = async () => {
    console.log('Login initiated')
    promptAsync({
      showInRecents: true,
    })
  }
  const value = { signInWithGoogle, DUMMY_USER }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
