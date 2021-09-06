import React from 'react';
import styled from 'styled-components/native';
import { Image, Text, Button } from 'react-native';
import logo from '../../assets/images/logo.png';
import ShadowButton from '../components/ShadowButton';
import DIDCreatePage from './DIDCreatePage';
import { theme } from '../colors/Theme';

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    `;

const View = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    `;

const WelcomePage = ({ navigation }) => {
    return (
        <Container>
        <DIDCreatePage did="ethr.zxufsn1v2"/>
                <Image source={logo} style={{ width: 240, height: 247 }} />
            <View>
                <Text style={{ fontSize: 30, color: theme.mono800 }} >
                    공유오피스 전용 {'\n'}
                    DID 모바일 사원증
                    </Text>
            </View>
            <View>
                <ShadowButton
                    title="시작하기"
                    style={{ fontSize: 30 }}
                    onPress={() => navigation.navigate('DIDCreatePage')} />
            </View>
        </Container>
    );
};

export default WelcomePage;
