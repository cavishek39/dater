import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigatorProps } from '../navigation/StackNavigatorParamList'

export default function HomeScreen({
  navigation,
  route,
}: StackNavigatorProps<'HomeScreen'>) {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}
