import { useState } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native'
import useLoggedInUser from '../hooks/useLoggedInUser'

export default function ModalScreen() {
  const { loggedInUser } = useLoggedInUser()
  const [job, setJob] = useState<string>('22')
  const [age, setAge] = useState<string>('SDE')

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ height: 70, width: 70, borderRadius: 35, marginRight: 16 }}
        />
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Dater</Text>
      </View>
      <Text
        style={{
          fontSize: 15,
          marginTop: 16,
          fontWeight: '600',
        }}>{`Welcome ${loggedInUser?.name}`}</Text>
      <Text style={{ color: 'green' }}>Step1: The profile pic</Text>

      <Text style={{ color: 'green', paddingTop: 16 }}>Step2: The Job</Text>
      <TextInput value={job} onChangeText={setJob} />

      <Text style={{ color: 'green' }}>Step3: The age</Text>
      <TextInput value={age} onChangeText={setAge} />

      <View style={{ position: 'absolute', bottom: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#9DD8B0',
            padding: 16,
            borderRadius: 16,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Update profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
