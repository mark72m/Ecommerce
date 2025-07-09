import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Google from '@/assets/images/google-logo.svg'
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{headerShown: false}}/>

    <ImageBackground 
    source={require("@/assets/images/ecommerce-splash.jpg")}
    style={{flex: 1}}
    resizeMode="cover">

    <View style={styles.container}>
      
      {/* Texts */}
      <LinearGradient 
      colors={["transparent", 'rgba(255, 255, 255, 0.9)','rgba(255, 255, 255, 1)']} 
      style={styles.background}>

      <View style={styles.wrapper}>
      <Animated.Text style={styles.title}
      entering={FadeInRight.delay(300).duration(300).springify()}>
        ShopAZ</Animated.Text>
      
      <Animated.Text style={styles.description}
      entering={FadeInRight.delay(500).duration(300)}>
        The One Stop Access To All Your Commodites, 
        Your Item is Just A Click Away..✈️
      </Animated.Text>

      {/* Buttons */}
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

      <Text style={styles.loginTxt}> Already Have an Account? {" "} 
      <Link href={"/signin"} asChild>
        <TouchableOpacity>
          <Text style={styles.loginTxtSpan}>SignIn</Text>
        </TouchableOpacity>
      </Link>
      </Text>
      </View>
      </LinearGradient>

    </View>
    </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: Colors.primary,
    fontWeight: "800",
    letterSpacing: 2.4,
    marginBottom: 10
  },
  description: {
    alignItems: "center",
    fontSize:14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20,
    textAlign: "center"
  },
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
  loginTxt: {
    marginTop: 30,
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    marginTop: 30,
    fontWeight: "600",
    color: Colors.primary,
  },

});
