import { StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import { ProductType } from '@/types/type'

type Props = {}

const ProductDetails = (props: Props) => {
  const {id} = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType>({});

  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async () => {
    const URL = `http://localhost:8000/saleProducts/${id}`;
    const response = await axios.get(URL);

    console.log('Product Details',response.data);
    setProduct(response.data);
  }
  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  )
}

export default ProductDetails