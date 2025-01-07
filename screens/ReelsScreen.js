// ReelsScreen.js
import React from 'react'
import { View, FlatList, StyleSheet, Dimensions } from 'react-native'
import { posts } from '../data/posts'
import Reel from '../components/home/Reel'

const { width, height } = Dimensions.get('window')

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ width, height }}>
            <Reel post={item} isFullScreen />
          </View>
        )}
        pagingEnabled
        horizontal={false}
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: height,
          offset: height * index,
          index,
        })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})

export default ReelsScreen