import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const Timer = ({navigation}) => {
    const [time, setTime] = useState(5);
    
    useEffect(() => {
        if(time < 1) {
            navigation.pop();
        };
        const timeOut = () => { 
            setTimeout(() => {
                if(time <1) {
                    clearTimeout(timeOut);
                } else setTime(time -1);
            },1000);
        };
        timeOut();
    }, [time]);

    return <Text style={{fontSize:20}}>남은시간 : {`${time}`} 초</Text>
};

export default Timer;