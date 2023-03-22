import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Rohit Bhardwaj',
            status: 'Web designer, Web developer, React-native developer',
            imageUrl: 'https://img.cricketworld.com/images/f-118739/rohit-sharma-thumb.jpg'
        },
        {
            uid: 2,
            name: 'Nikhil Jha',
            status: 'Web designer, Hardware expert',
            imageUrl: 'https://rukminim1.flixcart.com/image/416/416/kt4ozgw0/poster/d/1/f/medium-anime-naruto-itachi-uchiha-matte-finish-poster-original-imag6jdgdf72pnzp.jpeg?q=70'
        },
        {
            uid: 3,
            name: 'Kirandeep Kaur',
            status: 'Intern in rocket science, Web designer',
            imageUrl: 'https://assets.telegraphindia.com/telegraph/9c8b457b-8963-4460-b162-d84c9dfc48fe.jpg'
        },
        {
            uid: 4,
            name: 'Shubham Jha',
            status: 'Flutter developer, react-native intern',
            imageUrl: 'https://i.pinimg.com/originals/d2/2a/0e/d22a0ee7e43fde6b8c549d9e70f24e44.jpg'
        }
    ]
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={Styles.headingText}>Contact List</Text>
            <ScrollView style={Styles.container}>
                {contacts.map(({ uid, name, status, imageUrl, }) => (
                    <View key={uid} style={Styles.userCard}>
                        <Image source={{ uri: imageUrl }} style={Styles.imageStyle} />
                        <View style={{ justifyContent: 'center', }}>
                            <Text style={Styles.nameStyle}>{name}</Text>
                            <Text style={Styles.statusStyle}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    container: {},
    userCard: {
        backgroundColor: '#abe4ff',
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    imageStyle: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 10,
    },
    nameStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black'
    },
    statusStyle: {
        fontSize: 13,
        fontWeight: '500'
    },

})