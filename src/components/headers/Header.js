import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import dreamPass_x64 from '../assets/images/dreamPass_x64.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from './theme';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
});

const Header = () => {
    return (
        <View style={style.container}>
            <Image source={dreamPass_x64} style={{ width: 64, height: 67, margin : [0,0,0,10]}} />
            <MaterialCommunityIcons 
                    size = {64} 
                    name = {bars}
                    color = {theme.colors.mono800} 
            />
        </View>
    )
}

export default Header;