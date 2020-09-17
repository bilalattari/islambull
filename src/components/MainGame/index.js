
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated, Easing } from "react-native";
import { GameIntro } from "..";
const MainGame = ({ navigation }) => {
    alert('main game display');
    return (
        <View style={styles.main}>
            <Text>Main Game</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: { flex: 1, }
});

export default MainGame;
