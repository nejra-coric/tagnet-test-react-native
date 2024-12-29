import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo}
                    source={require('../../assets/logo.png')}
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/bookmark.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>3</Text>
                    </View>
                    <Image
                        source={require('../../assets/heart.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../assets/inbox.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    iconsContainer: {
        flexDirection: 'row',
    },

    logo: {
        width: 88,
        height: 20,
        resizeMode: 'contain'
    },

    icon: {
        width: 28,
        height: 28,
        marginLeft: 20,
        resizeMode: 'contain'
    },

    unreadBadge: {
        backgroundColor: '#FE0366',
        position: 'absolute',
        left: 40,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },

    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }
})

export default Header