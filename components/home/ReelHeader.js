import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

const ReelHeader = ({ title, subtitle, oldPrice, newPrice }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={32} color="#fff" />
            </TouchableOpacity>

            {/* Title and Subtitle */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>Biftek</Text>
                <Text style={styles.subtitle}>Biftek</Text>
            </View>

            {/* Price Section */}
            <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>28 KM</Text>
                <Text style={styles.newPrice}>22 KM</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#000',
        height: 60,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        marginStart: 17,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#bbb',
        fontSize: 15,
        marginStart: 17,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    oldPrice: {
        color: '#E92440',
        textDecorationLine: 'line-through',
        fontSize: 22,
        marginRight: 8,
        fontWeight: 'bold',
    },
    newPrice: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 19
    },
});

export default ReelHeader;
