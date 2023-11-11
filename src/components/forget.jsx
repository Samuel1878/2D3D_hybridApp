import { TouchableOpacity, View ,Text, TextInput} from "react-native";
import Styles from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import { REGEX_PWD, pinREGEX } from "../libs/data";
import axios from "axios";
import { RESETPIN, RESETPWD } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
import { ChangeModel } from "./modals";
import GlobalContext from "../services/global/globalContext";

export const Forget = ({navigation}) => {

  return (
    <View style={Styles.Container}>
      <View style={Styles.forgetCon}>
        <TouchableOpacity style={Styles.itemCon} onPress={()=>navigation.navigate("forgetPin")}>
          <Text style={Styles.Txt2}>Change Pin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.itemCon} onPress={()=>navigation.navigate("forgetPassword")}>
          <Text style={Styles.Txt2}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const ForgetPin = () => {
    const {userToken} = useContext(AuthContext);
    const {navigation} = useContext(GlobalContext);
    const [pin,setPin] = useState("");
    const [conPin,setConPin] = useState("");
    const [validPin, setValidPin] = useState(false);
    const [changed, setChanged] = useState(false);
    const saveFnc = () => {
    validPin &&
   pin == conPin &&
   axios
     .post(RESETPIN, { userToken: userToken, newPin: pin })
     .then((e) => {
        if(e.status===201||200){
          setChanged(true)}
        })
     .catch((e) => console.log(e));
    };
    useEffect(()=>{
        setValidPin(pinREGEX.test(pin));
    },[pin]);
    useEffect(()=>{
        changed && setTimeout(()=>{
          setChanged(false);
          navigation.navigate("More")
        },2000)
    },[changed])
    return (
      <View style={Styles.Container}>
        <ChangeModel changed={changed}/>
        <TextInput
          style={Styles.forgetInput}
          keyboardType="numeric"
          placeholder="Enter new 6-digit pin"
          value={pin}
          onChangeText={(e)=>setPin(e)}
        />
        <TextInput
          style={Styles.forgetInput}
          keyboardType="numeric"
          placeholder="Confirm 6-digit pin"
          value={conPin}
          onChangeText={(e)=>setConPin(e)}
        />
        <TouchableOpacity style={Styles.forgetbtn} onPress={saveFnc}>
            <Text style={Styles.setPinTxt}>Save</Text>
        </TouchableOpacity>

      </View>
    );
};
export const ForgetPassword = () => {
    const { userToken } = useContext(AuthContext);
    const {navigation} = useContext(GlobalContext);
    const [pwd, setPwd] = useState("");
    const [conPwd, setConPwd] = useState("");
    const [validPwd,setValidPwd] = useState(false);
    const [changed, setChanged] = useState(false);
    const saveFnc = () => {
        validPwd&& pwd==conPwd&& axios.post(RESETPWD,{userToken:userToken,newPwd:pwd}).then((e)=>{
           if(e.status===201){
            setChanged(true);
              }
            }).catch((e)=>console.log(e));
    };
    useEffect(()=>{
        setValidPwd(REGEX_PWD.test(pwd));
    },[pwd]);
    useEffect(() => {
      changed &&
        setTimeout(() => {
          setChanged(false);
          navigation.navigate("More");
        }, 2000);
    }, [changed]);
    return (
      <View style={Styles.Container}>
        <TextInput
          style={Styles.forgetInput}
          textContentType="password"
          placeholder="Enter new password"
          value={pwd}
          onChangeText={(e)=>setPwd(e)}
        />
        <TextInput
          style={Styles.forgetInput}
          textContentType="password"
          placeholder="Confirm new password"
          value={conPwd}
          onChangeText={(e)=>setConPwd(e)}
        />
        <TouchableOpacity style={Styles.forgetbtn} onPress={saveFnc}>
          <Text style={Styles.setPinTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    );
};

