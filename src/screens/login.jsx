import { View,Text ,Image, Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
import stylesCon from "../libs/style";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import AuthContext from "../services/auth/authContext";
import axios from "axios";
import { LOGIN_URL } from "../hooks/config";
import themeProvider from "../libs/theme";

const Login = ({navigation}) =>{
    const styles = stylesCon();
    const colors = themeProvider().colors;
    const [phone, setPhone] = useState("");
    const [password, setPwd] = useState("");
    const [validNo, setValidNo] = useState(false);
    const [validPwd, setValidPwd] = useState(false);
    const [title, setTitle] = useState(true);
    const [focused, setFocused] = useState(false);
    const [focusedPwd, setFocusedPwd] = useState(false);
    const REGEX_NO = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/;
  const REGEX_PWD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const {signIn} = useContext(AuthContext);
    const submitHandler = async()=>{
        if(validNo && validPwd){
            navigation.navigate("root")
           axios.post(LOGIN_URL,{
            phone:phone,password:password
           },{
              headers:{"Content-Type":"application/json"}
           }).then((res)=>{
            switch (res.data.code) {
            case 201:
                signIn(res.data.token);
                console.log(res.data.message);
                navigation.navigate("root")
                break;
            default:
                setValidNo(false);
                setValidPwd(false);
                console.log(res.data.message)
                break;
           }
           }).catch((err)=>console.log(err))
           
        }
    }
    useEffect(()=>{
        setValidNo(REGEX_NO.test(phone));
        setValidPwd(REGEX_PWD.test(password));
    },[phone,password])
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setFocused(false);
        setFocusedPwd(false);
      }}
      style={{ flex: 1 }}
    >
      <View style={styles.loginCon}>
        <View style={styles.loginImgCon}>
          <Image
            style={styles.loginImg}
            source={require("../../assets/login.png")}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.loginBoxCon}
        >
          <Text
            style={[
              styles.loginHeader,
              {
                alignSelf: title ? "center" : "flex-start",
                paddingLeft: title ? 0 : 30,
              },
            ]}
          >
            Login
          </Text>
          <Text style={styles.inputLabel}>Phone number:</Text>
          <TextInput
            onFocus={() => {
              setTitle(false);
              setFocused(true);
            }}
            onBlur={() => {
              setTitle(true);
              setFocused(false);
            }}
            value={phone}
            onChangeText={(e) => setPhone(e)}
            placeholder="Phone"
            inputMode="tel"
            style={[styles.inputName, { borderColor: focused ? colors.app_1 : colors.bg_1 }]}
          />
          <Text style={styles.inputLabel}>Enter your password:</Text>
          <TextInput
            onFocus={() => {
              setTitle(false);
              setFocusedPwd(true);
            }}
            onBlur={() => {
              setTitle(true);
              setFocusedPwd(false);
            }}
            textContentType="password"
            value={password}
            onChangeText={(e) => setPwd(e)}
            placeholder="password"
            style={[styles.inputPwd, { borderColor: focusedPwd ? colors.app_1 : colors.bg_1 }]}
          />
          <TouchableOpacity onPress={submitHandler} style={styles.loginSubBtn}>
            <Text style={styles.loginBtnTxt}>Login</Text>
          </TouchableOpacity>
          <Text>forget password? Click here to reset password</Text>
          <View style={styles.loginLine}></View>
          <Text style={styles.loginRegTxt}>
            Don't have account yet? Create One!
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("register")}
            style={styles.RegBtnCon}
          >
            <Text style={styles.RegBtnTxt}>Register</Text>
          </TouchableOpacity>
          <View style={styles.servicesCon}>
            <Image
              style={styles.serviceImg}
              source={require("../../assets/telegram.png")}
            />
            <Image
              style={styles.serviceUs}
              source={require("../../assets/contactUs.png")}
            />
            <Image
              style={styles.serviceImg}
              source={require("../../assets/viber.png")}
            />
            <Text style={styles.termofus}>Privacy policy and terms of us.</Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default Login;