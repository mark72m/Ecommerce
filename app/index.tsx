import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import SocialLoginButtons from "@/components/SocialLoginButtons";

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
      <SocialLoginButtons/>
     

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
  
  loginTxt: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    marginTop: 10,
    fontWeight: "600",
    color: Colors.primary,
  },

});
