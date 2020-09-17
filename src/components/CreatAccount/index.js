
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Background, Logo } from "../../assets";
import Button from "../Button";
import { Input } from "..";
import AntDesign from "react-native-vector-icons/AntDesign";

const CreatAccount = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <ImageBackground style={styles.image} source={Background}>
                <View style={styles.topview}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.icon}>
                        <AntDesign name='left' color='#FFF' size={30} />
                    </TouchableOpacity>
                    <Text style={styles.topheading}>Kayit formu</Text>
                    <View style={styles.dummy} />
                </View>
                <Image style={styles.logo} source={Logo} />
                <Input placeholdertext='Kullanici adin' iconname={'user-o'} />
                <Input placeholdertext='e-Mail' iconname={'envelope-o'} />
                <Input placeholdertext='*****' iconname={'lock'} />
                <Button onPress={() => { navigation.navigate('LoginMenu') }} text={'Kayit ol'} backgroundColor={'#2f81bf'} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    main: { flex: 1 },
    image: { flex: 1, resizeMode: "cover", alignItems: 'center' },
    logo: { marginTop: 0, resizeMode: "contain", width: 150, height: 150 },
    icon: { padding: 10, },
    topview: { flexDirection: 'row', alignItems: 'center', },
    topheading: { color: '#FFF', fontSize:17, fontFamily: 'Roboto-Medium', flex: 1, textAlign: 'center' },
    dummy: { width:45 },
});

export default CreatAccount;
