import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FlatCards() {
    return (
        <View>
            <ScrollView >
                <Text style={styles.headingText}>
                    FlatCards
                </Text>
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Green</Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,

    },
    card: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 8
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