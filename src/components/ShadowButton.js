import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { theme } from '../colors/Theme';

export default ()=> {
    return < View style={styles.shadow}></View>
};

const styles = StyleSheet.create({
    shadow : {
        backgroundColor : theme.blue900,
        width : 245,
        height : 65,
        ...Platform.select({
            ios: {
                shadowColor : theme.mono800,
                shadowOffset : {
                    width : 10,
                    height : 10,
                },
                shadowOpacity : 0.5,
                shadowRadius : 10,
            },
            android :{
                elevation : 20,
            },
        }),
    },
});