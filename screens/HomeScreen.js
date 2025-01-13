import React from 'react'
import { SafeAreaView, StyleSheet, FlatList } from 'react-native'
import Header from '../components/home/Header'

import Post from '../components/home/Post'
import { posts } from '../data/posts'

const { height: screenHeight } = Dimensions.get('window');
import { Dimensions } from 'react-native';

const HomeScreen = () => {
  // Suppose each post (including spacing) is ~720 px tall
  const ITEM_HEIGHT = screenHeight

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      

      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
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
    backgroundColor: 'black',
    flex: 1,
  },
})

export default HomeScreen