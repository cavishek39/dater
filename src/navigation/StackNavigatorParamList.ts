import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type StackNavigatorParamList = {
  HomeScreen: undefined
  ChatScreen: undefined
}

export type StackNavigatorProps<T extends keyof StackNavigatorParamList> = {
  navigation: NativeStackNavigationProp<StackNavigatorParamList, T>
  route: RouteProp<StackNavigatorParamList, T>
}
