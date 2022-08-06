import { createContext, useEffect } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import { useState } from 'react'

const DUMMY_USER = {
  username: 'dummy',
  token: 'dummy',
}

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: any) => {
  const [userToken, setUserToken] = useState<string | undefined>('')

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '690333661466-5hl5alr205n848q3ck6kc1f0tikngbgt.apps.googleusercontent.com',
    expoClientId:
      '690333661466-jteqqrh00oddtjitrvmk7mp4cvsjk260.apps.googleusercontent.com',
    scopes: ['openid', 'profile', 'email'],
  })

  const signInWithGoogle = async () => {
    console.log('Login initiated')
    promptAsync({
      showInRecents: true,
    })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response
      setUserToken(authentication?.accessToken)
      console.log('Authentication response ', authentication)
    }
  }, [response])

  const value = {
    signInWithGoogle,
    DUMMY_USER,
    userToken,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
