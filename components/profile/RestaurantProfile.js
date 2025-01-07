import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';

const RestaurantProfile = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

    const scrollViewRef = useRef();

    const [isFollowing, setIsFollowing] = useState(false);

    const handlePress = () => {
        setIsFollowing(!isFollowing);
    };

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
                        <Text style={styles.statNumber}>10</Text>
                        <Text style={styles.statLabel}>Objava</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>122</Text>
                        <Text style={styles.statLabel}>Pratitelja</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>114</Text>
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
                <TouchableOpacity
                    style={[
                        styles.buttonFollow,
                        isFollowing && styles.buttonFollowing, // Dodaj sivu boju ako prati
                    ]}
                    onPress={handlePress}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            isFollowing && styles.buttonTextFollowing, // Dodaj siv tekst ako prati
                        ]}
                    >
                        {isFollowing ? 'Pratim' : 'Prati'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Poruka</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.buttonReserve}
                onPress={() => setBottomSheetVisible(true)} // <-- Show bottom sheet
            >
                <Text style={styles.buttonText}>Rezervisi</Text>
            </TouchableOpacity>

            {/* Bottom Sheet Modal */}
            <Modal
                transparent
                visible={bottomSheetVisible}
                animationType="slide"
                onRequestClose={() => setBottomSheetVisible(false)}
            >
                <View style={styles.bottomSheetOverlay}>
                    <TouchableOpacity
                        style={styles.bottomSheetBackgroundTouchable}
                        onPress={() => setBottomSheetVisible(false)}
                    />

                    {/* Actual bottom sheet container */}
                    <View style={styles.bottomSheetContainer}>
                        {/* Your bottom sheet content goes here */}
                        <Text style={{ fontSize: 16, marginBottom: 20 }}>
                            Ovdje ide sadržaj rezervacije...
                        </Text>

                        <TouchableOpacity onPress={() => setBottomSheetVisible(false)}>
                            <Text style={{ color: 'blue', fontWeight: 'bold' }}>Zatvori</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            <TouchableOpacity
                style={styles.buttonOrder}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Narudžba za stol broj 12</Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.alertBox}>
                        {/* Ikona */}
                        <Image
                            source={require('../../assets/complete.png')}
                            style={styles.alertIcon}
                        />
                        {/* Boldirani naslov */}
                        <Text style={styles.alertTitle}>Prijava na stol 12?</Text>
                        {/* Poruka sa linijom ispod */}
                        <Text style={styles.alertMessage}>Pritiskom na OK, omogućava se opcija narudžbe, bez pomoći konobara</Text>
                        <View style={styles.divider} />
                        {/* Dugme sa linijom ispod */}
                        <TouchableOpacity
                            style={styles.alertButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.alertButtonText}>OK</Text>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                        <TouchableOpacity
                            style={[styles.alertButton, styles.alertButtonPrimary]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={[styles.alertButtonText2, styles.alertButtonPrimaryText]}>Nastavi razgledat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
                                    <Image source={require('../../assets/audio.png')} style={styles.categoryIcon} />
                                    <Text
                                        style={[styles.categoryText, selectedCategory === category.id && styles.activeCategoryText]}
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
                        <View style={styles.ratingInfo}>
                            <Text style={styles.ratingText}>4.5</Text>
                            <Image source={require('../../assets/star_filled.png')} style={styles.mainStarIcon} />
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
                    <Text style={styles.totalRatingsText}>247 ocjena</Text>

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
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    buttonOrder: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
        padding: 20,
        alignItems: 'center',
    },
    alertIcon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    alertTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    alertMessage: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        alignSelf: 'stretch',
        marginVertical: 10,
    },
    alertButton: {
        paddingVertical: 12,
        alignItems: 'center',
        width: '100%',
    },
    alertButtonText: {
        fontSize: 16,
        color: '#0195F5',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    alertButtonText2: {
        fontSize: 16,
        color: '#030303',
        textAlign: 'center',
        fontWeight: 'bold'
    },
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
        paddingHorizontal: 60,
        borderRadius: 5,
    },

    buttonFollow: {
        backgroundColor: '#0195F5',
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 5,
    },

    buttonFollowing: {
        backgroundColor: '#d3d3d3',
    },

    buttonTextFollowing: {
        color: '#606060',
    },

    buttonReserve: {
        backgroundColor: '#0195F5',
        marginTop: 16,
        paddingVertical: 10,
        borderRadius: 5,
    },

    buttonOrder: {
        backgroundColor: '#444',
        marginTop: 16,
        paddingVertical: 10,
        borderRadius: 5,
    },

    buttonText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
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
        backgroundColor: '#444',
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
    },

    ratingInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ratingText: {
        fontSize: 32,
        color: '#fff',
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
        color: '#ccc',
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
        color: '#fff',
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
        color: '#fff',
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
        backgroundColor: '#000',
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
        color: '#fff',
    },

    infoValue: {
        fontSize: 14,
        color: '#ccc',
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
        color: '#fff',
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
        color: '#fff',
    },

    timeTextClosed: {
        fontSize: 14,
        color: '#FF0000',
        marginTop: 4,
    },

    infoValue: {
        fontSize: 14,
        color: '#ccc',
        marginTop: 4,
    },

    bottomSheetOverlay: {
        flex: 1,
        justifyContent: 'flex-end',        // Align to the bottom
        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Dimmed backdrop
      },
      bottomSheetBackgroundTouchable: {
        // This "invisible" area above the bottom sheet is tappable for closing
        flex: 1
      },
      bottomSheetContainer: {
        height: '85%',                     // 85% of the screen height
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16
      },      

});


export default RestaurantProfile