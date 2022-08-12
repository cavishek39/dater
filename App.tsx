import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import StackNavigator from './src/navigation/StackNavigator'
import { AuthProvider } from './src/context/AuthContext'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        style={'auto'}
        networkActivityIndicatorVisible
        // backgroundColor={backgroundColor}
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <AuthProvider>
            <StackNavigator />
          </AuthProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
