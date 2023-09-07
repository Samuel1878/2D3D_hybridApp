import { Keyboard ,TouchableOpacity,View,Text, Image} from "react-native";
import { TouchableWithoutFeedback,KeyboardAvoidingView } from "react-native";
import styles, { app_1, bg_5 } from "../libs/style";
import { TextInput } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { AntDesign } from '@expo/vector-icons';
import { OTP_URL, REGISTER_URL } from "../hooks/config";

const Register= ({navigation}) => {
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState("");
    const [comPwd,setcomPwd] = useState("");
    const [OTP, setOTP] = useState("");
    const [validOTP, setValidOTP] = useState(false);
    const [validPwd, setValidPwd] = useState(false);
    const [matchPwd, setMatchPwd] = useState(false);
    const [OTPsent, setOTPSent] = useState(false);
    const [sentOTP,setSentOTP] = useState("");
    const [count ,setCount] = useState(90);
    const [validNo, setValidNo] = useState(false);
    const [userExit, setUserExit] = useState(false);
     const REGEX_NO = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/
    const REGEX_PWD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const phoneHandler = (e)=>{
        setValidNo(REGEX_NO.test(e));
        setPhone(e);
    };
    const req2FAServer = async() => {
         axios
           .post(
             OTP_URL,
             { phone: phone },
             {
               headers: { "Content-Type": "application/json" },
             }
           )
           .then((res) => {
             setSentOTP(res.data.OTP);
             console.log(res.data.OTP)
           })
           .catch((err) => {
             console.log(err);
           });
    };
    const createUser = async()=>{
        axios.post(REGISTER_URL,{phone:phone,password:password}, {
               headers: { "Content-Type": "application/json" },
             }).then((res)=>{
                switch (res.data.code) {
                    case 201:
                        console.log(res.data.message);
                        navigation.navigate("login");
                        break;
                    default:
                        setUserExit(true);
                        break;
                }
             }).catch((err)=>console.warn(err.message))
    }
    const sendOTPHandler = async()=>{
        if(validNo && !OTPsent){
            req2FAServer();
            setOTPSent(true);
            Keyboard.dismiss();
            const interval = setInterval(() => {
                setCount((prev)=>prev - 1);
            }, 1000);
            setTimeout(() => {
                clearInterval(interval);
                setCount(90);
                setOTPSent(false);
                setSentOTP("")
            }, 91000);
        }
    };
    const registerHandler = ()=>{
        if(validNo && validOTP && validPwd && matchPwd){
            createUser();
        }
        console.log("not succeed");
        setUserExit(false);
    }
    useEffect(()=>{
        if(OTP === sentOTP && OTP !== ""){
            setValidOTP(true);
            return
        }
        setValidOTP(false);
    },[OTP,sentOTP])
    useEffect(()=>{
        if(password === comPwd && password!==""){
            setMatchPwd(true);
            return
        }
        setMatchPwd(false)
      
    },[comPwd])
    useEffect(()=>{
        if(REGEX_PWD.test(password)){
            setValidPwd(true);
            return
        }setValidPwd(false)
    },[password])

    return(
        <TouchableWithoutFeedback 
            onPress={()=>Keyboard.dismiss()}
            style={{flex:1}}>
            <View style={styles.RegScreenCon}>
                <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.RegBoxCon}>
                    <Text style={styles.loginHeader}>Register</Text>
                    <Text style={styles.inputLabel}>Phone: {
                        validNo || phone===""?<AntDesign name="check" size={18} color={app_1} />:<AntDesign name="exclamation" size={18} color={app_1} />
                    }</Text>
                    <TextInput 
                        style={styles.regNo} 
                        value={phone} 
                        inputMode="tel"
                        placeholder="09...123..."
                        onChangeText={phoneHandler}/>
                    <Text style={styles.inputLabel}>2FA Verification:{
                        validOTP||OTP===""?<AntDesign name="check" size={18} color={app_1} />:<AntDesign name="exclamation" size={18} color={app_1} />
                    }
                    </Text>
                    <View style={styles.reg2FaBox}>
                        <TextInput 
                            style={styles.regInput2Fa}
                            value={OTP}
                            onChangeText={(e)=>setOTP(e)}/>
                        <TouchableOpacity
                            onPress={sendOTPHandler} 
                            style={styles.reg2FaBtn}>
                                {
                                    OTPsent? <Text style={styles.reg2FaBtnTxt}>Sent: {count}</Text>: <Text style={styles.reg2FaBtnTxt}>Get Code</Text>
                                }
                           
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.inputLabel}>Password: {
                        !validPwd && password!==""?(<><AntDesign name="exclamation" size={14} color={bg_5} /><Text style={styles.regPwdTxt}>Password must be min 8 characters. Combine numbers upper and lowercase letters, and special characters</Text></>):<AntDesign name="check" size={18} color={app_1} />
                    }</Text>
                    <TextInput 
                        style={styles.regPwd}
                        value={password}
                        onChangeText={(e)=>setPassword(e)}/>
                    <Text style={styles.inputLabel}>confirm password:{
                        !matchPwd && comPwd!==""?(<><AntDesign name="exclamation" size={14} color={bg_5} /><Text style={styles.regPwdTxt}>Password not match</Text></>):<AntDesign name="check" size={18} color={app_1} />
                    }</Text>
                    <TextInput 
                        style={styles.regPwd}
                        value={comPwd}
                        onChangeText={(e)=>setcomPwd(e)}
                        />
                    <Text style={styles.subValTxt}>{
                        userExit?"User already exit!":""
                        }</Text>
                    <TouchableOpacity 
                        onPress={registerHandler}
                        style={styles.regSubBtn}>
                        <Text style={styles.rebSubTxt}>Register</Text>
                    </TouchableOpacity>
                
                    <View style={styles.loginLine}></View>
                    <Text style={styles.RegLogTxt}>Already have account? Login now</Text>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("login")}
                        style={styles.loginBtn}>
                        <Text style={styles.logRegTxt}>
                            Login
                        </Text>
                    </TouchableOpacity>
                     <View style={styles.servicesCon}>
                    <Image style={styles.serviceImg} source={require("../../assets/telegram.png")}/>
                    <Image style={styles.serviceUs} source={require("../../assets/contactUs.png")}/>
                    <Image style={styles.serviceImg}source={require("../../assets/viber.png")}/>
                    <Text style={styles.termofus}>Privacy policy and terms of us.</Text>
                </View>

                </KeyboardAvoidingView>
               
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Register