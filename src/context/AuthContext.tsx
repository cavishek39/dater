import { createContext, useEffect, useMemo } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import { useState } from 'react'
import useLoggedInUser from '../hooks/useLoggedInUser'

const DUMMY_USER = {
  username: 'dummy',
  token: 'dummy',
}

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: any) => {
  const { setLoggedInUser, loggedInUser } = useLoggedInUser()
  const [error, setError] = useState(null)

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
    }).catch((error) => setError(error))
  }

  async function getUserInfo(userToken?: string) {
    console.log('userToken', userToken)
    try {
      let userInfo = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      userInfo.json().then((ui) => {
        setLoggedInUser(ui)
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response
      getUserInfo(authentication?.accessToken)
      console.log('Authentication response ', authentication)
    }
  }, [response])

  const memoedValue = useMemo(
    () => ({
      signInWithGoogle,
      error,
      setLoggedInUser,
    }),
    [loggedInUser, error, signInWithGoogle, setLoggedInUser]
  )

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  )
}
