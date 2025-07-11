import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Link } from 'expo-router'
import Google from '@/assets/images/google-logo.svg'
import { Colors } from '@/constants/Colors'

type Props = {}

const SocialLoginButtons = (props: Props) => {
  return (
     <View style={styles.socialLoginWrapper}>
          <Animated.View entering={FadeInDown.delay(300).duration(500).springify()}>
          <Link href={"/signup"} asChild>
            <TouchableOpacity style={styles.button}>
              <Ionicons 
              name="mail-outline"
              size={20}
              color={Colors.black}/>
              <Text style={styles.btnTxt}>Continue With Email</Text>
            </TouchableOpacity>
          </Link>
          </Animated.View>
          
          <Animated.View entering={FadeInDown.delay(700).duration(500).springify()}>
            <TouchableOpacity style={styles.button}>
              <Google width={20} height={20}/>
              <Text style={styles.btnTxt}>Continue With Google</Text>
            </TouchableOpacity>    
          </Animated.View>
          
          <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
            <TouchableOpacity style={styles.button}>
              <Ionicons 
              name="logo-apple"
              size={20}
              color={Colors.black}/>
              <Text style={styles.btnTxt}>Continue With Apple</Text>
            </TouchableOpacity> 
          </Animated.View>     
          </View>
  )
}

export default SocialLoginButtons

const styles = StyleSheet.create({
socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.black,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    marginBottom: 20,//25
    marginTop: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,

  },
})