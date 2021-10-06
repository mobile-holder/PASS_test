import React, { useState } from 'react';
import styled from 'styled-components/native';
import CardBox from '../components/CardBox';
import QrButton from '../components/QrButton';
import Header from '../components/headers/Header';
import { theme } from '../colors/Theme';

const Container = styled.View`
    flex : 1;
    align-items : center;
    background-color : ${theme.mono100};
    `;

const View = styled.View`
    flex : 1.5;
    justify-content : center;
    align-items : center;
    `;

    

const CardPage = ({ navigation, route, props }) => {
    const userID = route.params.userID;
    const userFicture = route.params.userFicture;
    const [ficture, setFicture] = useState(undefined);
    console.log(userFicture);
    console.log(userID)

    return (
        <Container>
            <Header
                //onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} 
                onPress={() => navigation.navigate("menuDrawer")}
            />
            <View>
                <CardBox
                    userID={`${userID}`}
                    //source={{uri:ficture}}
                //onPress={() => navigation.navigate('AddCardPage', {userName:`${userName}`})}
                >
                </CardBox>
            </View>
            <View>
                <QrButton
                    title={'QR 생성'}
                    userID={`${userID}`}
                    //userDID={userDID}
                    onPress={() => navigation.navigate('QRPage', { userID: `${userID}` })}
                >
                </QrButton>
            </View>
        </Container>
    );
};

export default CardPage;