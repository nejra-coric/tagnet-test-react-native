import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Cart from '../components/cart/Cart'

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Cart/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
})

export default CartScreen