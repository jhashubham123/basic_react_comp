import React from 'react';
import { View, Text, StyleSheet, Linking, Image, TouchableHighlight } from 'react-native';


export default function ActionCard() {

    function openWebSite(webSitrLink: string) {
        Linking.openURL(webSitrLink)
    }
    return (

        <View>
            <View>
                <Text style={styles.headerText}>Action card</Text>
            </View>

            <View style={styles.container} >

                <Text style={[styles.text14_700, { alignSelf: 'center', paddingVertical: 8 }]}>Learn react native from screatch</Text>

                <Image source={{ uri: 'https://blog.logrocket.com/wp-content/uploads/2022/04/high-performance-graphics-react-native-skia.png' }} style={styles.imageStyle} />
                <Text style={[styles.text14_700, { paddingHorizontal: 15, paddingVertical: 8 }]}>
                    Article is about react-native
                </Text>
                <Text style={[styles.text14_400, { paddingHorizontal: 15, paddingVertical: 8, },]} >
                    Thanks to Shopify, William Candollin, Christian Falch, and
                    the entire dev team behind react-native-skia, we can now
                    use Skia in our React Native applications to draw awesome
                    graphics and create trendy UI concepts like Neumorphism and Glassmorphism.
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TouchableHighlight onPress={() => openWebSite('https://blog.logrocket.com/wp-content/uploads/2022/04/high-performance-graphics-react-native-skia.png')} >
                        <View style={styles.myButton}>
                            <Text style={styles.buttonText}>Read more</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => openWebSite('https://www.instagram.com/shubii7/')} >
                        <View style={styles.myButton}>
                            <Text style={styles.buttonText}>Follow me</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b4e9f3',
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10,


    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    text14_700: {
        fontSize: 14,
        fontWeight: '700',
        color: 'black'
    },
    text14_400: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    imageStyle: {
        height: 200
    },
    myButton: {
        backgroundColor: '#69d2e7',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginVertical: 10

    },
    buttonText: {
        color: '#000000',
        fontWeight: '600',
        fontSize: 14,
    }
})