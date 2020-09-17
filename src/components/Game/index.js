
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated, Easing } from "react-native";
import { GameIntro } from "../";
const Game = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <GameIntro />
        </View>
    );
};

const styles = StyleSheet.create({
    main: { flex: 1,  }
});

export default Game;
