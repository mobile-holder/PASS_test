import React, { useEffect, useState } from 'react';
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
    const [isReady, setReady] = useState(false);
    const [initialRoute, setInitialRoute] = useState('WelcomePage');
    const [userDID, setUserDID] = useState(undefined);
    const [userID, setUserID] = useState(undefined);
    const [userFicture, setUserFicture] = useState();

    useEffect(() => {
        const getUserInfo = () => { //데이터 가져오기(setUserDID 함꼐)
                //const userDID='ethr:zxufsn1v3';
                //const userDID=undefined;
                // if (userDID) { //DID만 있고 사원증 없을경우
                //     setInitialRoute('BlankCardPage');
                // }
                /* else*/ if (userDID&&userID) { //사원증(DID, ID) 있을 경우
                     setInitialRoute('CardPage');
                 }
                // setReady(true);
        }
        getUserInfo(); //블록체인 서버에서 정보 가져오기
    }, [/*userDID, userID*/]);

    const _loadData = async () => {
        try {
            const value = await AsyncStorage.getItem('tasks_did');
            const value2 = await AsyncStorage.getItem('tasks_id');
            /*const value3 = await AsyncStorage.getItem('tasks_ficture')
            userF != null ? JSON.parse(jsonValue) : null;*/
            //const value3 = null;
            await AsyncStorage.getItem('tasks_ficture', (err, value) => {
                if (err == null) {
                
                const value3 = JSON.parse(value).uri;
                console.log(value3);
                /*const data = (value3.uri).toString();
                console.log(data);
                setUserFicture(data);
                console.log(userFicture);*/
                }  
            });/*
                if(value3 !== null) {
                    //value3 = toString(`${JSON.parse(value3)}`);
                    console.log(value3.uri);
                    const a1 = JSON.stringify(value3.uri);
                    
                    console.log(a1+"이거");
                    
                    const a2 = JSON.parse(a1);
                    
                    console.log(a2);
                } else console.log(err); 
                
            });*/
            
        
            if (value !== null) {
                setUserDID(value);
                console.log(value);
            };
            
            if(value2 !== null) {
                setUserID(value2);
                console.log(value2);
            };
            
            /*if(value3 !== null) {
                //value3 = toString(`${JSON.parse(value3)}`);
                //setUserFicture(value3);
                console.log(userFicture);
            };*/
        } catch (e) {
            console.error(e);
        };
    };

    if (!isReady) return (
        <AppLoading
            startAsync={_loadData}
            onFinish={() => setReady(true)}
            onError={console.error}
        />
    )
    else
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <StatusBar></StatusBar>
                    <Navigation initialRoute={initialRoute} 
                                userDID={userDID} 
                                userID={userID}
                                //userFicture={userFicture}
                    />
                </Container>
            </ThemeProvider>
        );
};

export default App;