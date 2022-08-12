import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'

export default function LoginScreen() {
  const { signInWithGoogle } = useAuth()

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode='cover'
        style={{ flex: 1 }}
        source={require('../../assets/logo.png')}
      />
      <TouchableOpacity
        onPress={signInWithGoogle}
        style={{
          position: 'absolute',
          bottom: 60,
          left: 70,
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 24,
        }}>
        <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 15 }}>
          Sign in & start find your one
        </Text>
      </TouchableOpacity>
    </View>
  )
}
