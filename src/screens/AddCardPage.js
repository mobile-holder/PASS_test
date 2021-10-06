import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { theme } from '../colors/Theme';
import SearchInput from '../components/SearchInput';
import IssueButton from '../components/IssueButton';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Container = styled.View`
    flex : 1;
    align-items : center;
    background-color : ${theme.mono100};
    `;

const View = styled.View`
    flex : 1.5;
    align-items : center;
    `;

const AddCardPage = ({ navigation, route }) => {
    const userDID = route.params.userDID;
    const [newTask, setNewTask] = useState('');

    const _addTask = () => {
            alert(`입력 : ${newTask}`);
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    const _saveData = async (value) => {
        try {
            await AsyncStorage.setItem('tasks_id', value);
        } catch (e) {
            console.error(e);
        };
    };

    _saveData(newTask); // ID 저장

    return (
        <Container>
            <View></View>
            <View>
                <SearchInput 
                    placeholder="사원 ID"
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                />
            </View>
            <View style={{ justifyContent: 'center' }}>
                <IssueButton
                    title='발급하기'
                    userID={newTask}
                    userDID={userDID}
                    onPress={() => navigation.reset({ routes: [{
                        name: 'CompleteAddCardPage', 
                        params: { userID: newTask, userDID: userDID },
                    }]})}
                >
                </IssueButton>
            </View>
        </Container>
    );
};

export default AddCardPage;