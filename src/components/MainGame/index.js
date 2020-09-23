
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated, Easing } from "react-native";
import ProgressCircle from 'react-native-progress-circle'
import LinearGradient from "react-native-linear-gradient";
import { Userimage, } from "../../assets";
import { Button } from "..";
import { StackActions } from '@react-navigation/native';

const MainGame = ({ navigation }) => {
    // alert('main game display');
    const [counter, setcounter] = useState(99)
    const [option, setoption] = useState(0)
    const [correctAnswer, setcorrectAnswer] = useState(2)
    let [counterinterval, setcounterinterval] = useState('')
    const [gameStart, setgameStart] = useState(false)
    const [questionEndAnim, setquestionEndAnim] = useState(false)
    const leftValueMainView = new Animated.Value(-450);
    const leftValueQuestionView = new Animated.Value(-900);
    const optionviewOpacity = new Animated.Value(0);
    const ScoreCardLeftValue = new Animated.Value(-400);
    const translateValueOptionForHide = new Animated.Value(0);
    const [report, setreport] = useState({ score: 0, numOfCorrectAnswer: 0, numOfWrongAnswer: 0, activequestion: 0 });
    const [scoreCard, setscoreCard] = useState(false)

    // let displayInterpolate = displayValue.interpolate({
    //     inputRange: [1, 0],
    //     outputRange: ['flex', 'none']
    // })

    const questions = [
        {
            question: 'Earth is Round ?',
            options: [
                'Flat',
                'Round',
                'Oval',
                'Squre'
            ],
            correct: 2,
        },
        {
            question: 'Pizza is round ?',
            options: [
                'Squre',
                'Oval',
                'Round',
                'Flat',
            ],
            correct: 3,
        },
        {
            question: 'Box is Squre ?',
            options: [
                'Oval',
                'Round',
                'Flat',
                'Squre',
            ],
            correct: 4,
        },
        {
            question: 'Mobile is Flat ?',
            options: [
                'Squre',
                'Round',
                'Oval',
                'Flat',
            ],
            correct: 4,
        },
        {
            question: 'Light is good ?',
            options: [
                'Dont Know',
                'Sure',
                'No',
                'Yes',
            ],
            correct: 4,
        },
    ]

    useEffect(() => {
        console.log('questionEndAnim ', questionEndAnim);
        if (questionEndAnim) {
            console.log('IF  questionEndAnim ', questionEndAnim);

            // setreport({
            //     ...report,
            //     activequestion: report.activequestion + 1,
            // })

            leftValueQuestionView._value = -400;
            Animated.timing(
                leftValueQuestionView,
                {
                    delay: 0,
                    toValue: 0,
                    duration: 400, //400
                    easing: Easing.sin,
                    useNativeDriver: false,
                }
            ).start(() => {
                translateValueOptionForHide._value = 400;
                Animated.timing(
                    translateValueOptionForHide,
                    {
                        delay: 0,
                        toValue: 0,
                        duration: 0, //500
                        easing: Easing.sin,
                        useNativeDriver: false,
                    }
                ).start(() => {
                    optionviewOpacity._value = 0;

                    Animated.timing(
                        optionviewOpacity,
                        {
                            delay: 0,
                            toValue: 1,
                            duration: 500, //500
                            easing: Easing.sin,
                            useNativeDriver: false,
                        }
                    ).start(() => {
                        startTimer();
                    })
                });
            });

        }
    }, [questionEndAnim])

    useEffect(() => {
        console.log('Score Card use effect', scoreCard)
        Animated.timing(
            ScoreCardLeftValue,
            {
                delay: 0,
                toValue: 0,
                duration: 400, //500
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start()
    }, [scoreCard])

    useEffect(() => {
        console.log('Do something after report has changed', report);
        console.log('in the report useeffect questionEndAnim ', questionEndAnim);
        if (report.activequestion === 4 && report.activequestion + 1 === (report.numOfCorrectAnswer + report.numOfWrongAnswer)) {
            console.log('This. is Last ', report.activequestion);
            setTimeout(() => {
                console.log('Last set');
                leftValueMainView._value = 0;

                Animated.timing(
                    leftValueMainView,
                    {
                        delay: 0,
                        toValue: 400,
                        duration: 500,
                        easing: Easing.sin,
                        useNativeDriver: false,
                    }
                ).start(() => {
                    console.log('Last End Anim');
                    setscoreCard(true)
                });

            }, 1000);
        }



        if (report.activequestion >= 1 && report.activequestion <= 3 && questionEndAnim) {
            // setquestionEndAnim(false);
            reset();
        }
        // if(report.activequestion === 1 && questionEndAnim){
        //     // setquestionEndAnim(false);
        //     reset();
        // }
        // if(report.activequestion === 2 && questionEndAnim){
        //     // setquestionEndAnim(false);
        //     reset();
        // }

        // if(report.activequestion === 3 && questionEndAnim){
        //     // setquestionEndAnim(false);
        //     reset();
        // }

        if (gameStart && (report.activequestion === 0)) {
            // if (gameStart && (report.activequestion === 0 )) {
            console.log('Do something after report has changed', report);
            console.log('Do DODODODO', report);



            setTimeout(() => {
                reset();
            }, 1000);
        }
    }, [report]);

    const leftValueMainViewAnimation = () => {
        Animated.timing(
            leftValueMainView,
            {
                delay: 0,
                toValue: 0,
                duration: 500,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            leftValueQuestionViewAnimation();
        });
    }
    const leftValueQuestionViewAnimation = () => {
        Animated.timing(
            leftValueQuestionView,
            {
                delay: 0,
                toValue: 0,
                duration: 700,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            optionviewOpacityAnimation();
        });
    }
    const optionviewOpacityAnimation = () => {
        Animated.timing(
            optionviewOpacity,
            {
                delay: 0,
                toValue: 1,
                duration: 500,
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            setgameStart(true)
            setTimeout(() => {
                console.log('set time');
                startTimer();
            }, 100)
        });
    }
    const fadeOutAnimation = () => {
        console.log('fadeoutopacity');
        optionviewOpacity._value = 1;
        Animated.timing(
            optionviewOpacity,
            {
                delay: 500,
                toValue: 1,
                duration: 500, //500
                easing: Easing.sin,
                useNativeDriver: false,
            }
        ).start(() => {
            translateValueOptionForHide._value = 0;
            Animated.timing(
                translateValueOptionForHide,
                {
                    delay: 0,
                    toValue: 400,
                    duration: 0, //500
                    easing: Easing.sin,
                    useNativeDriver: false,
                }
            ).start(() => {
                leftValueQuestionView._value = 0;
                Animated.timing(
                    leftValueQuestionView,
                    {
                        delay: 0,
                        toValue: 400,
                        duration: 400, //400
                        easing: Easing.sin,
                        useNativeDriver: false,
                    }
                ).start(() => {
                    let intervalid = setInterval(() => {
                        // console.log('setInterval ', counter);
                        let localVal = 0;
                        setcounter((prvCounter) => {
                            localVal = prvCounter;
                            if (prvCounter >= 99) {
                                // if (report.activequestion === 0 || report.activequestion === 1 || report.activequestion === 2 || report.activequestion === 3) {
                                if (report.activequestion >= 0 && report.activequestion <= 3) {
                                    setreport({
                                        ...report,
                                        activequestion: report.activequestion + 1,
                                    })

                                }

                                // if (report.activequestion !== 4) {
                                setoption(0);
                                setcounterinterval('');
                                setquestionEndAnim(false)
                                // }


                                setTimeout(() => {

                                    console.log('chang ques');

                                    setquestionEndAnim(true)
                                }, 1000);
                                console.log('End ', prvCounter);
                                clearInterval(intervalid);
                                return (99)
                            } else {
                                if ((prvCounter + 5) >= 99) {
                                    return (99)
                                }
                                return (prvCounter + 5)

                            }
                        })

                        console.log('End of Animation', localVal);
                        // if (localVal >= 99) {
                        //     setreport({
                        //         ...report,
                        //         activequestion: report.activequestion + 1
                        //     })
                        // }
                    }, 0)

                });
            });
        });

    }
    const startTimer = () => {
        console.log('start timer');
        let intervalid = setInterval(() => {
            // console.log('setInterval ', counter);
            setcounter((prvCounter) => {
                if (prvCounter === 0) {
                    // console.log(counterinterval);
                    clearInterval(intervalid);
                    counterEnd(prvCounter);
                    return (prvCounter)
                } else {
                    return (prvCounter - 1)
                }
            })
        }, 130)
        setcounterinterval(intervalid);
    }
    const counterEnd = (counterVal) => {
        if (option === 0) {
            clearInterval(counterinterval);
            setoption(questions[report.activequestion].correct);
            console.log('End ', counterVal)
            setreport({
                ...report,
                numOfWrongAnswer: report.numOfWrongAnswer + 1,
            })

            // setTimeout(() => {
            //     reset();
            // }, 2000);
        }
    }
    // setTimeout(() => {
    //     reset();
    // }, 2000);
    const optionPress = (optionloc) => {
        console.log('Press')
        if (option === 0 && counter !== 99) {
            clearInterval(counterinterval);
            console.log('Option ', optionloc);
            setoption(optionloc);
            if (questions[report.activequestion].correct === optionloc) {
                setreport({
                    ...report,
                    numOfCorrectAnswer: report.numOfCorrectAnswer + 1,
                    score: report.score + 10000,
                })
            } else {
                setreport({
                    ...report,
                    numOfWrongAnswer: report.numOfWrongAnswer + 1,
                })
            }

            // setTimeout(() => {
            //     reset();
            // }, 2000);

        }

    }


    if (gameStart == false) {
        // setgameStart(true)
        leftValueMainViewAnimation();
    }


    const reset = () => {
        fadeOutAnimation()
    }
    console.log('game start ', gameStart);
    console.log('Counter Render', counter);
    console.log('Report ', report);

    return (
        <>
            {
                !scoreCard ?
                    <Animated.View style={[styles.main, { left: leftValueMainView }]}>

                        <Animated.View style={[styles.headerView,]}>
                            <View style={styles.imageprogressview}>
                                <ProgressCircle
                                    percent={27}
                                    radius={39}
                                    borderWidth={3}
                                    color="#666"
                                    shadowColor="#57C4E9"
                                    bgColor="#444"
                                >
                                    <Image style={[styles.userimage,]} source={Userimage} />
                                </ProgressCircle>
                                <View>

                                    <View style={styles.scorecontainner}>
                                        <Text style={styles.scoretxt}>{report.score === 0 ? '00000' : report.score}</Text>
                                        <View style={styles.timerouterview}>
                                            <Animated.View style={[{ width: counter + '%' }, styles.animatedbar]}>
                                                <LinearGradient colors={['#D20000', '#ffc800', '#ffc800', '#D20000', '#ff2f00']}
                                                    locations={[0, 0.2, 0.5, 0.8, 1]}
                                                    style={styles.timerinnerview}>

                                                </LinearGradient>
                                            </Animated.View>
                                        </View>
                                        <View style={styles.correctouterview}>
                                            <LinearGradient colors={['#00FFEA', '#00C3B3', '#00625A']}
                                                locations={[0, 0.5, 1]}
                                                style={styles.correctinnerview}>

                                            </LinearGradient>
                                        </View>
                                    </View>
                                    <Text style={styles.timercount}>{counter}</Text>
                                </View>

                            </View>



                            <View style={styles.mistakecontainer}>
                                <View style={styles.mistakeview}>
                                    {[1, 2, 3, 4, 5].map((val, ind) => {
                                        if (val <= report.numOfWrongAnswer) {
                                            return (
                                                <View key={ind} style={[styles.onemistake, styles.onemistakeactive]} />
                                            )
                                        } else {
                                            return (
                                                <View key={ind} style={[styles.onemistake]} />
                                            )
                                        }
                                    })}

                                </View>
                                <TouchableOpacity onPress={() => { navigation.dispatch(StackActions.pop(1)) }} style={styles.exitbtn}>
                                    <Text style={styles.exittxt}>BITIR</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>


                        <Animated.View style={[styles.questionview, { left: leftValueQuestionView }]}>
                            <Text style={styles.questiontxt}>{(report.activequestion + 1) + ' )   '}{questions[report.activequestion].question}</Text>
                        </Animated.View>

                        <Animated.View style={[styles.optioncontainer, { opacity: optionviewOpacity, left: translateValueOptionForHide }]}>
                            {
                                [1, 2, 3, 4].map((val, ind) => {
                                    return (
                                        <TouchableOpacity key={ind} onPress={() => { optionPress(val) }} style={[styles.optionview, (option === val && questions[report.activequestion].correct === val && option !== 0) ? styles.correct : (option === val && questions[report.activequestion].correct !== val && option !== 0) ? styles.notcorrect : (option !== val && questions[report.activequestion].correct === val && option !== 0) ? styles.correct : null]}>
                                            <Text style={styles.optiontxt}>{questions[report.activequestion].options[ind]}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }

                        </Animated.View>

                    </Animated.View>
                    :
                    <Animated.View style={[styles.scorecard, { left: ScoreCardLeftValue }]}>
                        <Text style={styles.name}>Yarisma sonucu</Text>
                        <Text style={styles.name}>Score : {report.score}</Text>
                        <Text style={styles.correctWrong}>Correct : {report.numOfCorrectAnswer}</Text>
                        <Text style={styles.correctWrong}>Wrong : {report.numOfWrongAnswer}</Text>
                        <Button onPress={() => { navigation.dispatch(StackActions.pop(1)) }} text={'Tekrar oyna'} backgroundColor={'#bf2f4b'} />
                        <Button onPress={() => { navigation.dispatch(StackActions.pop(1)) }} text={'Anasayfaya geri don'} backgroundColor={'#2f81bf'} />
                    </Animated.View>
            }

        </>

    );
};

const styles = StyleSheet.create({
    main: { flex: 1, },
    headerView: { padding: 10, flexDirection: 'row', justifyContent: 'space-between' },
    imageprogressview: { flexDirection: 'row', height: 80, zIndex: 1 },
    userimage: { borderRadius: 50, width: 65, height: 65, resizeMode: 'cover', },
    scorecontainner: { opacity: 1, display: 'flex', left: -8, zIndex: -1 },
    scoretxt: { fontSize: 12, fontFamily: 'ProximaNova-Bold', color: '#0090C0' },
    timerouterview: { backgroundColor: '#444', width: 130, height: 20, justifyContent: 'center', borderTopRightRadius: 25, borderBottomRightRadius: 4, },
    timerinnerview: { height: 19 },
    correctouterview: { marginTop: 2, backgroundColor: '#444', width: 60, height: 22, justifyContent: 'center', borderTopRightRadius: 4, borderBottomRightRadius: 25, },
    correctinnerview: { width: 30, height: 21 },
    timercount: { left: -17, top: -5, zIndex: +1111, fontSize: 11, fontFamily: 'ProximaNova-Bold', color: '#0090C0', backgroundColor: '#444', width: 25, height: 25, textAlign: 'center', textAlignVertical: 'center', borderRadius: 20, borderColor: '#999', borderWidth: 2, },
    mistakecontainer: { height: 80, },
    mistakeview: { flexDirection: 'row', marginTop: 14, },
    onemistake: { marginHorizontal: 1, backgroundColor: '#444', width: 20, height: 20, borderColor: '#999', borderWidth: 2, borderRadius: 2, },
    onemistakeactive: { backgroundColor: 'red' },
    exitbtn: { alignSelf: 'flex-end', marginTop: 10, width: 60, height: 25, backgroundColor: 'red', borderRadius: 2, borderWidth: 4, borderColor: '#AAA', justifyContent: 'center', alignItems: 'center', },
    exittxt: { fontFamily: 'ProximaNova-Bold', color: '#FFF' },
    questionview: { marginTop: 10, backgroundColor: '#00000050', marginHorizontal: 20, height: 150, justifyContent: 'center', alignItems: 'center', borderColor: '#999', borderWidth: 5, borderRadius: 8, },
    questiontxt: { fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#FFF', textAlign: 'center' },
    optioncontainer: { opacity: 0, paddingBottom: 10, flex: 1, justifyContent: 'flex-end' },
    optionview: { opacity: 1, backgroundColor: '#00000050', paddingVertical: 13, paddingHorizontal: 5, marginHorizontal: 20, marginVertical: 5, justifyContent: 'center', alignItems: 'center', borderColor: '#999', borderWidth: 4, borderRadius: 30, },
    correct: { backgroundColor: 'rgba(0,255,0,0.25)', borderColor: 'rgba(0,255,0,0.65)', },
    notcorrect: { backgroundColor: 'rgba(255,0,0,0.25)', borderColor: 'rgba(255,0,0,0.65)', },
    optiontxt: { fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#FFF', textAlign: 'center' },
    animatedbar: { overflow: 'hidden', borderTopRightRadius: 25, borderBottomRightRadius: 4 },
    scorecard: { flex: 1, opacity: 1, left: -400, justifyContent: 'center', alignItems: 'center', },
    name: { textAlign: 'center', marginVertical: 20, fontSize: 35, fontFamily: 'ProximaNova-Bold', color: '#FFF' },
    correctWrong: { textAlign: 'center', marginVertical: 20, fontSize: 25, fontFamily: 'ProximaNova-Bold', color: '#FFF' },
    rowDire: { flexDirection: 'row' },


});

export default MainGame;
