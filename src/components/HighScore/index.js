
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
const HighScore = ({ setisHighScoreLocal }) => {
    const record = [
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Nicat',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
        {
            name: 'Eumeen',
            score: '166277'
        },
    ]

    const renderItem = ({ item, index }) => {
        return (
            <View style={(index % 2 == 0) ? styles.record : styles.recordhighlight}>
                <Text style={styles.recordnum}>{index + 1}.</Text>
                <Text style={styles.recordname}>{item.name}</Text>
                <Text style={styles.recordscore}>{item.score}</Text>
            </View>
        )
    }
    return (
        <View style={styles.main}>

            <View style={styles.wrapper}>
                <View style={styles.card}>
                    <View style={styles.namebar}>
                        <Text style={styles.txt}>Siralama</Text>
                    </View>


                    <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} data={record} renderItem={renderItem} />

                </View>
                <TouchableOpacity onPress={() => { setisHighScoreLocal() }} style={styles.icon}>
                    <Entypo name='cross' size={40} color='#FFF' />
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    main: { alignItems: 'center', paddingTop: 80, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)' },
    btnview: { marginTop: 40, justifyContent: 'center', alignItems: 'center', width: '100%' },
    icon: { backgroundColor: '#bf2f4b', borderRadius: 50, position: 'absolute', right: -15, top: -15, justifyContent: 'center', alignItems: 'center' },
    card: { overflow: 'hidden', backgroundColor: '#FFF', width: '100%', borderRadius: 10, height: 450 },
    namebar: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#2f81bf', height: 60, borderTopLeftRadius: 10, borderTopRightRadius: 10, },
    txt: { fontSize: 45, color: '#FFF', fontFamily: 'ProximaNova-Bold', textAlign: 'center' },
    recordhighlight: { backgroundColor: '#DDD', flexDirection: 'row', justifyContent: 'space-between', },
    record: { flexDirection: 'row', justifyContent: 'space-between', },
    recordname: { flex: 1, paddingVertical: 10, borderLeftWidth: 1, borderLeftColor: '#CCC', borderRightWidth: 1, borderRightColor: '#CCC', textAlignVertical: 'center', fontSize: 15, color: '#000', fontFamily: 'ProximaNova-Bold', textAlign: 'center' },
    recordnum: { textAlignVertical: 'center', width: 35, fontSize: 15, color: '#2f81bf', fontFamily: 'Roboto-Bold', textAlign: 'center' },
    recordscore: { textAlignVertical: 'center', width: 80, fontSize: 15, color: '#bf2f4b', fontFamily: 'ProximaNova-Bold', textAlign: 'center' },
    bluetxt: { color: '#2f81bf' },
    redtxt: { color: '#bf2f4b' },
    wrapper: { width: '85%', },
});

export default HighScore;
