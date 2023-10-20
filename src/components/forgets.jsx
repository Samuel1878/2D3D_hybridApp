import { TextInput, View,Text } from "react-native"
import Styles from "../libs/Styles";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export const ForgetMain = () => {
    const [sent,setSent] = useState(false);
    const [phone,setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [validOtp, setValidOtp] = useState(false);
    const [validPhone,setValidPhone] = useState(false);
    return (
      <View style={Styles.forgetContainer}>
        <View style={Styles.phoneCon}>
          <TextInput style={Styles.phoneInput} />
          <View>
            <TextInput style={Styles._2fa}/>
          </View>
        </View>
        <TouchableOpacity style={Styles.NextBtn}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
};
export const ForgetPin = () => {
     return <View style={Styles.Container}></View>;

};
export const ForgetPassword = () => {
     return <View style={Styles.Container}></View>;

};