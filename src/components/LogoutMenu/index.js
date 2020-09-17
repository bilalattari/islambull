
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { Background, Logo } from "../../assets";
import Button from "../Button";

const LogoutMenu = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <ImageBackground style={styles.image} source={Background}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.label}>Dinimiz islam ve tarihimizi oynayarak kesfet.</Text>
                <Button onPress={() => { navigation.navigate('LoginForm') }} text={'Giris yap'} backgroundColor={'#bf2f4b'} />
                <Button onPress={() => { navigation.navigate('CreatAccount') }} text={'Kayit ol'} backgroundColor={'#2f81bf'} />
                <View style={styles.sepraterview}>
                    <View style={styles.seprater}/>
                    <Text style={styles.middletxt}>yada</Text>
                    <View style={styles.seprater}/>
                </View>
                <Button onPress={() => { navigation.navigate('LoginMenu') }} text={'Oyunu dene'} backgroundColor={'#51A047'} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    main: { flex: 1 },
    image: { flex: 1, resizeMode: "cover", alignItems: 'center' },
    logo: { marginTop: 50, resizeMode: "contain", width: 200, height: 200 },
    label: { color: '#FFF', fontFamily: 'Roboto-Medium', marginVertical: 20 },
    sepraterview:{paddingHorizontal: 30, marginVertical:10, flexDirection:'row', justifyContent:'center', alignItems:'center'},
    seprater:{flex:1,height:1,backgroundColor:'#FFF'},
    middletxt:{color:'#FFF', fontFamily:'Roboto-Bold', marginHorizontal: 10,},
});

export default LogoutMenu;
