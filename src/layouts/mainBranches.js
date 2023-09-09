import Navigations from "../index";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/login";
import Register from "../screens/register";
import { useContext, useEffect } from "react";
import { app_1, app_2, app_3, app_4 } from "../libs/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContext from "../services/auth/authContext";
import restoreUserData from "../hooks/fetchUserData";
import GlobalContext from "../services/global/globalContext";

const Stack = createNativeStackNavigator();
const BranchContainer = () => {
   const{userToken} = useContext(AuthContext);
   const {name, phone} = useContext(GlobalContext)
   userToken && restoreUserData(userToken);
console.log(name, phone)
   
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
            headerTintColor: app_4,
            headerStyle: { backgroundColor: app_2 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerTitle: "Register",
            headerShown: true,
            headerTintColor: app_4,
            headerStyle: { backgroundColor: app_2 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default BranchContainer
