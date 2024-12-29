import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostImage post={post} />
      <PostSide post={post} />
      <PostFooter post={post} />
    </View>
  )
}

const PostImage = ({ post }) => (
  <View style={styles.imageContainer}>
    <Image
      source={{ uri: post.imageUrl }}
      style={styles.image}
    />
  </View>
)

const PostSide = ({ post }) => (
  <View style={styles.iconContainer}>
    {/* Ikone sa brojevima */}
    <TouchableOpacity style={styles.iconTextContainer}>
      <Image
        source={require('../../assets/heart.png')}
        style={styles.icon}
      />
      <Text style={styles.iconText}>197</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconTextContainer}>
      <Image
        source={require('../../assets/comment.png')}
        style={styles.icon}
      />
      <Text style={styles.iconText}>197</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconTextContainer}>
      <Image
        source={require('../../assets/inbox.png')}
        style={styles.icon}
      />
      <Text style={styles.iconText}>197</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconTextContainer}>
      <Image
        source={require('../../assets/bookmark.png')}
        style={styles.icon}
      />
      <Text style={styles.iconText}>197</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconTextContainer}>
      <Image
        source={require('../../assets/menu.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  </View>
)

const PostFooter = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerText}>Ponovi čitavu narudžbu</Text>
    <TouchableOpacity>
      <Image
        source={require('../../assets/arrow.png')}  // Zameniti sa svojom strelicom
        style={styles.arrowIcon}
      />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 30,
  },
  imageContainer: {
    width: '100%',
    height: 700,
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 20,               // Držimo ikone pri dnu
    right: 20,               // Sa desne strane
    zIndex: 1,              // Preko slike
    flexDirection: 'column', // Ikone i brojevi idu vertikalno
    alignItems: 'center',    // Poravnanje ikona i brojeva u centru
  },
  iconTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.01)', 
    borderRadius: 5,
    padding: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  iconText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  footerContainer: {
    flexDirection: 'row',           // Horizontalno orijentisan
    alignItems: 'center',           // Poravnanje u centru
    backgroundColor: '#0195F5',     // Plava pozadina
    paddingVertical: 10,            // Padding gore i dole
    paddingHorizontal: 15,          // Padding levo i desno
    borderRadius: 8,                // Zaobljeni rubovi
    position: 'absolute',           // Pozicioniramo ga u visini sa inbox ikonom
    left: 70,                       // Razmak od leve ivice ikone
    bottom: 20,                     // Razmak od donje ivice
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  arrowIcon: {
    width: 15,
    height: 15,
  },
})

export default Post
