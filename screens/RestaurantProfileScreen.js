import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import RestaurantProfile from '../components/profile/RestaurantProfile';

const RestaurantProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader/>
      <RestaurantProfile />
      <BottomTabs icons={bottomTabIcons}/>
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