import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const bottomTabIcons = [
  {
    name: 'Home',
    active: require('../../assets/home_filled.png'),
    inactive: require('../../assets/home.png'),
  },
  {
    name: 'Search',
    active: require('../../assets/search.png'),
    inactive: require('../../assets/search.png'),
  },
  {
    name: 'QR',
    active: require('../../assets/qr.png'),
    inactive: require('../../assets/qr.png'),
  },
  {
    name: 'Shopping',
    active: require('../../assets/shopping.png'),
    inactive: require('../../assets/shopping.png'),
  },
  {
    name: 'Profile',
    active: require('../../assets/profile.png'),
    inactive: require('../../assets/profile.png'),
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const navigation = useNavigation();

  const Icon = ({ icon }) => (
    <TouchableOpacity
      onPress={() => {
        setActiveTab(icon.name);
        if (icon.name === 'Profile') {
          navigation.navigate('ProfileScreen', { isActive: true });  
        } else if (icon.name === 'Home') {
          navigation.navigate('HomeScreen');
        }
      }}
    >
      <Image
        source={activeTab === icon.name ? icon.active : icon.inactive}
        style={[styles.icon, icon.name === 'Profile' ? styles.profilePic() : null]}
      />
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 27,
    height: 27,
  },
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: '#fff',
  }),
});

export default BottomTabs;
