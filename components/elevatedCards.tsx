import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.container}>

                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Tap</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Me</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>To</Text>
                    </View>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Scroll</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>😊</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>😉</Text>
                    </View>

                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },

    container: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',


    },
    card: {
        height: 100,
        width: 100,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    cardOne: {
        backgroundColor: '#EF5354',

    },
    cardTwo: {
        backgroundColor: '#50DBB4',
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
    },
})
