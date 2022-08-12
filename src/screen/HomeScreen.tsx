import { View, Image, TouchableOpacity, Text } from 'react-native'
import { StackNavigatorProps } from '../navigation/StackNavigatorParamList'
import useLoggedInUser from '../hooks/useLoggedInUser'
import { AntDesign } from '@expo/vector-icons'
import Swiper from 'react-native-deck-swiper'
import { Dimensions } from 'react-native'

const DUMMY_LIST = [
  {
    firstName: 'ABC',
    lastName: 'BCA',
    occupation: 'Thief',
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTot-xQplbHedtlPpQTAkT8le5VW_MpAh4I3w&usqp=CAU',
    age: 40,
  },
  {
    firstName: 'ABC',
    lastName: 'BCA',
    occupation: 'Thief',
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTot-xQplbHedtlPpQTAkT8le5VW_MpAh4I3w&usqp=CAU',
    age: 40,
  },
  {
    firstName: 'ABC',
    lastName: 'BCA',
    occupation: 'Thief',
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTot-xQplbHedtlPpQTAkT8le5VW_MpAh4I3w&usqp=CAU',
    age: 40,
  },
]

export default function HomeScreen({
  navigation,
  route,
}: StackNavigatorProps<'HomeScreen'>) {
  const { loggedInUser, setLoggedInUser } = useLoggedInUser()

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 10,
        }}>
        <TouchableOpacity>
          <Image
            source={{ uri: loggedInUser?.picture }}
            style={{ height: 40, width: 40, borderRadius: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/logo.png')}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name='wechat' size={40} color='#9DD8B0' />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Swiper
          containerStyle={{ backgroundColor: 'transparent' }}
          animateCardOpacity
          cards={DUMMY_LIST}
          showSecondCard
          stackSize={5}
          cardIndex={0}
          verticalSwipe={false}
          renderCard={(card) => (
            <View
              style={{
                // backgroundColor: 'white',
                backgroundColor: 'pink',
                height: Dimensions.get('window').height / 2,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}>
              <Image
                source={{ uri: card.photoUrl }}
                style={{
                  height: '100%',
                  width: '100%',
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <View
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>{`${card.firstName} ${card.lastName}`}</Text>
                  <Text>{`${card.age}`}</Text>
                </View>
                <Text>{`${card.occupation}`}</Text>
              </View>
            </View>
          )}
        />
      </View>
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
    </>
  )
}
