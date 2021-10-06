import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import ShadowButton from '../components/ShadowButton';
import { theme } from '../colors/Theme';
import Header from '../components/headers/Header';
import BackAlert from '../components/BackAlert';

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${theme.mono100};
    `;

const View = styled.View`
    flex : 1.5;
    justify-content : center;
    align-items : center;
    `;

const CompleteAddCardPage = ({ navigation, route }) => {
    const userID = route.params.userID;
    const userDID = route.params.userDID;
    const userName = undefined;
    
    BackAlert("사원 출입증 생성완료");

    return (
        <Container>
            <Header nonMenu='nonMenu'/>
            <View>
                <Text style={{ fontSize: 20, color: theme.mono800 }}>
                    정상적으로 발급되었습니다.{`\n\n`}
                    이름: {`${userName}\n\n`} 
                    사원 ID: {`${userID}\n\n`}
                    회사명: 블록체인랩스 {`\n\n`}
                    DID: {`${userDID}\n\n`}                
            </Text>
            </View>
            <View>
                <ShadowButton
                    title="확인"
                    onPress={() => navigation.reset({ routes: [{
                        name: 'CardPage', 
                        params: { userID: userID },
                    }]})}
                />
            </View>
        </Container>
    );
};

export default CompleteAddCardPage;