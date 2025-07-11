import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {Link, router, Stack} from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors} from '../constants/Colors'
import React from 'react'
import InputField from '@/components/InputField'

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

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.loginTxt}> Already Have an Account? {" "} 
            <Link href={"/signin"} asChild>
              <TouchableOpacity>
                <Text style={styles.loginTxtSpan}>SignIn</Text>
              </TouchableOpacity>
            </Link>
            </Text>
            <View style={styles.divider}/>
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
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 13,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: `600`
  },
  loginTxt: {
    marginBottom: 30,
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    marginBottom: 30,
    fontWeight: "600",
    color: Colors.primary,
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '50%',
    marginBottom: 30
  }

})