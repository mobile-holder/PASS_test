/*import React, { useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './colors/Main';
import Navigation from './navigations';
import { BlankCardPage, CardPage } from './screens';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.SafeAreaView`
    flex: 1;
    `

const App = () => {
    const [isReady, setReady] = React.useState(false);
    const [initialRoute, setInitialRoute] = React.useState('WelcomePage');
    const [userDID, setUserDID] = useState(undefined);
    const [userName, setUserName] = React.useState(undefined);

    React.useEffect(() => {
        const getUserInfo = async () => { //데이터 가져오기(setUserDID 함꼐)
            setTimeout(() => {
                const _loadData = async () => {
                    try {
                        const value = await AsyncStorage.getItem('tasks');
                        if (value !== null) {
                            setUserDID(value);
                            console.log(value);
                        }
                    } catch (e) {
                        console.error(e);
                    };
                };
                //const userDID='ethr:zxufsn1v3';
                //const userDID=undefined;
                if (userDID) { //DID만 있고 사원증 없을경우
                    setInitialRoute('BlankCardPage');
                };
                // else if (userDID&&userName) { //사원증(DID, 이름) 있을 경우
                //     setInitialRoute('CardPage');
                // }
                // setReady(true);
            }, 500);
        }
        //getUserInfo(); //블록체인 서버에서 정보 가져오기
    }, []);

    const _loadData = async () => {
        try {
            const value = await AsyncStorage.getItem('tasks');
            if (value !== null) {
                setUserDID(value);
                console.log(value);
            }
        } catch (e) {
            console.error(e);
        };
    };

    if (!isReady) return (
        <AppLoading
            startAsync={getUserInfo()}
            onFinish={() => setReady(true)}
            onError={console.error}
        />
    )
    else
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <StatusBar></StatusBar>
                    <Navigation initialRoute={initialRoute}> userDID={userDID}</Navigation>
                </Container>
            </ThemeProvider>
        );
};

*/