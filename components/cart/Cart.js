import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Modal, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {

    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [bottomSheetVisible2, setBottomSheetVisible2] = useState(false);
    const [bottomSheetVisible3, setBottomSheetVisible3] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const items = [
        { id: '1', name: 'Rižoto sa tunom', price: 22, discount: 33, image: 'https://www.secretosdelsur.com/wp-content/uploads/2023/06/Risottomet-tomaat-en-champignons-7.jpg' },
        { id: '2', name: 'Rižoto sa tunom', price: 22, discount: 33, image: 'https://www.secretosdelsur.com/wp-content/uploads/2023/06/Risottomet-tomaat-en-champignons-7.jpg' },
        { id: '3', name: 'Rižoto sa tunom', price: 22, discount: 33, image: 'https://www.secretosdelsur.com/wp-content/uploads/2023/06/Risottomet-tomaat-en-champignons-7.jpg' },
        { id: '4', name: 'Rižoto sa tunom', price: 22, discount: 33, image: 'https://www.secretosdelsur.com/wp-content/uploads/2023/06/Risottomet-tomaat-en-champignons-7.jpg' },
        { id: '5', name: 'Rižoto sa tunom', price: 22, discount: 33, image: 'https://www.secretosdelsur.com/wp-content/uploads/2023/06/Risottomet-tomaat-en-champignons-7.jpg' },
    ];

    const calculateTotal = () => items.reduce((total, item) => total + item.price * (1 - item.discount / 100), 0).toFixed(2);
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('RestaurantProfileScreen')
    };

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                {/* Back Button and Cart Title */}
                <View style={styles.topRow}>
                    <TouchableOpacity onPress={handlePress} style={styles.backButtonContainer}>
                        <Text style={styles.backButton}>‹</Text>
                    </TouchableOpacity>
                    <Text style={styles.cartTitle}>Korpa</Text>
                </View>

                <View style={styles.headerContent}>
                    <Image
                        source={{
                            uri: 'https://metropolis.ba/wp-content/uploads/2024/11/8P8A9281-Large-1024x683.jpg',
                        }}
                        style={styles.profileImage}
                    />
                    <View style={styles.headerDetails}>
                        <View style={styles.restaurantRow}>
                            <Text style={styles.restaurantName}>metropolis</Text>
                            <Image
                                source={require('../../assets/verified.png')}
                                style={styles.verifiedIcon}
                            />
                        </View>
                        <Text style={styles.location}>Sarajevo</Text>
                    </View>
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followButtonText}>Prati</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider} />

            </View>


            {/* Date and Time Section */}
            <View style={styles.infoRow}>
                <Image source={require('../../assets/calendar_black.png')} style={styles.icon} />
                <Text style={styles.infoText}>22.05.2024 godine u 11:00 za 5 osoba</Text>
            </View>
            <View style={styles.divider} />

            {/* Payment Method */}
            <View style={styles.infoRow}>
                <Image source={require('../../assets/cash.png')} style={styles.icon} />
                <Text style={styles.infoText}>Plaćanje kešom</Text>
            </View>
            <View style={styles.divider} />

            {/* Item List */}
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemName}>{item.name}</Text>

                            <View style={styles.discountBadge}>
                                <Text style={styles.discountText}>33% popusta</Text>
                            </View>

                            <Text style={styles.itemPrice}>
                                <Text style={styles.oldPrice}>{item.price} KM</Text>{' '}
                                {item.price - (item.price * item.discount) / 100} KM
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.deleteIconContainer}
                        onPress={() => {
                            setModalVisible(true);
                        }}>
                            <Image source={require('../../assets/delete.png')} style={styles.deleteIcon} />
                        </TouchableOpacity>


                    </View>

                )}
            />
            <View style={styles.divider} />
            <View style={styles.footer}>
                <Text style={styles.totalText}>Total u korpi ({items.length} proizvoda)</Text>
                <Text style={styles.totalPrice}>{calculateTotal()} KM</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.footer}>
                <View style={styles.quantitySelector}>
                    <Text style={styles.quantityLabel}>Plati avans 12 KM</Text>
                </View>
                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => {
                        setBottomSheetVisible(true);
                        // setBottomSheetVisible3(false);
                        // setModalVisible2(true);
                    }}
                >
                    <Text style={styles.cartButtonText}>Plati čitav iznos</Text>
                </TouchableOpacity>

            </View>

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
                            <View style={styles.headerSheet}>
                                <Text style={styles.headerSheetText}>
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
                            <View style={styles.footerButtonsContainer}>
                                <TouchableOpacity style={styles.resetButton}>
                                    <Text style={styles.resetButtonText}>Resetuj odabir</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.submitButton}
                                    onPress={() => {
                                        setBottomSheetVisible(false);
                                        setBottomSheetVisible2(true);
                                        // setModalVisible2(true);
                                    }}>
                                    <Text style={styles.submitButtonText}>Spasi</Text>
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
                <View style={styles.bottomSheetOverlay}>
                    <TouchableOpacity
                        style={styles.bottomSheetBackgroundTouchable}
                        onPress={() => setBottomSheetVisible2(false)}
                    />
                    <View style={styles.bottomSheetContainer}>
                        <View style={styles.topDivider} />

                        <ScrollView
                            contentContainerStyle={styles.scrollContent}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.header}>
                                <Text style={styles.headerText}>Način plaćanja</Text>
                            </View>

                            {[
                                {
                                    image: require('../../assets/card.png'),
                                    text: 'Kartica završava sa 9101',
                                },
                                {
                                    image: require('../../assets/card.png'),
                                    text: 'Kartica završava sa 1234',
                                },
                                {
                                    image: require('../../assets/card.png'),
                                    text: 'Kartica završava sa 789',
                                },
                                {
                                    image: require('../../assets/cash.png'),
                                    text: 'Plaćanje kešom',
                                },
                            ].map((item, index) => (
                                <React.Fragment key={index}>
                                    <View style={styles.iconWithTextContainer}>
                                        <Image source={item.image} style={styles.qrCodeIcon} />
                                        <Text style={styles.iconText}>{item.text}</Text>
                                    </View>
                                    <View style={styles.divider} />
                                </React.Fragment>
                            ))}
                            <TouchableOpacity style={styles.submitButton}
                                onPress={() => {
                                    setBottomSheetVisible(false);
                                    setBottomSheetVisible2(false);
                                    setBottomSheetVisible3(true);
                                }}>
                                <Text style={styles.submitButtonText}>Dodaj novu karticu</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                visible={bottomSheetVisible3}
                animationType="slide"
                onRequestClose={() => setBottomSheetVisible3(false)}
            >
                <View style={styles.bottomSheetOverlay}>
                    <TouchableOpacity
                        style={styles.bottomSheetBackgroundTouchable}
                        onPress={() => setBottomSheetVisible3(false)}
                    />
                    <View style={styles.bottomSheetContainer}>
                        <View style={styles.topDivider} />

                        <ScrollView
                            contentContainerStyle={styles.scrollContent}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.header}>
                                <Text style={styles.headerText}>Dodavanje nove kartice</Text>
                            </View>

                            {/* Input polje za ime na kartici */}
                            <TextInput
                                style={styles.inputField}
                                placeholder="Ime na kartici"
                                placeholderTextColor="#B0B0B0"
                            />

                            {/* Input polje za broj kartice sa ikonom */}
                            <View style={styles.cardNumberContainer}>
                                <Image
                                    source={require('../../assets/card.png')}
                                    style={styles.cardIcon}
                                />
                                <TextInput
                                    style={styles.cardNumberInput}
                                    placeholder="Broj kartice"
                                    placeholderTextColor="#B0B0B0"
                                    keyboardType="numeric"
                                />
                            </View>

                            {/* Polja za datum isteka i CVV u jednom redu */}
                            <View style={styles.expiryCvvContainer}>
                                <TextInput
                                    style={styles.expiryInput}
                                    placeholder="MM/YY"
                                    placeholderTextColor="#B0B0B0"
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    style={styles.cvvInput}
                                    placeholder="CVV"
                                    placeholderTextColor="#B0B0B0"
                                    secureTextEntry
                                    keyboardType="numeric"
                                />
                            </View>

                            <TouchableOpacity
                                style={styles.submitButtonCard}
                                onPress={() => {
                                    setBottomSheetVisible(false);
                                    setBottomSheetVisible2(false);
                                    setBottomSheetVisible3(false);
                                }}
                            >
                                <Text style={styles.submitButtonCardText}>Završi dodavanje</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.alertBox}>
                        <Text style={styles.alertTitle}>Obrisati artikal iz korpe?</Text>
                        <Text style={styles.alertMessage}>Ova akcija će izbrisati odabrani 
                        artikal sa liste spremne za narudžbu</Text>
                        <View style={styles.divider} />
                        <TouchableOpacity
                            style={[styles.alertButton, styles.alertButtonRed]}
                            onPress={() => {
                                setModalVisible(false);
                                setModalVisible2(true);
                            }}
                        >
                            <Text style={styles.alertButtonTextRed}>Obriši</Text>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                        <TouchableOpacity
                            style={styles.alertButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.alertButtonText}>Vrati se na korpu</Text>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                        <TouchableOpacity
                            style={[styles.alertButton, styles.alertButtonPrimary]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={[styles.alertButtonText2, styles.alertButtonPrimaryText]}>Obriši iz korpe i dodaj u spremljeno</Text>
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
                        <Text style={styles.alertTitle}>Uspješno obrisano iz korpe!</Text>
                        <Text style={styles.alertMessage}>Odabrani artikal je obrisan iz korpe </Text>
                        <View style={styles.divider} />
                        <TouchableOpacity
                            style={styles.alertButton}
                            onPress={() => setModalVisible2(false)}
                        >
                            <Text style={styles.alertButtonText}>OK</Text>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                        <TouchableOpacity
                            style={[styles.alertButton, styles.alertButtonPrimary]}
                            onPress={() => setModalVisible2(false)}
                        >
                            <Text style={[styles.alertButtonText2, styles.alertButtonPrimaryText]}>Vrati artikal u korpu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flex: 1 },
    header: { marginBottom: 15 },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    backButtonContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        right: 8,
    },
    cartTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerDetails: { flex: 1 },
    restaurantName: { fontWeight: 'bold', fontSize: 18 },
    location: { fontSize: 14, color: '#777' },
    followButton: {
        backgroundColor: '#F5F5F5',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
    },
    followButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#030303',
    },
    infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    icon: { width: 24, height: 24, marginRight: 5 },
    infoText: { fontSize: 15, color: '#030303', marginLeft: 5, fontWeight: '600' },
    itemContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    itemImage: { width: 60, height: 60, marginRight: 10, borderRadius: 8 },
    itemDetails: { flex: 1 },
    itemName: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
    itemPrice: { fontSize: 14, color: '#888', marginTop: 12 },
    oldPrice: { textDecorationLine: 'line-through', color: '#E92440' },
    deleteIconContainer: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12.5,  // Ensures the outline is circular
        backgroundColor: '#D3D3D3',
    },

    deleteIcon: {
        width: 12,
        height: 12,
        tintColor: '#fff',  // Keeps the icon white
    },

    footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
    totalText: { fontSize: 16, fontWeight: 'bold' },
    totalPrice: { fontSize: 16, fontWeight: 'bold' },
    verifiedIcon: {
        width: 16,
        height: 16,
        marginLeft: 4,
    },

    restaurantRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    restaurantName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 5, // Razmak između naziva i ikone
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerDetails: {
        flex: 1,
    },
    restaurantRow: {
        flexDirection: 'row',
        alignItems: 'center', // Osigurava vertikalno poravnanje ikone i teksta
    },
    restaurantName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 5, // Razmak između naziva i ikone
    },
    verifiedIcon: {
        width: 18, // Veličina ikone
        height: 18,
    },
    location: {
        fontSize: 14,
        color: '#777',
        marginTop: 2, // Razmak između lokacije i gornjeg reda
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        alignSelf: 'stretch',
        marginVertical: 10,
    },
    discountBadge: {
        position: 'absolute',
        top: 8,
        backgroundColor: '#2C2C2C',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginTop: 12,
    },
    discountText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    quantitySelector: {
        height: 50,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 5
    },
    quantityLabel: {
        fontSize: 15,
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
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    bottomSheetOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    bottomSheetBackgroundTouchable: {
        flex: 1,
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
    headerSheet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    qrCodeIcon: {
        width: 26,
        height: 26
    },
    headerSheetText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        left: 80,
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
    horizontalScrollContainer: {
        flexDirection: 'row',
        gap: 10, // Razmak između dana
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
    bottomSheetOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    bottomSheetBackgroundTouchable: {
        flex: 1,
    },
    topDivider: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        alignSelf: 'center',
        borderRadius: 2.5,
        marginVertical: 10,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    header: {
        alignItems: 'center',
        marginVertical: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    iconWithTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    qrCodeIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    iconText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold'
    },

    inputField: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        padding: 12,
        marginTop: 16,
        fontSize: 16,
        color: '#333',
    },
    cardNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        padding: 12,
        marginTop: 16,
    },
    cardIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    cardNumberInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    expiryCvvContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    expiryInput: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: '#333',
        flex: 1,
        marginRight: 8,
    },
    cvvInput: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    submitButtonCard: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        padding: 16,
        marginTop: 24,
        alignItems: 'center',
    },
    submitButtonCardText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
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
    alertButton: {
        paddingVertical: 12,
        alignItems: 'center',
        width: '100%',
    },
    alertButtonRed: {
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
    alertButtonTextRed: {
        fontSize: 16,
        color: '#E92440',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    alertButtonText2: {
        fontSize: 16,
        color: '#030303',
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

export default Cart;
