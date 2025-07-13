import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProductType } from '@/types/type'
import { Ionicons } from '@expo/vector-icons'


type Props = {
    item: ProductType
}

const width = Dimensions.get('window').width - 40;

const ProductItem = ({item}: Props) => {
  return (
          <View style={styles.container}>
            <Image source={{uri:item.images[0]}} style={styles.productImg} /> 
            <TouchableOpacity style={styles.bookmarkBtn}>
                <Ionicons name='heart-outline' size={22} color='white'/>
            </TouchableOpacity>
            <Text>{item.title}</Text>
          </View>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 10,        
    },
    productImg: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginBottom: 10
   },
   bookmarkBtn: {
     position: 'absolute',
     top: 10,
     right: 10
  }
})