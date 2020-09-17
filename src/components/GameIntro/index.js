
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated, Easing } from "react-native";
import { Background, Scorebackground, Userimage, } from "../../assets";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { MainGame } from "../";
const GameIntro = ({ navigation }) => {
    const [counterValue, setcounterValue] = useState('!')
    const [introviewdisplaynone, setintroviewdisplaynone] = useState(false)
    const [mainGameViewDisplay, setmainGameViewDisplay] = useState(true)
    const counterScale = new Animated.Value(1);
    const translateIntroX = new Animated.Value(400); //400
    const backgroundImageOpacity = new Animated.Value(1);
    const ScorebackgroundImageOpacity = new Animated.Value(0);
    const translateUserImageX = new Animated.Value(-800); //-800


    useEffect(() => {


        console.log('mhvjhkjjkgjhg', counterValue);
        // console.log(alert());
        if (counterValue !== '!') {
            if (counterValue > 0) {
                counterScaleDownAnimation();
                if (counterValue == 1) {
                    console.log('translate anim 1')
                    // translateUserImageXAnimationFinish()
                }
            } else if (counterValue == 0) {
                translateUserImageXAnimationFinish();
                // alert(counterValue)
                setTimeout(() => {
                    introFinishAnimation();
                }, 1000);
            }
        }
    }, [counterValue])
    translateUserImageX.addListener(({ value }) => {
        // console.log(value)
        // setlocal(value)
    });


    const translateUserImageXAnimation = () => {
        Animated.timing(
            translateUserImageX,
            {
                delay: 100,
                toValue: 40,
                duration: 1000,
                easing: Easing.ease,
                useNativeDriver: false,
            }
        ).start(() => {
            Animated.timing(
                translateUserImageX,
                {
                    delay: 10,
                    toValue: 0,
                    duration: 100,
                    easing: Easing.ease,
                    useNativeDriver: false,
                }
            ).start(() => {
                setTimeout(() => {
                    setcounterValue(3)
                    console.log('settime')
                    // counterValue = 1;
                    // counterScaleDownAnimation();
                }, 400);
                // setcounterValue(counterValue+1)
            });
        })
    }
    const translateUserImageXAnimationFinish = () => {
        translateUserImageX._value = 0;
        Animated.timing(
            translateUserImageX,
            {
                delay: 0,
                toValue: 30,
                duration: 400,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            // translateUserImageX._value = 30;
            Animated.timing(
                translateUserImageX,
                {
                    delay: 0,
                    toValue: -50,
                    duration: 300,
                    easing: Easing.sin,
                    useNativeDriver: false,
                }
            ).start(() => {
                Animated.timing(
                    translateUserImageX,
                    {
                        delay: 0,
                        toValue: 80,
                        duration: 300,
                        easing: Easing.sin,
                        useNativeDriver: false,
                    }
                ).start(() => {
                    Animated.timing(
                        translateUserImageX,
                        {
                            delay: 0,
                            toValue: -100,
                            duration: 250,
                            easing: Easing.sin,
                            useNativeDriver: false,
                        }
                    ).start(() => {
                        Animated.timing(
                            translateUserImageX,
                            {
                                delay: 0,
                                toValue: 400,
                                duration: 250,
                                easing: Easing.sin,
                                useNativeDriver: false,
                            }
                        ).start();
                    });
                });
            });
        });
    }
    const introAnimation = () => {
        Animated.timing(
            translateIntroX,
            {
                delay: 400,
                toValue: 0,
                duration: 500,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            backgroundImageOpacityAnimation();
        });
    }
    const introFinishAnimation = () => {
        translateIntroX._value = 0;
        Animated.timing(
            translateIntroX,
            {
                delay: 200,
                toValue: 400,
                duration: 500,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            setintroviewdisplaynone(false);
            setmainGameViewDisplay(true);
        });
    }
    const backgroundImageOpacityAnimation = () => {
        Animated.timing(
            ScorebackgroundImageOpacity,
            {
                toValue: 1,
                duration: 0,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start();
        Animated.timing(
            backgroundImageOpacity,
            {
                delay: 0,
                toValue: 0.5,
                duration: 500,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            translateUserImageXAnimation();
        });
    }

    const counterScaleDownAnimation = (counterValue) => {
        console.log('in the scale ', counterValue)
        Animated.timing(
            counterScale,
            {
                delay: 100,
                toValue: 0.8,
                duration: 300,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            counterScaleUpAnimation();
        });
    }
    const counterScaleUpAnimation = () => {
        console.log(counterValue)

        Animated.timing(
            counterScale,
            {
                delay: 200,
                toValue: 1,
                duration: 300,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            // translateUserImageXAnimationFinish();
            // if (counterValue - 1 !== 0) {
            setcounterValue(counterValue - 1)
            // }
        });
    }

    const counterScaleStyle = {
        transform: [
            {
                scale: counterScale
            }
            // {
            //     scale: counterScale.interpolate({
            //         inputRange: [1, 2],
            //         outputRange: [1, 2]
            //     })
            // }
        ]
    }
    const transformStyle = {
        transform: [{
            translateX: translateIntroX,
        }]
    }
    const translateUserImageXStyle = {
        transform: [{
            translateX: translateUserImageX,
        }]
    }

    if (counterValue === '!') {
        // introAnimation();
    }

    // translateUserImageXAnimationFinish();
    // translateUserImageXAnimation()
    // if (counterValue !== '!') {
    // counterScaleDownAnimation();
    // }
    // setTimeout(() => {
    // }, 3000);
    console.log('opacity', backgroundImageOpacity);
    console.log('opacity', translateUserImageX);
    return (
        <View style={styles.main}>
            <View style={styles.imgview}>
                <Animated.Image style={[styles.Scorebackground, { opacity: ScorebackgroundImageOpacity }]} source={Scorebackground} />
            </View>
            <View style={styles.imgview}>
                <Animated.Image style={[styles.image, { opacity: backgroundImageOpacity }]} source={Background} />
            </View>
            {
                introviewdisplaynone == true ?
                    <Animated.View style={[styles.animatedmain,
                    { left: translateIntroX }
                        // transformStyle,
                    ]}>
                        <View style={styles.headingview}>
                            <Text style={styles.heading}>Hazirmisin?</Text>
                            <Animated.View style={[styles.userview, { left: translateUserImageX },]}>
                                <Image style={[styles.userimage]} source={Userimage} />
                                <Text style={styles.username}>Deniyosum</Text>
                            </Animated.View>
                        </View>
                        <View style={styles.bottomview}>
                            <View style={styles.iconview}>
                                <Animated.Text style={[styles.counter, counterScaleStyle]}>{counterValue}</Animated.Text>
                            </View>
                            <View>
                                <Text style={styles.bottomtxt}>5 hatada oyun biter</Text>
                            </View>
                        </View>
                    </Animated.View>
                    : null
            }
            {
                mainGameViewDisplay ?
                    <MainGame /> : null
            }

        </View>
    );
};

const styles = StyleSheet.create({
    main: { alignItems: 'center', flex: 1, },
    animatedmain: { alignItems: 'center', flex: 1, },
    imgview: { flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, },
    image: { width: '100%', height: '100%', resizeMode: "stretch", opacity: 1, },
    Scorebackground: { width: '100%', height: '100%', resizeMode: 'cover', },
    iconview: { width: 90, height: 90, borderRadius: 50, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', },
    headingview: { alignItems: 'center', marginTop: 30, flex: 1 },
    heading: { marginBottom: 40, color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 40 },
    bottomtxt: { color: '#FFF', marginTop: 60, fontFamily: 'Roboto-Bold', fontSize: 30 },
    bottomview: { alignItems: 'center', flex: 1.5 },
    userimage: { width: 80, height: 80, resizeMode: 'cover', },
    username: { color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 20, marginTop: 5, },
    userview: { left: -1000, justifyContent: 'center', alignItems: 'center' },
    counter: { fontSize: 70, fontFamily: 'Roboto-Bold' },
});

export default GameIntro;
