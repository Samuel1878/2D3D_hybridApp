
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import Home from "./screens/Home";
import ThreeD from "./screens/3D";
import TwoD from "./screens/2D";
import Wallet from "./screens/wallet";
import More from "./screens/More";
import {useFonts} from "expo-font";
import { useEffect ,useContext} from "react";
import * as SplashScreen from "expo-splash-screen";
import {  View } from "react-native";
import Loader from "./components/loader";
import GlobalContext from "./services/global/globalContext";
import themeProvider from "./libs/theme";
import {  useTranslation } from 'react-i18next';
import SocketContext from './services/socket/socketContext';
import AuthContext from './services/auth/authContext';
import { FETCH_INFO } from './libs/actions';
const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();
const Navigations = ({navigation}) => {
  const {socket}  = useContext(SocketContext);
  const {userToken} = useContext(AuthContext);
  const colors = themeProvider().colors;
  const {t} = useTranslation();
    let [fontsLoaded] = useFonts({
        Roboto : require("../assets/fonts/Roboto-Regular.ttf"),
        Roboto_Bold: require("../assets/fonts/Roboto-Bold.ttf")
    });
  const {  setNavigation, userRef } = useContext(GlobalContext);
useEffect(()=>{
  setNavigation(navigation)
},[])
useEffect(()=>{
    if(fontsLoaded){
         SplashScreen.hideAsync();
         return
    }
    
},[fontsLoaded]);
  useEffect(() => {
    userRef && socket && socket.emit(FETCH_INFO, userToken);
  }, [userRef]);
if(!fontsLoaded){
    return<View><Loader/></View>}
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.bg_1, fontWeight: "bolder" },
        headerTitleStyle: { fontWeight: "600" },
        tabBarActiveTintColor: colors.app_4,
        tabBarInactiveTintColor: colors.bg_1,
        tabBarLabelStyle: { fontSize: 12 },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.bg_2,
          paddingHorizontal: 15,
          borderTopWidth: 0,
          height: 90,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize;
          let iconColor = focused ? colors.app_1 : colors.bg_3b;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              iconSize = focused ? 34 : 26;
              return (
                <Ionicons name={iconName} size={iconSize} color={iconColor} />
              );
              break;
            case "2D":
              iconName = focused
                ? "numeric-2-box-multiple"
                : "numeric-2-box-multiple-outline";
              iconSize = focused ? 28 : 26;
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={iconSize}
                  color={iconColor}
                />
              );
              break;
            case "3D":
              iconName = focused
                ? "numeric-3-box-multiple"
                : "numeric-3-box-multiple-outline";
              iconSize = focused ? 28 : 26;
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={iconSize}
                  color={iconColor}
                />
              );
              break;
            case "Wallet":
              iconName = focused ? "wallet" : "wallet-outline";
              iconSize = focused ? 28 : 26;
              return (
                <Ionicons name={iconName} size={iconSize} color={iconColor} />
              );
              break;

            default:
              iconName = focused
                ? "drag-horizontal-variant"
                : "drag-horizontal";
              iconSize = focused ? 30 : 30;
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={iconSize}
                  color={iconColor}
                />
              );

              break;
          }
        },
      })}
    >
      <Tab.Screen name={t("home")} component={Home} />
      <Tab.Screen name={t("2D")} component={TwoD} />
      <Tab.Screen name={t("wallet")} component={Wallet} />
      <Tab.Screen name={t("3D")} component={ThreeD} />
      <Tab.Screen name={t("more")} component={More} />
    </Tab.Navigator>
  );
};
export default Navigations;
