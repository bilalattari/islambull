
import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import Button from "../Button";

const InfoModal = ({ setisInfoLocal }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.txt}>IslamBul uygulamasinin amaic:</Text>
            <Text style={styles.txt}>This is best i have ever seen This is best i have ever seen This is best i have ever seen.</Text>
            <Text style={styles.txt}>This is best i have ever seen This is best i have ever seen This is best i have ever seen.This is bes.</Text>
            <Text style={styles.txt}>This is best i have ever seen This is best i have ever seenThis is best i have ever seen</Text>
            <View style={styles.btnview}>
                <Button text={'Soru iletmek icin tikla'} backgroundColor={'#bf2f4b'} />
                <Button onPress={()=>{setisInfoLocal()}} text={'Kapat'} backgroundColor={'#2f81bf'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: { paddingTop: 20, alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)' },
    txt: { marginHorizontal: 20, textAlign: 'center', marginVertical: 10, fontSize: 18, color: '#FFF' },
    btnview: { marginTop: 40, justifyContent: 'center', alignItems: 'center', width: '100%' },
})

export default InfoModal;
