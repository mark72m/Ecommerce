import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {router, Stack} from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors} from '../constants/Colors'
import React from 'react'
import InputField from '@/components/inputField'

type Props = {}

const SignUpScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{headerTitle: '✍️', headerLeft: () => (
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name='close' size={24} color={Colors.black}/>
      </TouchableOpacity>
  )}}/>
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      <InputField 
      placeholder='Email Address'
      placeholderTextColor={Colors.gray}
      autoCapitalize='none'
      keyboardType='email-address'/>

      <InputField 
      placeholder='Enter Password'
      placeholderTextColor={Colors.gray}
      secureTextEntry={true}/>

      <InputField 
      placeholder='Confirm Password'
      placeholderTextColor={Colors.gray}
      secureTextEntry={true}/>
    </View>
    </>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    letterSpacing: 1.3,
    color: Colors.black,
    marginBottom: 50
  },

})