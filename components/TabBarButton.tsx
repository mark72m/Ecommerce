import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    onPress: Function;
    onLongPress: Function;    
    isFocused: boolean
    label: string;
    routeName: string;
}

const TabBarButton = (props: Props) => {
    const { onPress, onLongPress, isFocused, routeName, label} = props
  return (
    <Pressable                        
    onPress={onPress}
    onLongPress={onLongPress}
    style={styles.tabbarBtn }>
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
            {label}
        </Text>
    </Pressable>
  )
}

export default TabBarButton;

const styles = StyleSheet.create({
    tabbarBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        
      },
})