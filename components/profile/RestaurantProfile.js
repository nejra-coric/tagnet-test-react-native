import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, IconWithText } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const RestaurantProfile = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [bottomSheetVisible2, setBottomSheetVisible2] = useState(false);
    const [bottomSheetVisible3, setBottomSheetVisible3] = useState(false);


    const scrollViewRef = useRef();
    const navigation = useNavigation();

    const [isFollowing, setIsFollowing] = useState(false);

    const handlePress = () => {
        setIsFollowing(!isFollowing);
    };

    const handlePress2 = () => {
        navigation.navigate('CartScreen')
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
            <ScrollView>
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

                <View style={styles.profileDescription}>
                    <Text style={styles.profileName}>Metropolis</Text>
                    <Text style={styles.bio}>
                        Dobrodošli! <Text style={styles.link}>@metropolis</Text>{' '}
                        <Text style={styles.link}>@restoran</Text>{' '}
                        <Text style={styles.link}>@scc</Text>
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.buttonFollow,
                            isFollowing && styles.buttonFollowing,
                        ]}
                        onPress={handlePress}
                    >
                        <Text
                            style={[
                                styles.buttonTextNotFollowing,
                                isFollowing && styles.buttonTextFollowing,
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
                    onPress={() => setBottomSheetVisible(true)}
                >
                    <Text style={styles.buttonTextReserve}>Rezervisi</Text>
                </TouchableOpacity>

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
                        <View style={styles.bottomSheetContainer}>
                            <View style={styles.topDivider} />
                            <ScrollView
                                contentContainerStyle={styles.scrollContent}
                                showsVerticalScrollIndicator={false}
                            >
                                {/* Reservation Header */}
                                <View style={styles.header}>
                                    <Text style={styles.headerText}>
                                        Rezervacija 22.05.2025.{"\n"}u 11:00 za 3 osobe
                                    </Text>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../../assets/qr_blue.png')}
                                            style={styles.qrCodeIcon}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.divider} />

                                {/* Guest Selection */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Izaberi broj gostiju</Text>
                                    <View style={styles.optionsContainer}>
                                        {[1, 2, 3, 5, 10].map((guest) => (
                                            <TouchableOpacity
                                                key={guest}
                                                style={[
                                                    styles.optionButton,
                                                    guest === 3 && styles.selectedOption,
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.optionText,
                                                        guest === 3 && styles.selectedOptionText,
                                                    ]}
                                                >
                                                    {guest}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                    <View style={styles.divider} />
                                </View>

                                {/* Day Selection */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Izaberi dan</Text>
                                    <ScrollView
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={styles.horizontalScrollContainer}
                                    >
                                        {["Pon 19", "Uto 20", "Sri 21", "Čet 22", "Pet 23", "Sub 24", "Ned 25"].map((day, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={[
                                                    styles.optionButtonForDay,
                                                    day === "Čet 22" && styles.selectedOption,
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.optionTextForDay,
                                                        day === "Čet 22" && styles.selectedOptionText,
                                                    ]}
                                                >
                                                    {day.split(" ")[0]}
                                                </Text>
                                                <Text
                                                    style={[
                                                        styles.dateText,
                                                        day === "Čet 22" && styles.selectedOptionText,
                                                    ]}
                                                >
                                                    {day.split(" ")[1]}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </ScrollView>
                                    <View style={styles.divider} />
                                </View>

                                {/* Time Selection */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Izaberi sat</Text>
                                    <View style={styles.timeContainer}>
                                        {[
                                            "10:00", "10:30",
                                            "11:00", "11:30",
                                            "12:00", "12:30",
                                            "13:00", "13:30"
                                        ].map((time, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={[
                                                    styles.timeButton,
                                                    time === "11:00" && styles.selectedTimeButton,
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.timeText,
                                                        time === "11:00" && styles.selectedTimeText,
                                                    ]}
                                                >
                                                    {time}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </ScrollView>

                            {/* Fixed Footer */}
                            <View style={styles.fixedFooter}>
                                <TouchableOpacity style={styles.saveButton}>
                                    <Text style={styles.saveButtonText}>Spasi informacije o rezervaciji i izaberi proizvode</Text>
                                </TouchableOpacity>
                                <View style={styles.divider} />
                                <View style={styles.footerButtonsContainer}>
                                    <TouchableOpacity style={styles.resetButton}>
                                        <Text style={styles.resetButtonText}>Resetuj odabir</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.submitButton}>
                                        <Text style={styles.submitButtonText}>Pošalji rezervaciju</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.divider} />
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    transparent
                    visible={bottomSheetVisible2}
                    animationType="slide"
                    onRequestClose={() => setBottomSheetVisible2(false)}
                >
                    <View style={styles.overlay}>
                        <TouchableOpacity
                            style={styles.backgroundTouchable}
                            onPress={() => setBottomSheetVisible2(false)}
                        />
                        <View style={styles.bottomSheetContainer}>
                            <View style={styles.topDivider} />

                            {/* Header Section */}
                            <View style={styles.header}>
                                <TouchableOpacity onPress={() => setBottomSheetVisible2(false)}>
                                    <Text style={styles.backButton}>‹</Text>
                                </TouchableOpacity>
                                <View style={styles.headerContent}>
                                    <Text style={styles.productTitle}>Rižoto</Text>
                                    <Text style={styles.productSubtitle}>sa piletinom</Text>
                                </View>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.oldPrice}>28 KM</Text>
                                    <Text style={styles.newPrice}>20 KM</Text>
                                </View>
                            </View>

                            <ScrollView showsVerticalScrollIndicator={false}>
                                {/* Image Section */}
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={require('../../assets/risotto.jpg')} // Replace with your image path
                                        style={styles.productImage}
                                    />
                                    {/* "33% Popusta" Badge */}
                                    <View style={styles.discountBadge}>
                                        <Text style={styles.discountText}>33% popusta</Text>
                                    </View>
                                    {/* Pagination Indicator */}
                                    <Text style={styles.paginationText}>1/7</Text>
                                </View>
                                {/* Dots Indicator */}
                                <View style={styles.dotsContainer}>
                                    {[...Array(5)].map((_, index) => (
                                        <View
                                            key={index}
                                            style={[
                                                styles.dot,
                                                index === 0 && styles.activeDot, // Highlight the first dot
                                            ]}
                                        />
                                    ))}
                                </View>
                                <View style={styles.iconContainer}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                            <Image source={require('../../assets/heart_black.png')} style={styles.icon} />
                                            <Text style={styles.iconText}>197</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                            <Image source={require('../../assets/comment_black.png')} style={styles.icon} />
                                            <Text style={styles.iconText}>126</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={require('../../assets/inbox_black.png')} style={styles.icon} />
                                            <Text style={styles.iconText}>130</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

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
                                <Text style={styles.likes}>
                                    Da li ste ikada probali ovaj proizvod? Još nekog opisa da bi se popunio prostor. I još malo. Ovdje se dodaje opis 🚗 #hash #emoji Da li ste ikada probali ovaj proizvod? Još nekog opisa da bi se popunio prostor. I još malo. Ovdje se dodaje opis 🚗 #hash #emoji Da li ste ikada probali ovaj proizvod? Još nekog opisa da bi se popunio prostor. I još malo. Ovdje se dodaje opis 🚗 #hash #emoji
                                </Text>
                            </ScrollView>

                            {/* Add to Cart Section */}
                            <View style={styles.footer}>
                                <View style={styles.quantitySelector}>
                                    <Text style={styles.quantityLabel}>1</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.cartButton}
                                    onPress={() => {
                                        setBottomSheetVisible2(false); // Opcionalno: zatvara prvi modal
                                        setBottomSheetVisible3(true); // Otvara drugi modal
                                    }}
                                >
                                    <Text style={styles.cartButtonText}>Dodaj u korpu</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    transparent
                    visible={bottomSheetVisible3}
                    animationType="slide"
                    onRequestClose={() => setBottomSheetVisible3(false)}
                >
                    <View style={styles.overlay}>
                        <TouchableOpacity
                            style={styles.backgroundTouchable}
                            onPress={() => setBottomSheetVisible3(false)}
                        />
                        <View style={styles.bottomSheetContainer}>
                            <View style={styles.topDivider} />
                            {/* Guest Selection */}
                            <View style={styles.section}>
                                <Text style={styles.sectionTitleForAmount}>Kolicina</Text>
                                <View style={styles.optionsContainer}>
                                    {[1, 2, 3, 5, 10].map((guest) => (
                                        <TouchableOpacity
                                            key={guest}
                                            style={[
                                                styles.optionButton,
                                                guest === 3 && styles.selectedOption,
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    styles.optionText,
                                                    guest === 3 && styles.selectedOptionText,
                                                ]}
                                            >
                                                {guest}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.divider} />
                                {/* Add to Cart Section */}
                                <View style={styles.footer}>
                                    <View style={styles.quantitySelector}>
                                        <Text style={styles.quantityLabel}>1</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.cartButton}
                                        onPress={() => {
                                            setBottomSheetVisible2(false);
                                            setBottomSheetVisible3(false);
                                            setModalVisible2(true);
                                        }}
                                    >
                                        <Text style={styles.cartButtonText}>Dodaj u korpu</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity
                    style={styles.buttonOrder}
                    onPress={() => setBottomSheetVisible(true)}
                >
                    <Text style={styles.buttonText}>Rezervacija 05.05.2025. u 21:00 za 3 osobe</Text>
                </TouchableOpacity>

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
                            <Image
                                source={require('../../assets/complete.png')}
                                style={styles.alertIcon}
                            />
                            <Text style={styles.alertTitle}>Prijava na stol 12?</Text>
                            <Text style={styles.alertMessage}>Pritiskom na OK, omogućava se opcija narudžbe, bez pomoći konobara</Text>
                            <View style={styles.divider} />
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

                <Modal
                    transparent={true}
                    visible={modalVisible2}
                    animationType="fade"
                    onRequestClose={() => setModalVisible2(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.alertBox}>
                            <Image
                                source={require('../../assets/complete.png')}
                                style={styles.alertIcon}
                            />
                            <Text style={styles.alertTitle}>Uspješno dodano!</Text>
                            <Text style={styles.alertMessage}>Rižoto sa piletinom se nalazi u korpi</Text>
                            <View style={styles.divider} />
                            <TouchableOpacity
                                style={styles.alertButton}
                                onPress={() => setModalVisible2(false)}
                            >
                                <Text style={styles.alertButtonText}>Nastavi sa odabirom</Text>
                            </TouchableOpacity>
                            <View style={styles.divider} />
                            <TouchableOpacity
                                style={[styles.alertButton, styles.alertButtonPrimary]}
                                onPress={() => {
                                    setModalVisible2(false);  // Dismiss the modal
                                    handlePress2();  // Navigate to CartScreen
                                }}
                            >
                                <Text style={[styles.alertButtonText2, styles.alertButtonPrimaryText]}>Korpa</Text>
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
                {activeTab === 0 ? (
                    <>
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
                                                selectedCategory === category.id && styles.activeCategoryIcon
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
                        <ScrollView ref={scrollViewRef}>
                            {categories.map((category) => (
                                <View key={category.id}>
                                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '600', marginTop: 18 }}>
                                        {category.label}
                                    </Text>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.itemsContainer}>
                                        {items.map((item, index) => (
                                            <TouchableOpacity key={index} onPress={() => setBottomSheetVisible2(true)}>
                                                <View style={styles.itemCard}>
                                                    <Image source={item.image} style={styles.itemImage} />
                                                    <View style={styles.discountBadge}>
                                                        <Text style={styles.discountText}>{item.discount}</Text>
                                                    </View>
                                                    <View style={styles.itemInfo}>
                                                        <Text style={styles.itemTitle}>{item.title}</Text>
                                                        <Text style={styles.itemPrice}>{item.price}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOrder: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonTextNotFollowing: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonTextReserve: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
        borderTopColor: '#444',
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
        backgroundColor: '#EFEFEF',
    },

    buttonTextFollowing: {
        color: '#030303',
    },

    buttonReserve: {
        backgroundColor: '#0195F5',
        marginTop: 16,
        paddingVertical: 10,
        borderRadius: 5,
    },

    buttonOrder: {
        backgroundColor: '#EFEFEF',
        marginTop: 16,
        paddingVertical: 10,
        borderRadius: 5,
    },

    buttonText: {
        fontSize: 14,
        color: '#030303',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    categoryScroll: {
        marginTop: 16,
        paddingHorizontal: 8,
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
        color: 'rgba(1, 149, 245, 1)',
    },

    activeCategoryIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
        tintColor: 'rgba(1, 149, 245, 1)',
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
    },

    ratingInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ratingText: {
        fontSize: 32,
        color: '#030303',
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
        color: '#030303',
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
        color: '#030303',
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
        color: '#030303',
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
        tintColor: '#030303',
    },

    iconText: {
        fontSize: 14,
        color: '#000', // ili boja koju preferiraš
        marginLeft: 8, // Dodaje razmak između ikone i teksta
    },
    

    infoLabel: {
        fontSize: 16,
        color: '#000',
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
        color: '#030303',
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
        color: '#030303',
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    bottomSheetBackgroundTouchable: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    qrCodeIcon: {
        width: 26,
        height: 26
    },
    section: {
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#030303',
    },

    sectionTitleForAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#030303',
        textAlign: 'center'
    },

    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optionButton: {
        width: 61,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F3F3F3',
    },
    selectedOption: {
        backgroundColor: '#007BFF', // Highlight color for the selected button
    },
    optionText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#030303',
    },

    optionText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#030303',
    },

    selectedOptionText: {
        color: '#fff', // Highlighted text color for selected button
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginTop: 15,
    },
    timeOptionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    timeButton: {
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        width: '30%',
        alignItems: 'center',
    },
    buttonsContainer: {
        marginTop: 20,
    },
    primaryButton: {
        backgroundColor: '#0195F5',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    primaryButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    secondaryButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    secondaryButton: {
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
    },

    bottomSheetContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    topDivider: {
        width: 40,
        height: 5,
        backgroundColor: '#D3D3D3',
        borderRadius: 2.5,
        alignSelf: 'center',
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        left: 80,
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 10,
    },

    horizontalScrollContainer: {
        flexDirection: 'row',
        gap: 10, // Razmak između dana
    },

    optionButtonForDay: {
        width: 48,
        height: 42, // Veća visina da se sve bolje vidi
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F3F3F3',
        marginRight: 1, // Razmak između elemenata
    },

    selectedOption: {
        backgroundColor: '#0195F5',
    },
    optionText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
    },
    selectedOptionText: {
        color: '#FFF',
    },
    dateText: {
        fontSize: 12,
        color: '#000',
    },

    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    timeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Omogućava prelamanje u novi red
        gap: 10, // Razmak između dugmadi
        justifyContent: 'space-between',
    },
    timeButton: {
        width: '48%', // Dva dugmeta u jednom redu
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        marginBottom: 10, // Razmak između redova
    },
    selectedTimeButton: {
        backgroundColor: '#007BFF',
    },
    timeText: {
        fontSize: 14,
        color: '#000',
    },
    selectedTimeText: {
        color: '#FFF',
    },
    fixedFooter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
    },
    saveButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    saveButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    footerButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resetButton: {
        backgroundColor: '#F3F3F3',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
    },
    resetButtonText: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    submitButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        flex: 1,
    },
    submitButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    backgroundTouchable: {
        flex: 1,
    },
    productImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    discountContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#ff5722',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    discountText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    content: {
        padding: 16,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        color: '#E92440',
        marginRight: 8,
        fontSize: 22,
        fontWeight: '700',
    },
    newPrice: {
        fontSize: 22,
        fontWeight: '700',
        color: '#030303',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 16,
    },
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    cartButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    cartButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    backButton: {
        fontSize: 50,
        color: '#000',
        fontWeight: 'bold',
        right: 8,
    },
    headerContent: {
        flex: 1,
        marginLeft: 8,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    productSubtitle: {
        fontSize: 14,
        color: '#777',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    imageContainer: {
        position: 'relative',
    },
    productImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    discountBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        opacity: 0.8,
    },
    discountText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    paginationText: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 'bold',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ddd',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#007bff',
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    quantitySelector: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    quantityLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cartButton: {
        flex: 1,
        height: 50,
        backgroundColor: '#0195F5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
    },
    cartButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    likes: {
        color: '#000',
        fontSize: 12,
    },

    boldText: {
        fontWeight: 'bold',
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

    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 10,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },


});


export default RestaurantProfile