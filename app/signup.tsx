import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {router, Stack} from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors} from '../constants/Colors'
import React from 'react'

type Props = {}

const SignUpScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{headerTitle: 'Sign Up', headerLeft: () => (
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name='close' size={14} color={Colors.black}/>
      </TouchableOpacity>
  )}}/>
    <View style={styles.container}>
      <Text>SignUp Screen</Text>
    </View>
    </>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})