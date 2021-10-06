import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';
import { theme } from '../colors/Theme';

const IssueButton = ({ onPress, ...props}) => {
    const title = props.title;
    const titleColor = '#fff';
    const userID = props.userID;
    const [exist, setExist] = useState(true);
    
    //getUserDBInfo() 를 통해 value에 대한 데이터가 맞는지

    useEffect(() => {
        if(exist) {
            if(!userID) {
                setExist(false); // 처음 진입해서 id 입력 안할시
            };// 처음 진입해서 id 입력시
        } else {
            if(userID) { //지우고 다시 쓸때
                setExist(true);
            } else setExist(false); // 안쓴다면
        };

    },[exist,userID]);

    return exist ? (
        <TouchableOpacity style={styles.button}
                onPress = {onPress}
            >
                <Text style={[
                    styles.title,
                    { color: titleColor }
                ]}>{title} </Text>
            </TouchableOpacity>
    ) : (
        <TouchableOpacity style={styles.button}
                onPress = {() => alert("ID를 확인해주세요")}
            >
                <Text style={[
                    styles.title,
                    { color: titleColor }
                ]}>{title} </Text>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.blue900,
        width: 245,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: theme.mono800,
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android: {
                elevation: 12,
            },
        }),
    },
    title: {
        fontSize: 30,
    },
});

export default IssueButton;