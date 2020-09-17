
import React, { useState, } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";
import { Background, Logo, Settingicon, Infoicon, Musicicon } from "../../assets";
import Button from "../Button";
import { InfoModal, SettingModal, HighScore } from "../";
import Ionicons from "react-native-vector-icons/Ionicons";
const LoginMenu = ({ navigation }) => {
    const [isInfo, setisInfo] = useState(false)
    const [isVolume, setisVolume] = useState(true)
    const [isSetting, setisSetting] = useState(false)
    const [isHighScore, setisHighScore] = useState(false)
    const setisInfoLocal = () => {
        setisInfo(!isInfo)
    }
    const setisHighScoreLocal = () => {
        setisHighScore(!isHighScore)
    }
    const setisSettingLocal = () => {
        setisSetting(!isSetting)
    }
    const setisVolumeLocal = () => {
        setisVolume(!isVolume)
    }
    return (
        <View style={styles.main}>
            <ImageBackground style={styles.image} source={Background}>
                <View style={styles.iconview}>
                    <View style={styles.twoicon}>
                        <TouchableOpacity onPress={() => { setisInfoLocal() }} style={styles.icon}>
                            <Image style={styles.iconimage} source={Infoicon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setisVolumeLocal() }} style={styles.icon}>
                            {isVolume ?
                                <Ionicons name='volume-high-sharp' color='#FFF' size={30} />
                                :
                                <Ionicons name='volume-mute' color='#FFF' size={30} />
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { setisSettingLocal() }} style={styles.icon}>
                        <Image style={styles.iconimage} source={Settingicon} />
                    </TouchableOpacity>
                </View>

                <Image style={styles.logo} source={Logo} />
                <Button onPress={() => { navigation.navigate('FriendList') }} text={'Arkadaşımla oyun'} backgroundColor={'#bf2f4b'} />
                <Button onPress={() => { navigation.navigate('Game') }} text={'5 hatalı sonsuz oyun'} backgroundColor={'#bf2f4b'} />
                <Button onPress={() => { navigation.navigate('RecentPlayed') }} text={'Oyunlarım'} backgroundColor={'#2f81bf'} />
                <Button onPress={() => { setisHighScoreLocal() }} text={'Sıralama'} backgroundColor={'#2f81bf'} />
            </ImageBackground>
            {
                isInfo ?
                    <InfoModal setisInfoLocal={setisInfoLocal} />
                    : null
            }
            {
                isSetting ?
                    <SettingModal setisSettingLocal={setisSettingLocal} />
                    : null
            }
            {
                isHighScore ?
                    <HighScore setisHighScoreLocal={setisHighScoreLocal} />
                    : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    main: { flex: 1 },
    image: { flex: 1, resizeMode: "cover", alignItems: 'center' },
    logo: { marginBottom: 30, marginTop: 10, resizeMode: "contain", width: 200, height: 200 },
    icon: { padding: 10, justifyContent: 'center', alignItems: 'center' },
    iconimage: { resizeMode: 'contain', width: 25, height: 25, },
    twoicon: { flexDirection: 'row' },
    iconview: { width: '90%', marginTop: 20, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', },

})

export default LoginMenu;
