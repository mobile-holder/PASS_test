import React from 'react';
import styled from 'styled-components/native';
import { Image, Text, Button } from 'react-native';
import dreamPass_x64 from '../../assets/images/dreamPass_x64.png';
import ShadowButton from '../components/ShadowButton';
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

const DIDCreatePage = ({ navigation, props }) => {
    const did = props.did;

    return (
        <Container>
            <View>
                <Image source={dreamPass_x64} style={{ width: 64, height: 67 }} />
            </View>
            <View>
                <Text style={{ fontSize: 20, color: theme.mono800 }}
                    title="DID : ">${did} {'\n'}
                DID가 성공적으로 생성되었습니다.
            </Text>
            </View>
            <View>
                <ShadowButton
                    title="확인"
                    style={{ fontSize: 30 }}
                    onPress={() => navigation.navigate('BlankCardPage')} />
            </View>
        </Container>
    );
};

export default DIDCreatePage;