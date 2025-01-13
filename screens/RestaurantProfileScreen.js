import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import RestaurantProfile from '../components/profile/RestaurantProfile';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RestaurantProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RestaurantProfile />
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})

export default RestaurantProfileScreen