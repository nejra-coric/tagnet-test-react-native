import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const tabs = [
    { id: 0, icon: require('../../assets/coffe.png') },
    { id: 1, icon: require('../../assets/slides.png') },
    { id: 2, icon: require('../../assets/star.png') },
    { id: 3, icon: require('../../assets/info.png') },
  ];

  const categories = [
    { id: 0, label: 'Predjela' },
    { id: 1, label: 'Dezerti' },
    { id: 2, label: 'Palačinci' },
    { id: 3, label: 'Torte' },
  ];

  return (
    <View style={styles.container}>
      {/* Profilna slika i statistike */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Objava</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>22</Text>
            <Text style={styles.statLabel}>Pratitelja</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>14</Text>
            <Text style={styles.statLabel}>Pratim</Text>
          </View>
        </View>
      </View>

      {/* Opis */}
      <View style={styles.profileDescription}>
        <Text style={styles.profileName}>Metropolis</Text>
        <Text style={styles.bio}>
          Dobrodošli! <Text style={styles.link}>@metropolis</Text>{' '}
          <Text style={styles.link}>@restoran</Text>{' '}
          <Text style={styles.link}>@scc</Text>
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Uredi profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Podijeli profil</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs Section */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <View key={index} style={styles.tabWrapper}>
            <TouchableOpacity
              style={styles.tab}
              onPress={() => setActiveTab(index)}
            >
              <Image
                source={tab.icon}
                style={[
                  styles.tabIcon,
                  activeTab === index ? styles.activeIcon : null,
                ]}
              />
            </TouchableOpacity>
            {activeTab === index && <View style={styles.activeUnderline} />}
          </View>
        ))}
      </View>

      {/* Horizontalne kategorije */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id ? styles.activeCategory : null,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id
                  ? styles.activeCategoryText
                  : null,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#000',
    flex: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Set white color for stat numbers
  },
  statLabel: {
    fontSize: 14,
    color: '#ccc', // Lighter gray for the labels
  },
  profileDescription: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#444', // Darker border color for contrast
    paddingTop: 16,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Set white color for the profile name
  },
  bio: {
    fontSize: 14,
    color: '#ccc', // Lighter gray text for bio
  },
  link: {
    color: '#007BFF', // Link color remains blue
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#444', // Dark background for buttons
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff', // White text for buttons
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#444', // Dark background for category buttons
  },
  activeCategory: {
    backgroundColor: '#007BFF', // Blue background for active category
  },
  categoryText: {
    fontSize: 14,
    color: '#fff', // White text for category buttons
  },
  activeCategoryText: {
    fontWeight: 'bold',
    color: '#fff', // Bold white text for active category
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  tabWrapper: {
    alignItems: 'center',
  },
  tab: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
    tintColor: '#ccc', // Lighter gray color for icons
  },
  activeIcon: {
    tintColor: '#fff', // White color for active tab icons
  },
  activeUnderline: {
    marginTop: 4,
    width: 24,
    height: 2,
    backgroundColor: '#fff', // White underline for active tab
    borderRadius: 1,
  },
});

export default Profile;
