import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { food } from '../../data/food'

const Stories = () => {
    return (
        <View style={{ margin: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {food.map((story, index) => (
                    <View key={index} style={{alignItems: 'center'}}>
                        <Image source={{ uri: story.image }}
                            style={styles.story} />
                        <Text style={{color: 'white', marginTop: 10, fontSize: 11}}>{
                            // story.item.length > 8 ? story.item.slice(0, 8).toLowerCase() + '...'
                            // : story.item.toLowerCase()
                            story.item
                        }</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 63,
        height: 63,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 2.4,
        borderColor: '#0195F5',
    },
})

export default Stories