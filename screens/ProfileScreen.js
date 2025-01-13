import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import Profile from '../components/profile/Profile'


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader/>
      <Profile />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default ProfileScreen