import { TextInput, View,Text } from "react-native"
import Styles from "../libs/Styles";
import { TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import LocalContext from "../services/localization/localContext";

export const ForgetMain = () => {
    const {forgetNo,setForgetNo} = useContext(LocalContext);
    const [sent,setSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [validOtp, setValidOtp] = useState(false);
    const [validPhone,setValidPhone] = useState(false);
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
                <TouchableOpacity style={Styles._2faBtns}>
                  <Text style={Styles.Txt2M}>Resend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles._2faBtns}>
                  <Text style={Styles.Txt2M}>Change Number</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <TextInput
              style={Styles.phoneInput}
              value={forgetNo}
              onChangeText={(e) => setForgetNo(e)}
            />
          )}
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