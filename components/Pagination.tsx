import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

type Props = {
    items: string[];
    paginationIndex: number;
}

const Pagination = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.items.map((item, index) => (
          <View key={index} style={styles.paginationDots}/>
      ))}
    </View>
  )
}

export default Pagination;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationDots: {
        width: 30,
        height: 4,
        margin: 3,
        borderRadius: 5,
        backgroundColor: '#ccc'
    }
})