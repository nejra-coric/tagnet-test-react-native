import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      {/* Logo and Text */}
      <View style={styles.leftSection}>
        <Text style={styles.logoText}>metropolis</Text>
        <Image
          source={require('../../assets/verified.png')}
          style={styles.verifiedIcon}
        />
        <View style={styles.redDot} />
      </View>

      {/* Icons */}
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../../assets/calendar.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../../assets/plus.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../../assets/more.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#030303',
  },
  verifiedIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF007A', // Pink color for the dot
    marginLeft: 4,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#030303', // Black icons
  },
});

export default ProfileHeader;
