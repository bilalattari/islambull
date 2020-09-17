
import React, { useState, } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, FlatList } from "react-native";
import { Background, Userimage } from "../../assets";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from '../Button';
const RecentPlayed = ({ navigation }) => {
    const [isWaiting, setisWaiting] = useState(true)

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
                    <View style={styles.tabview}>
                        <TouchableOpacity onPress={() => { setisWaiting(true) }} style={[styles.txtview, isWaiting ? styles.activetab : null]}>
                            <Text style={styles.text}>Bekleyenler</Text>
                        </TouchableOpacity>
                        <View style={styles.seprater} />
                        <TouchableOpacity onPress={() => { setisWaiting(false) }} style={[styles.txtview, !isWaiting ? styles.activetab : null]}>
                            <Text style={styles.text}>Oynanmis</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} data={friendlist} renderItem={renderItem} /> */}

            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    main: { flex: 1, },
    image: { flex: 1, resizeMode: "cover", },
    icon: { padding: 10, alignItems: 'center' },
    iconview: { marginVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    text: { fontFamily: 'Roboto-Regular', textAlign: 'center', fontSize: 18, color: '#FFF' },
    frinditem: { marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
    userimage: { marginHorizontal: 10, borderRadius: 50, resizeMode: 'contain', width: 70, height: 70 },
    btnview: { width: 100, justifyContent: 'center', alignItems: 'center' },
    nametxt: { fontFamily: 'Roboto-Medium', color: '#FFF', fontSize: 20 },
    scoretxt: { color: '#CCC', },
    tabview: { flexDirection: 'row', flex: 1, justifyContent: 'center', paddingHorizontal: 20, },
    txtview: { flex: 1, padding: 5, },
    activetab: { borderBottomColor: '#FFF', borderBottomWidth: 3, },
    seprater: { marginHorizontal: 5, marginVertical: 10, backgroundColor: '#CCC', width: 1 },
})

export default RecentPlayed;
