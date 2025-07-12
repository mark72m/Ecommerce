import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

export const icon = {
    index: ({ color }: {color : string} ) => (
        <Ionicons name="home-outline" size={22} color={color}/>
    ),

    explore: ({ color }: {color : string} ) => (
        <Ionicons name="search-outline" size={22} color={color}/>
    ),

    notifications: ({ color }: {color : string} ) => (
        <Ionicons name="notifications-outline" size={22} color={color}/>
    ),

    cart: ({ color }: {color : string} ) => (
        <Ionicons name="cart-outline" size={22} color={color}/>
    ),
    profile: ({ color }: {color : string} ) => (
        //<Ionicons name="home-outline" size={22} color={color}/>
        <Image source={{uri: 'https://xsgames.co/randomusers/avatar.php?g=male'}} style={style.userImg}/>
    ),    
};

const style =  StyleSheet.create({
userImg: {
    width: 25,
    height: 25,
    borderRadius: 20
}

})
    
