import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DIDCreatePage, WelcomePage } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
    //const theme = useContext(ThemeContext);
    return (
        <Stack.StackNavigator initialRouteName="WelcomePage">
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="DIDCreatePage" component={DIDCreatePage} />
        </Stack.StackNavigator>
    );
};

export default AuthStack;