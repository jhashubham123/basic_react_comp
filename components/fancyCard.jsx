import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function FancyCard({ name, image }) {
    return (
        <View>
            <Text style={styles.headingText}>Fancy Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: image,
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{name}</Text>

                    <Text style={styles.cardLabel}>Pink city, Jaipur</Text>
                    <Text style={styles.cardDescription}>Hawa mehal is nice place to visit, thousands of people come to visit this place
                        . People also come from outside the country to visit this place, Which makes it more beautiful.
                    </Text>
                    <Text style={styles.cardFooter}>12 Km away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    card: {
        height: 360,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    cardElevated: {
        backgroundColor: '#000000',
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 1, }


    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        padding: 12
    },
    cardImage: {
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 2,

    },
    cardLabel: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 10,
    },
    cardDescription: {
        color: '#9bafad',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 12,
    },
    cardFooter: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,

    },
})
