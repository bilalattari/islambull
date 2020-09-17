
import React, { useState, } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, FlatList } from "react-native";
import { Background, Userimage } from "../../assets";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from '../Button';
const FriendList = ({ navigation }) => {

    const friendlist = [
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
        {
            userimage: Userimage,
            name: 'apak 61',
            score: 728.399,
        },
    ]

    const renderItem = ({ item, ind }) => {
        return (
            <View style={styles.frinditem}>
                <Image source={Userimage} style={styles.userimage} />
                <View style={styles.main}>
                    <Text style={styles.nametxt}>apak 61</Text>
                    <Text style={styles.scoretxt}>En yüksek puan: 728.399</Text>
                </View>
                <View style={styles.btnview}>
                    <Button text={'Oyna'} backgroundColor={'#2f81bf'} />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.main}>
            <ImageBackground style={styles.image} source={Background}>

                <View style={styles.iconview}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.icon}>
                        <AntDesign name='left' color='#FFF' size={30} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Arkadasini sec</Text>
                    <TouchableOpacity style={styles.icon}>
                        <AntDesign name='plus' color='#FFF' size={30} />
                    </TouchableOpacity>
                </View>

                <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} data={friendlist} renderItem={renderItem} />

            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    main: { flex: 1, },
    image: { flex: 1, resizeMode: "cover", },
    icon: { padding: 10, justifyContent: 'center', alignItems: 'center' },
    iconview: { width: '100%', marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
    text: { fontFamily: 'Roboto-Medium', textAlign: 'center', fontSize: 23, color: '#FFF' },
    frinditem: { marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
    userimage: { marginHorizontal: 10, borderRadius: 50, resizeMode: 'contain', width: 70, height: 70 },
    btnview: { width: 100, justifyContent: 'center', alignItems: 'center' },
    nametxt: { fontFamily: 'Roboto-Medium', color: '#FFF', fontSize: 20 },
    scoretxt: { color: '#CCC', },

})

export default FriendList;
