import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

type Props = {}

const Header = (props: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text style={styles.logo}>SaZ</Text>
      <Link href={'/explore'} asChild>
      <TouchableOpacity style={styles.searchBar}>
        <Text style={styles.searchTxt}>Search</Text>
        <Ionicons name="search-outline" size={22} color={Colors.black}/>
      </TouchableOpacity>
      </Link>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingTop: 10,
    height: 50,
    gap: 10
  },
  logo: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.cynan
  },
  searchBar: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',  
  },
  searchTxt: {
    color: Colors.gray
  }
})