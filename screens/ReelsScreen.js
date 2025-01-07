// ReelsScreen.js
import React from 'react'
import { View, FlatList, StyleSheet, Dimensions } from 'react-native'
import { posts } from '../data/posts'
import Post from '../components/home/Post'

const { width, height } = Dimensions.get('window')

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ width, height }}>
            {/* Pass isFullScreen so the Post doesn't navigate again */}
            <Post post={item} isFullScreen />
          </View>
        )}
        // Vertical paging for that Reels feel
        pagingEnabled
        horizontal={false}
        showsVerticalScrollIndicator={false}
        // Each item is the full screen height
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