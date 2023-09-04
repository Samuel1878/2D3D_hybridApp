import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from "./screens/Home";
import ThreeD from "./screens/3D";
import TwoD from "./screens/2D";
import { app_1, app_2, app_3, app_4, bg_1, bg_3, bg_4, bg_5 } from "./libs/style";
import {Font} from "expo"
import Wallet from "./screens/wallet";
import More from "./screens/More";
import {useFonts} from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();
const Navigations = () => {
    let [fontsLoaded] = useFonts({
        Roboto : require("../assets/fonts/Roboto-Regular.ttf"),
        Roboto_Bold: require("../assets/fonts/Roboto-Bold.ttf")
    })
// useEffect(()=>{
//       Font.loadAsync({
    
//       "Roboto": require("../assets/fonts/Roboto-Regular.ttf"),
//       "Roboto_Bold": require("../assets/fonts/Roboto-Bold.ttf"),

//     })
// },[])
useEffect(()=>{
    if(fontsLoaded){
         SplashScreen.hideAsync();
         return
    }
    
},[fontsLoaded])
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: bg_1, fontWeight: "bolder" },
          headerTitleStyle: { fontWeight: "500" },
          tabBarActiveTintColor: app_1,
          tabBarInactiveTintColor: app_2,
          tabBarLabelStyle: { fontSize:12},
          headerShown: false,
          tabBarStyle: { backgroundColor: bg_4, paddingVertical: 5,paddingHorizontal:15,borderTopWidth:0 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconSize;
            let iconColor = focused ? app_1 : app_2;
            switch (route.name) {
              case "Home":
                iconName = focused ? "home" : "home-outline";
                iconSize = focused ? 34 : 24;
                return (
                  <Ionicons name={iconName} size={iconSize} color={iconColor} />
                );
                break;
              case "2D":
                iconName = focused
                  ? "numeric-2-box-multiple"
                  : "numeric-2-box-multiple-outline";
                iconSize = focused ? 28 : 24;
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
                iconSize = focused ? 28 : 24;
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
                iconSize = focused ? 28 : 24;
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
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="2D" component={TwoD} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="3D" component={ThreeD} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigations;
