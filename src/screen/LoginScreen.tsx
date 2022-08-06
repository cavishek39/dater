import { View, Text, Button, Image } from 'react-native'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { UserInfo } from '../types/userInfo'
import useLoggedInUser from '../hooks/useLoggedInUser'

export default function LoginScreen() {
  const { signInWithGoogle, userToken } = useAuth()
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const { setLoggedInUser } = useLoggedInUser()
  async function getUserInfo(userToken: string) {
    console.log('userToken', userToken)
    try {
      let userInfo = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      userInfo.json().then((ui) => {
        setUserInfo(ui)
        setLoggedInUser(ui)
      })
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <View>
      <Button
        title={userToken ? 'Get user info' : 'Login'}
        onPress={
          userToken ? () => getUserInfo(userToken) : () => signInWithGoogle()
        }
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image
          source={{ uri: userInfo?.picture }}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
        <Text>{userInfo?.given_name}</Text>
      </View>
    </View>
  )
}
