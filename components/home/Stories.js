import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { food } from '../../data/food';

const Stories = () => {
    const navigation = useNavigation();

    return (
        <View style={{ margin: 13 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                {food.length > 0 ? (
                    food.map((story, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{ alignItems: 'center' }}
                            onPress={() => navigation.navigate('ReelsScreen')}
                        >
                            <Image
                                source={{ uri: story.image }}
                                style={styles.story}
                            />
                            <Text style={{ color: 'white', marginTop: 10, fontSize: 11 }}>
                                {story.item}
                            </Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={{ color: 'white', fontSize: 14 }}>No stories available</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    story: {
        width: 63,
        height: 63,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 2.4,
        borderColor: '#0195F5',
    },
});

export default Stories;