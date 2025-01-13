import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

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

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    const scrollOffset = categoryId * 240;
    scrollViewRef.current.scrollTo({ y: scrollOffset, animated: true });
  };

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

      {/* Conditional Rendering of Content Based on Active Tab */}
      {activeTab === 0 ? (
        <>
          {/* Categories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[styles.categoryButton, selectedCategory === category.id && styles.activeCategory]}
                onPress={() => handleCategorySelect(category.id)}
              >
                <View style={styles.categoryContent}>
                  <Image
                    source={require('../../assets/audio.png')}
                    style={[
                      styles.categoryIcon,
                      selectedCategory === category.id && styles.activeCategoryIcon // Active style
                    ]}
                  />
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === category.id && styles.activeCategoryText
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
            {categories.map((category) => (
              <View key={category.id}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '600', marginTop: 18 }}>
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
        </>
      ) : activeTab === 1 ? (
        <View style={styles.tabContent}>
          <ScrollView contentContainerStyle={styles.imageRowContainer}>
            {[...Array(9)].map((_, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image
                  source={require('../../assets/slika3.jpg')}
                  style={styles.image}
                />
                <View style={styles.likesContainer}>
                  <TouchableOpacity style={styles.likeButton}>
                    <Image
                      source={require('../../assets/heart.png')}
                      style={styles.likeIcon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.likeCount}>125</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : activeTab === 2 ? (
        <View style={styles.tabContent1}>
          {/* Review Section */}
          <View style={styles.ratingSection}>
            <View>
              <View style={styles.ratingInfo}>
                <Text style={styles.ratingText}>4.5</Text>
                <Image source={require('../../assets/star_filled.png')} style={styles.mainStarIcon} />
              </View>
              <Text style={styles.totalRatingsText}>247 ocjena</Text>
            </View>

            <View style={styles.progressBars}>
              {[5, 4, 3, 2, 1].map((rating) => (
                <View key={rating} style={styles.progressBarWrapper}>
                  <Text style={styles.ratingLabel}>{rating}</Text>
                  <View style={styles.progressBar}>
                    <View style={[styles.progress, { width: `${(Math.random() * 100).toFixed(0)}%` }]} />
                  </View>
                </View>
              ))}
            </View>

          </View>


          {/* Review Input Section */}
          <Text style={styles.reviewTitle}>Ocijenite</Text>
          <View style={styles.ratingInputContainer}>
            <Image source={require('../../assets/profile.png')} style={styles.profileImage2} />
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star}>
                  <Image
                    source={require('../../assets/star.png')}
                    style={styles.starIcon}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      ) : activeTab === 3 ? (
        <ScrollView>
          <View style={styles.infoTabContent}>
            <View style={styles.infoSection}>
              <View style={styles.locationContainer}>
                <Image source={require('../../assets/map.png')} style={styles.icon} />
                <Text style={styles.infoLabel}>Dzemala Bijedica 31, Sarajevo</Text>
              </View>
              <View style={styles.separator} />
            </View>

            <View style={styles.infoSection}>
              <View style={styles.phoneContainer}>
                <Image source={require('../../assets/phone.png')} style={styles.icon} />
                <Text style={styles.infoLabel}>+387 33 123 456</Text>
              </View>
              <View style={styles.separator} />
            </View>

            <View style={styles.infoSection}>
              <View style={styles.websiteContainer}>
                <Image source={require('../../assets/web.png')} style={styles.icon} />
                <Text style={styles.infoLabel}>www.metropolis.ba</Text>
              </View>
              <View style={styles.separator} />
            </View>

            <View style={styles.infoSection}>
              <View style={styles.timeContainer}>
                <Image source={require('../../assets/time.png')} style={styles.icon} />
                <Text style={styles.timeTextClosed}>Zatvoreno · Otvara se u 08:00</Text>
              </View>
              <View style={styles.separator} />
            </View>

            <View style={styles.paymentSection}>
              <Text style={styles.paymentTitle}>Placanje</Text>
              <View style={styles.paymentMethodsContainer}>
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodText}>✓ Gotovina</Text>
                </View>
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodText}>✓ Kartica</Text>
                </View>
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodText}>✓ Mobilno placanje</Text>
                </View>
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodText}>✓ Online placanje</Text>
                </View>
              </View>
            </View>

            <View style={styles.paymentSection}>
              <Text style={styles.paymentTitle}>Atmosfera</Text>
              <View style={styles.paymentMethodsContainer}>
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodText}>✓ Cozy</Text>
                </View>
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodText}>✓ Ugodno za sastanke</Text>
                </View>
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodText}>✓ Opustajuca muzika</Text>
                </View>
                <View style={styles.paymentMethod}>
                  <Text style={styles.paymentMethodText}>✓ Warm</Text>
                </View>
              </View>
            </View>

          </View>
        </ScrollView>
      ) : null}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
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
    color: '#030303',
  },
  statLabel: {
    fontSize: 14,
    color: '#030303',
  },
  profileDescription: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#030303',
    paddingTop: 16,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#030303',
  },
  bio: {
    fontSize: 14,
    color: '#030303',
  },
  link: {
    color: '#1A4266',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#030303',
  },

  categoryScroll: {
    marginTop: 16,
    paddingHorizontal: 8,
    height: '20%',
  },

  categoryButton: {
    width: 110,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#EFEFEF',
    marginRight: 16,
  },

  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#030303',
  },
  categoryText: {
    fontSize: 14,
    color: '#030303',
  },
  activeCategory: {
    backgroundColor: 'rgba(1, 149, 245, 0.2)',
  },
  activeCategoryText: {
    fontWeight: 'bold',
    color: '#0195F5',
  },

  activeCategoryIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#0195F5',
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
    tintColor: '#1E1E1E',
  },
  activeIcon: {
    tintColor: '#1E1E1E',
  },
  activeUnderline: {
    margin: 4,
    width: 80,
    height: 2,
    backgroundColor: '#1E1E1E',
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

  tabContent: {
    flex: 1,
    marginTop: 16,
  },

  imageRowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  imageContainer: {
    width: '30%',
    position: 'relative',
  },

  image: {
    width: 130,
    height: 225,
  },

  likesContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  likeButton: {
    marginRight: 8,
  },

  likeIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },

  likeCount: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },

  ratingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center'
},

ratingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
},

  ratingText: {
    fontSize: 32,
    color: '#1E1E1E',
    fontWeight: 'bold',
    marginRight: 8,
  },

  starIcon: {
    width: 30,
    height: 30,
    tintColor: '#D3D3D3',
    marginRight: 30,
  },

  totalRatingsText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.38)',
  },

  progressBars: {
    width: '50%',
  },

  progressBarWrapper: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingLabel: {
    fontSize: 14,
    color: '#1E1E1E',
    width: 30,
  },

  progressBar: {
    width: '90%',
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 2,
  },

  progress: {
    height: '100%',
    backgroundColor: '#FFB400',
    borderRadius: 2,
  },

  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },

  ratingInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileImage2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },

  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  mainStarIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFB400',
  },
  tabContent1: {
    margin: 16,
  },

  infoTabContent: {
    padding: 16,
    backgroundColor: '#fff',
  },

  infoSection: {
    marginBottom: 16,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  websiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  paymentSection: {
    marginTop: 16,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#0195F5',
  },

  infoLabel: {
    fontSize: 16,
    color: '#1E1E1E',
  },

  infoValue: {
    fontSize: 14,
    color: '#1E1E1E',
    marginTop: 4,
  },

  separator: {
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },

  paymentSection: {
    marginTop: 16,
  },

  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginBottom: 8,
  },

  paymentMethodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  paymentMethod: {
    width: '48%',
    marginBottom: 8,
    borderRadius: 8,
    padding: 10,
  },

  paymentMethodText: {
    fontSize: 14,
    color: '#1E1E1E',
  },

  timeTextClosed: {
    fontSize: 14,
    color: '#FF0000',
    marginTop: 4,
  },

  infoValue: {
    fontSize: 14,
    color: '#1E1E1E',
    marginTop: 4,
  },


});

export default Profile;
