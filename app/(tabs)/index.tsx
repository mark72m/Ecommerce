import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ProductType } from '@/types/type';
import { Stack } from 'expo-router';
import Header from '@/components/Header';
import ProductItem from '@/components/ProductItem';
import { Colors } from '@/constants/Colors';
import ProductList from '@/components/ProductList';

type Props = {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const URL = 'http://localhost:8000/products';
    const response = await axios.get(URL);

    console.log(response.data);
    setProducts(response.data);
    setIsLoading(false);
  }
  return (
    <>
    <Stack.Screen options={{
      headerShown: true,
      header: () => (
        <Header/>
      ),
         
      }}/>
      <ProductList products={products}/>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  })