import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

const Navigation = (props) => {
    const initialRoute = props.initialRoute;
    const userDID = props.userDID;
    const userID = props.userID;
    return (
        <NavigationContainer>
            <AuthStack initialRouteName={initialRoute} userDID={userDID} userID={userID} />
        </NavigationContainer>
    );
};

export default Navigation;