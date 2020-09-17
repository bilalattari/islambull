
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginMenu, LogoutMenu, FriendList, RecentPlayed, LoginForm, CreatAccount, ForgetPassword, Game,  } from "../";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Game'}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="LoginMenu" component={LoginMenu} />
                <Stack.Screen name="LogoutMenu" component={LogoutMenu} />
                <Stack.Screen name="FriendList" component={FriendList} />
                <Stack.Screen name="RecentPlayed" component={RecentPlayed} />
                <Stack.Screen name="LoginForm" component={LoginForm} />
                <Stack.Screen name="CreatAccount" component={CreatAccount} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="Game" component={Game} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
