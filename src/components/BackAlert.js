import { BackHandler, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const BackAlert = (value) => {
  const notice = value;
  
  useFocusEffect(() => {
      const onBackPress = () => {
      Alert.alert(`${notice}`, "앱을 종료하시겠습니까?", [
        { text: "취소", onPress: () => null },
        { text: "확인", onPress: () => BackHandler.exitApp() },
      ]); 
      return true;
    };

    BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );

    /*const backHandler_remove = BackHandler.removeEventListener(
      "hardwareBackPress", 
      onBackPress
    );*/

    return () => {
      //backHandler.remove();
      BackHandler.removeEventListener(
        "hardwareBackPress", 
        onBackPress
      );
    };
  },);
};

export default BackAlert;