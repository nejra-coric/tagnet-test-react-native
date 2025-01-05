import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Create a ref for the ScrollView to scroll to specific sections
  const scrollViewRef = useRef();

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
    { id: 4, label: 'Glavna jela' },
    { id: 5, label: 'Sokovi' },
  ];

  const items = [
    { title: 'Rižoto sa tunom', price: '22 KM', discount: '33% popusta', image: require('../../assets/slika1.jpg') },
    { title: 'Morski plodovi', price: '25 KM', discount: '33% popusta', image: require('../../assets/slika2.webp') },
    { title: 'Meso sa prilogom', price: '28 KM', discount: '33% popusta', image: require('../../assets/slika3.jpg') },
  ];

  // Handle category selection and scroll to corresponding section
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    const scrollOffset = categoryId * 240; // Adjust this value to match the height of each category
    scrollViewRef.current.scrollTo({ y: scrollOffset, animated: true });
  };

  return (
    <View style={styles.container}>
      {/* Profile and Stats */}
      <View style={styles.profileHeader}>
        <Image source={require('../../assets/profile.png')} style={styles.profileImage} />
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

      {/* Description */}
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

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <View key={index} style={styles.tabWrapper}>
            <TouchableOpacity
              style={styles.tab}
              onPress={() => setActiveTab(index)}
            >
              <Image
                source={tab.icon}
                style={[styles.tabIcon, activeTab === index && styles.activeIcon]}
              />
            </TouchableOpacity>
            {activeTab === index && <View style={styles.activeUnderline} />}
          </View>
        ))}
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[styles.categoryButton, selectedCategory === category.id && styles.activeCategory]}
            onPress={() => handleCategorySelect(category.id)}
          >
            <View style={styles.categoryContent}>
              <Image source={require('../../assets/audio.png')} style={styles.categoryIcon} />
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category.id && styles.activeCategoryText,
                ]}
              >
                {category.label}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Main ScrollView for items */}
      <ScrollView ref={scrollViewRef}>
        {/* Sections */}
        {categories.map((category, index) => (
          <View key={category.id}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', marginTop: 18 }}>
              {category.label}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.itemsContainer}>
              {items.map((item, index) => (
                <View key={index} style={styles.itemCard}>
                  <Image source={item.image} style={styles.itemImage} />
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{item.discount}</Text>
                  </View>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
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
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#ccc',
  },
  profileDescription: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 16,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  bio: {
    fontSize: 14,
    color: '#ccc',
  },
  link: {
    color: '#007BFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 49,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
  },

  categoryScroll: {
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 8,
  },

  categoryButton: {
    width: 110,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#444',
    marginRight: 16,
    marginBottom: 70,
  },

  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#ccc',
  },
  categoryText: {
    fontSize: 14,
    color: '#fff',
  },
  activeCategory: {
    backgroundColor: '#007BFF',
  },
  activeCategoryText: {
    fontWeight: 'bold',
    color: '#fff',
  },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    marginTop: 16,
  },
  tabWrapper: {
    alignItems: 'center',
    flex: 1,  
    justifyContent: 'center',
  },
  tab: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
    tintColor: '#ccc',
  },
  activeIcon: {
    tintColor: '#fff',
  },
  activeUnderline: {
    margin: 4,
    width: 80,  
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 1,
  },

  itemsContainer: {
    marginTop: 16,
    paddingHorizontal: 8,
  },
  itemCard: {
    width: 150,
    marginRight: 16,
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: 243,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemPrice: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },

});

export default Profile;
