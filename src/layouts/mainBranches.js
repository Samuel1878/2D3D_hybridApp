import Navigations from "../index";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/login";
import Register from "../screens/register";
import { useContext, useEffect } from "react";
import { app_1, app_2, app_3, app_4, bg_2, text_1b } from "../libs/style";
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
import ServiceChat from "../screens/service";
import Transfer from "../screens/Transfer";
import TransferHis from "../screens/TransferHis";
import { AyaPay, CbPay, KbzPay, WavePay } from "../components/PaymentsEd";
import Level from "../screens/Level";
import TermOfUs from "../screens/termofus";
import Version from "../screens/version";
import Bet3D from "../screens/Bet3d";
import CashInOut from "../screens/cashInOut";
import AddressBook from "../screens/address";
import TransferMain from "../screens/TransferM";
import { Details } from "../screens/detail";
import Pin from "../screens/pin";
import Deposit from "../screens/depositt";
import WithDrawl from "../screens/withDrawl";
import DepositLayout from "../components/deposit";
import Payments from "../screens/payments";
import { ForgetMain, ForgetPin } from "../components/forgets";
import Vouchers from "../hooks/vouchers";

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
          component={Bet3D}
          name="Bet3D"
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
        <Stack.Screen
          name="Service"
          component={ServiceChat}
          options={{
            headerTitle: "Customer service",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{
            headerTitle: "Transfer",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="TransferMain"
          component={TransferMain}
          options={{
            headerTitle: "Transfer",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="detail"
          component={Details}
          options={{
            headerTitle: "Details",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="Transaction_History"
          component={TransferHis}
          options={{
            headerTitle: "Transaction History",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="payments"
          component={Payments}
          options={{
            headerTitle: "Payments",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="kbzPay"
          component={KbzPay}
          options={{
            headerTitle: "KBZ Pay",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="wavePay"
          component={WavePay}
          options={{
            headerTitle: "Wave Pay",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="ayaPay"
          component={AyaPay}
          options={{
            headerTitle: "AYA Pay",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="cbPay"
          component={CbPay}
          options={{
            headerTitle: "CB Pay",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="level"
          component={Level}
          options={{
            headerTitle: "Level",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="termofus"
          component={TermOfUs}
          options={{
            headerTitle: "Term of us",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="version"
          component={Version}
          options={{
            headerTitle: "Version",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: "transparent" },
          }}
        />
        <Stack.Screen
          name="pin"
          component={Pin}
          options={{
            headerTitle: "Pin Management",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="cashinout"
          component={CashInOut}
          options={{
            headerTitle: "Finance",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="depositLayout"
          component={DepositLayout}
          options={{
            headerTitle: "Deposit",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="deposit"
          component={Deposit}
          options={{
            headerTitle: "Deposit",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="withdrawl"
          component={WithDrawl}
          options={{
            headerTitle: "WithDrawl",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="addressbook"
          component={AddressBook}
          options={{
            headerTitle: "Address Book",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="2fa"
          component={ForgetMain}
          options={{
            headerTitle: "Verification",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="forgetpin"
          component={ForgetPin}
          options={{
            headerTitle: "Reset Pin",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="forgetpassword"
          component={ForgetPin}
          options={{
            headerTitle: "Reset Password",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
        <Stack.Screen
          name="vouchers"
          component={Vouchers}
          options={{
            headerTitle: "Voucher",
            headerShown: true,
            headerTintColor: text_1b,
            headerStyle: { backgroundColor: app_1 },
            headerTitleStyle: { color: text_1b },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default BranchContainer
