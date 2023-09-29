import Navigations from "../index";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/login";
import Register from "../screens/register";
import { useContext, useEffect } from "react";
import { app_1, app_2, app_3, app_4, text_1b } from "../libs/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContext from "../services/auth/authContext";
import restoreUserData from "../hooks/fetchUserData";
import GlobalContext from "../services/global/globalContext";
import Winners from "../screens/Winners";
import History from "../screens/History";
import ThreeD_Analysis from "../screens/3DAnalysis";
import TwoD_Analysis from "../screens/2DAnalysis";
import ThreeD_Bet from "../screens/3dBet";
import TwoD_Bet from "../screens/2dBet";
import Holidays from "../screens/Holiday";
import Me from "../screens/me";
import Bet from "../screens/Bet";
import PwdChange from "../screens/PwdChange";

const Stack = createNativeStackNavigator();
const BranchContainer = () => {
   const{userToken} = useContext(AuthContext);
  
   const {name, phone} = useContext(GlobalContext);
  

   

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="root">
        <Stack.Screen
          name="root"
          component={Navigations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerTitle: "Login",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerTitle: "Register",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="winners"
          component={Winners}
          options={{
            headerTitle: "Winners",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          component={History}
          name="history"
          options={{
            headerTitle: "History",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          component={ThreeD_Analysis}
          name="3dAnalysis"
          options={{
            headerTitle: "3D Analysis ",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          component={TwoD_Analysis}
          name="2dAnalysis"
          options={{
            headerTitle: "2D Analysis",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          component={ThreeD_Bet}
          name="3dBet"
          options={{
            headerTitle: "3D Bet",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          component={TwoD_Bet}
          name="2dBet"
          options={{
            headerTitle: "2D Bet",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          component={Bet}
          name="Bet"
          options={{
            headerTitle: "Bet",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          component={Holidays}
          name="calender"
          options={{
            headerTitle: "Holidays",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="me"
          component={Me}
          options={{
            headerTitle: "Profile",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="PwdChange"
          component={PwdChange}
          options={{
            headerTitle: "Change Password",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default BranchContainer
