
import React from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Input = ({ placeholdertext, iconname, }) => {
    return (
        <View style={styles.inputview}>
            {iconname == 'lock' ?
                <Feather style={styles.icon} name={iconname} size={23} color='rgba(255,255,255,0.5)' />
                :
                <FontAwesome style={styles.icon} name={iconname} size={23} color='rgba(255,255,255,0.5)' />
            }
            <TextInput style={styles.input} placeholder={placeholdertext} placeholderTextColor='#CCC' />
        </View>
    );
};

const styles = StyleSheet.create({
    main: { paddingHorizontal: 20, paddingVertical: 13, marginVertical: 7, borderRadius: 30, width: '85%', },
    txt: { fontSize: 16, color: '#FFF', fontFamily: 'Roboto-Medium', textAlign: 'center' },
    inputview: { width: '85%', marginVertical: 10, alignItems: 'center', flexDirection: 'row', borderRadius: 30, borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)' },
    icon: { marginLeft: 20, },
    input: { color: '#CCC', flex: 1, marginHorizontal: 10, }
})

export default Input;
