
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ text, backgroundColor, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.main, { backgroundColor: backgroundColor }]}>
            <Text style={styles.txt}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    main: { paddingHorizontal: 20, paddingVertical: 13, marginVertical: 7, borderRadius: 30, width: '85%', },
    txt: { fontSize: 16, color: '#FFF', fontFamily: 'Roboto-Medium', textAlign: 'center' },
})

export default Button;
