import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import InputField from '@/components/InputField'
import SocialLoginButtons from '@/components/SocialLoginButtons'
import { Colors } from '@/constants/Colors'

type Props = {}

const SignInScreen = (props: Props) => {
  return (

    <>
        <Stack.Screen options={{headerTitle: '🧗‍♂️', headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name='close' size={24} color={Colors.black}/>
          </TouchableOpacity>
      )}}/>
        <View style={styles.container}>
          <Text style={styles.title}>📥 LogIn To Your Account</Text>
    
          <InputField 
          placeholder='Email Address'
          placeholderTextColor={Colors.gray}
          autoCapitalize='none'
          keyboardType='email-address'/>
    
          <InputField 
          placeholder='Enter Password'
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}/>
    
    
          <TouchableOpacity style={styles.btn} onPress={() => {
          router.dismissAll();
          router.push('/(tabs)');
        }}>
            <Text style={styles.btnTxt}>Log In</Text>
          </TouchableOpacity>
    
          <Text style={styles.loginTxt}> Don't Have an Account? {" "} 
                <Link href={"/signin"} asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTxtSpan}>SignUp</Text>
                  </TouchableOpacity>
                </Link>
                </Text>
                
                <View style={styles.divider}/>
    
                <SocialLoginButtons emailHref={"/signin"}/>
        </View>
        </>

    
  )
}

export default SignInScreen

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
      backgroundColor: Colors.cynan,
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
      marginBottom: 20,
      fontSize: 14,
      fontWeight: "600",
      color: Colors.black,
      lineHeight: 24,
    },
    loginTxtSpan: {
      marginBottom: 20,
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