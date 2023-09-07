
import Navigations from './src/index';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import Register from './src/screens/register';
import { app_1, app_2, app_3, app_4 } from './src/libs/style';
import AuthProvider from './src/services/auth/auth';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AuthProvider>
      <BranchContainer/>
    </AuthProvider>
  )
};
const BranchContainer = ()=>{
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
  )
}
