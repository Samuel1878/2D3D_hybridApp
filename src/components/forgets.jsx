import { TextInput, View,Text } from "react-native"
import Styles from "../libs/Styles";
import { TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import LocalContext from "../services/localization/localContext";
import { OTP_URL } from "../hooks/config";
import GlobalContext from "../services/global/globalContext";
import axios from "axios";

export const ForgetMain = () => {
    const {forgetNo,setForgetNo} = useContext(LocalContext);
    const {navigation,phone} = useContext(GlobalContext);
    const [sent,setSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [sentOtp,setSentOtp] = useState("");
    const [validOtp, setValidOtp] = useState(false);
    const [validPhone,setValidPhone] = useState(false);
    const [count, setCount] = useState(90);
    const [inter, setInter ] = useState(null);
    const sendOTP = async() => {
     const res = await axios.post(OTP_URL,{phone:forgetNo});
      const interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
      setInter(interval);
      setTimeout(() => {
        clearInterval(interval);
        setCount(90);
        setSentOtp("");
        // setSent(false);
      }, 91000);
     if(res.status==201){
      setSentOtp(res.data.OTP);
      console.log(res.data);
      setSent(true);
     }

    };

    const nextFnc = () => {
     validPhone && !sent && sendOTP();
      validOtp && sent && navigation.navigate("security");
    };
    const resetFnc = () => {
      setSentOtp("");
      sent && sendOTP();
      clearInterval(inter);
      setCount(90);
    };
    const changeFnc = () => {
      sent&&setCount(90);
      setSent(false);
      clearInterval(inter);

    }
    useEffect(()=>{
      setValidPhone(phone==forgetNo);
      setValidOtp(otp==sentOtp);
    },[forgetNo,otp]);
    useEffect(()=>{
      if(sent){
       
      };
    },[sent]);
    return (
      <View style={Styles.forgetContainer}>
        <View style={Styles.phoneCon}>
          {sent ? (
            <>
              <TextInput
                style={Styles._2fa}
                value={otp}
                onChangeText={(e) => setOtp(e)}
              />
              <View style={Styles._2faCon}>
                <TouchableOpacity style={Styles._2faBtns} onPress={resetFnc}>
                  <Text style={Styles.Txt2M}>Resend</Text>
                </TouchableOpacity>
                  <View style={Styles._2faTime}>
                    <Text style={Styles.Txt}>{count}</Text>
                  </View>
                <TouchableOpacity style={Styles._2faBtns} onPress={changeFnc}>
                  <Text style={Styles.Txt2M}>Change Number</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <TextInput
              autoFocus
              style={Styles.phoneInput}
              value={forgetNo}
              placeholder="Enter your number"
              onChangeText={(e) => setForgetNo(e)}
            />
          )}
        </View>
        <TouchableOpacity style={Styles.NextBtn} onPress={nextFnc}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
};
