
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Background, Logo } from "../../assets";
import Button from "../Button";
import { Input } from "..";
import AntDesign from "react-native-vector-icons/AntDesign";

const ForgetPassword = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <ImageBackground style={styles.image} source={Background}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.icon}>
                    <AntDesign name='left' color='#FFF' size={30} />
                </TouchableOpacity>
                <Image style={styles.logo} source={Logo} />
                <Input placeholdertext='Kullanici adin' iconname={'envelope-o'} />
                <Button onPress={() => { navigation.navigate('LoginForm') }} text={'göndermek'} backgroundColor={'#2f81bf'} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    main: { flex: 1 },
    image: { flex: 1, resizeMode: "cover", alignItems: 'center' },
    logo: { marginTop: 0, resizeMode: "contain", width: 150, height: 150 },
    icon: { alignSelf:'flex-start', padding: 10, },

});

export default ForgetPassword;
