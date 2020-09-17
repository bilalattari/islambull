
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from "../Button";
import { Infoicon, Leftarrow, Rightarrow, Userimage } from "../../assets";
import Fontisto from "react-native-vector-icons/Fontisto";
const SettingModal = ({ setisSettingLocal }) => {
    return (
        <View style={styles.main}>

            <TouchableOpacity style={styles.icon}>
                <Fontisto name='power' size={25} color='#FFF' />
            </TouchableOpacity>

            <View style={styles.card}>
                <View style={styles.namebar}>
                    <Text style={styles.txt}>Bilgilerim</Text>
                </View>


                <View style={styles.profileimgview}>
                    <TouchableOpacity style={styles.arrowicon}>
                        <Image style={styles.arrowiconimage} source={Leftarrow} />
                    </TouchableOpacity>
                    <Image style={styles.proimg} source={Userimage} />
                    <TouchableOpacity style={styles.arrowicon}>
                        <Image style={styles.arrowiconimage} source={Rightarrow} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>Yasir</Text>


                <View style={styles.recordhighlight}>
                    <Text style={styles.recordtitle}>En Yuksek puanim</Text>
                    <Text style={styles.recordnum}>0</Text>
                </View>
                <View style={styles.record}>
                    <Text style={styles.recordtitle}>Toplam puanim</Text>
                    <Text style={styles.recordnum}>0</Text>
                </View>
                <View style={styles.recordhighlight}>
                    <Text style={styles.recordtitle}>Kazandim / Kaybettin</Text>
                    <Text style={styles.recordnum}>
                        <Text style={styles.bluetxt}>0</Text>
                        {' / '}
                        <Text style={styles.redtxt}>0</Text>
                    </Text>
                </View>
                <View style={styles.record}>
                    <Text style={styles.recordtitle}>Siralaman</Text>
                    <Text style={styles.recordnum}>0.</Text>
                </View>

            </View>

            <View style={styles.btnviewBot}>
                <Button onPress={() => { setisSettingLocal() }} text={'Tamam'} backgroundColor={'#2f81bf'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: { paddingTop: 20, alignItems: 'center', paddingTop: 80, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)' },
    txt: { marginHorizontal: 20, textAlign: 'center', marginVertical: 10, fontSize: 18, color: '#FFF' },
    btnview: { marginTop: 40, justifyContent: 'center', alignItems: 'center', width: '100%' },
    icon: { position: 'absolute', left: 5, top: 5, padding: 10, justifyContent: 'center', alignItems: 'center' },
    iconimage: { resizeMode: 'contain', width: 25, height: 25, },
    arrowicon: { padding: 10, justifyContent: 'center', alignItems: 'center' },
    arrowiconimage: { resizeMode: 'contain', width: 45, height: 45, },
    card: { backgroundColor: '#FFF', width: '80%', borderRadius: 10, paddingBottom: 40, },
    namebar: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#2f81bf', height: 60, borderTopLeftRadius: 10, borderTopRightRadius: 10, },
    txt: { fontSize: 45, color: '#FFF', fontFamily: 'ProximaNova-Bold', textAlign: 'center' },
    profileimgview: { marginTop: 20, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', },
    proimg: { width: 80, height: 80, resizeMode: 'contain', borderRadius: 50, },
    name: { fontSize: 25, color: '#000', fontFamily: 'ProximaNova-Bold', textAlign: 'center' },
    recordhighlight: { backgroundColor: '#DDD', flexDirection: 'row', paddingVertical: 0, paddingHorizontal: 10, justifyContent: 'space-between', alignItems: 'center' },
    record: { flexDirection: 'row', paddingVertical: 0, paddingHorizontal: 10, justifyContent: 'space-between', alignItems: 'center' },
    recordtitle: { fontSize: 15, color: '#000', fontFamily: 'ProximaNova-Bold', textAlign: 'center' },
    recordnum: { fontSize: 25, color: '#000', fontFamily: 'ProximaNova-Bold', textAlign: 'center' },
    bluetxt: { color: '#2f81bf' },
    redtxt: { color: '#bf2f4b' },
    btnviewBot: { width: '77%', justifyContent: 'center', alignItems: 'center', top: -28 }
});

export default SettingModal;
