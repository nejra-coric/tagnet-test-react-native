// ReelsScreen.js
import React from 'react'
import { View, FlatList, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import { food } from '../data/food';

import Reel from '../components/home/Reel'
import Header from '../components/home/Header'

import Post from '../components/home/Post'


const { height: screenHeight } = Dimensions.get('window');

const ReelsScreen = () => {

  const ITEM_HEIGHT = screenHeight
  return (
  <SafeAreaView style={styles.container}>
      <Header />
      

      <FlatList
        data={food}
        renderItem={({ item }) => <Reel post={item} />}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={ITEM_HEIGHT}
        snapToAlignment="start"
        decelerationRate="fast"
        // optional: if you want to remove the over-scroll bounce
        bounces={false}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})

export default ReelsScreen