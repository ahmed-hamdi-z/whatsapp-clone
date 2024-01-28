import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import ChatSettingScreen from "../screens/ChatSettingScreen";
import AuthScreen from "../screens/AuthScreen";


const AppNavigator = (props) => {

  const isAuth = false
  return (
    <NavigationContainer>
   {isAuth ? (<MainNavigator /> ):( <AuthScreen /> )}
    </NavigationContainer>
  );
};

export default AppNavigator;
