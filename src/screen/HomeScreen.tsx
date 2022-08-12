import { View, Text, Image, Button } from 'react-native'
import { StackNavigatorProps } from '../navigation/StackNavigatorParamList'
import useLoggedInUser from '../hooks/useLoggedInUser'
import { AntDesign } from '@expo/vector-icons'

export default function HomeScreen({
  navigation,
  route,
}: StackNavigatorProps<'HomeScreen'>) {
  const { loggedInUser, setLoggedInUser } = useLoggedInUser()

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <Image
        source={{ uri: loggedInUser?.picture }}
        style={{ height: 50, width: 50, borderRadius: 25 }}
      />
      <Image
        source={require('../../assets/logo.png')}
        style={{ height: 50, width: 50, borderRadius: 25 }}
      />
      <AntDesign name='wechat' size={24} color='black' />

      {/* <Button
        title='Logout'
        onPress={() => {
          try {
            setLoggedInUser(undefined)
            auth.signOut()
            console.log('Signed out successfully')
          } catch (err) {
            console.error(err.message)
          }
        }}>
        Logout
      </Button> */}
    </View>
  )
}
