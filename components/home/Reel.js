
import React from 'react'
import Stories from '../home/Stories'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Dimensions } from 'react-native';
import ReelHeader from '../home/ReelHeader';

const { height: screenHeight } = Dimensions.get('window');

const Reel = ({ post, isFullScreen = false }) => {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate('ReelsScreen')
  }

  const containerStyle = [styles.container, { height: screenHeight }]

  return (
    <View
      style={containerStyle}
      activeOpacity={0.8}
    >
      <ReelHeader />
      <ReelImage post={post} />
      <OverlayContent post={post} />
    </View>
  )
}

const ReelImage = ({ post }) => (
  <View style={styles.imageContainer}>
    <Image source={{ uri: post.image }} style={styles.image} />
  </View>
)

const OverlayContent = ({ post }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.overlayContainer}>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.actionButtonContent}>
          <Text style={styles.actionButtonText}>Dodaj u korpu</Text>
          <Image
            source={require('../../assets/arrow.png')}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.overlayContent}>
        <View style={styles.userInfo}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/profile.png')}
              style={[styles.profileImage, styles.secondaryProfileImage]}
            />
          </View>

          <Text style={styles.userText}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantProfileScreen')}
            >
              <Text style={[styles.boldText, styles.linkText]}>Metropolis</Text>
            </TouchableOpacity>
          </Text>

          <TouchableOpacity>
            <Text style={styles.followButton}>Prati</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.hashtags}>
          #aquarium #aquariumplants #instagram #reels...
        </Text>

        <View style={styles.likesSection}>
          <View style={styles.likesProfileContainer}>
            <Image
              source={require('../../assets/profile.png')}
              style={styles.likesProfileImage}
            />
          </View>
          <Text style={styles.likes}>
            <Text style={styles.boldText}>nejracoric</Text> i 3,879 ostalih su
            probali ovu narudžbu
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <IconWithText icon={require('../../assets/heart.png')} text="172" />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconWithText
              icon={require('../../assets/comment.png')}
              text="172"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconWithText icon={require('../../assets/inbox.png')} text="172" />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconWithText
              icon={require('../../assets/bookmark.png')}
              text="172"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconWithText icon={require('../../assets/menu.png')} text="" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const IconWithText = ({ icon, text }) => (
  <View style={styles.iconWithText}>
    <Image source={icon} style={styles.icon} />
    {text !== '' && <Text style={styles.iconText}>{text}</Text>}
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: screenHeight, // Ensure the container height is the full screen height
  },
  linkText: {
    color: '#fff',
    textDecorationLine: 'none',
  },
  imageContainer: {
    width: '100%',
    flex: 1,
  },
  overlayContainer: {
    position: 'absolute', // Ensure the overlay is positioned over the image
    width: '100%',       // Match the image width
    height: screenHeight, // Match the image height dynamically
    top: 0,              // Align with the top of the image
    left: 0,
    bottom: 53,
  },
  actionButton: {
    position: 'absolute',
    left: 20,
    backgroundColor: '#0195F5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    bottom:'35%',
    width: 280,
  },
  image: {
    flex: 1,
    width: '100%',
    height: undefined,
    resizeMode: 'cover',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  actionButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom:0,
    width: '100%',
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  overlayContent: {
    position: 'absolute',
    bottom: 165,
    left: 20,
    right: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  secondaryProfileImage: {
    marginLeft: -10,
  },
  userText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  followButton: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  hashtags: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 5,
  },
  likesSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  likesProfileContainer: {
    marginRight: 8,
  },
  likesProfileImage: {
    width: 21,
    height: 21,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  likes: {
    color: '#fff',
    fontSize: 12,
  },
  iconContainer: {
    position: 'absolute',
    right: 1,
    bottom: 1,
  },
  iconWithText: {
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
  },
})

export default Reel
