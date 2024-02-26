import { TouchableOpacity, View ,Text, TextInput} from "react-native";
import StylesCon from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import { REGEX_PWD, pinREGEX } from "../libs/data";
import axios from "axios";
import { RESETPIN, RESETPWD } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
import { ChangeModel } from "./modals";
import GlobalContext from "../services/global/globalContext";
import { useTranslation } from "react-i18next";

export const Forget = ({navigation}) => {
  const Styles = StylesCon();
  const {t} = useTranslation();

  return (
    <View style={Styles.ContainerF}>
      <View style={Styles.forgetCon}>
        <TouchableOpacity
          style={Styles.itemCon}
          onPress={() => navigation.navigate("forgetPin")}
        >
          <Text style={Styles.Txt2}>{t("change pin")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.itemCon}
          onPress={() => navigation.navigate("forgetPassword")}
        >
          <Text style={Styles.Txt2}>{t("change password")}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={Styles.exitBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={Styles.btnTxt1}>{t("exit")}</Text>
      </TouchableOpacity>
    </View>
  );
};
export const ForgetPin = () => {
    const {t} = useTranslation();
    const Styles = StylesCon();
    const {userToken} = useContext(AuthContext);
    const {navigation} = useContext(GlobalContext);
    const [pin,setPin] = useState("");
    const [conPin,setConPin] = useState("");
    const [validPin, setValidPin] = useState(false);
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState("")
    const saveFnc = () => {
      if(!validPin){
        setError(t("invalid"));
        return
      } else if (pin != conPin) {
        setError(t("not match"));
        return
      }
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
    },[changed]);
    useEffect(()=>{
      if(error){
        validPin && setError("");
        return
      }else if(pin == conPin){
        setError("")
      }
    },[pin,conPin])
    return (
      <View style={Styles.ContainerF}>
        <ChangeModel modal={changed} setModal={setChanged} />
        <View style={Styles.ContainerX}>
          <TextInput
            style={Styles.forgetInput}
            keyboardType="numeric"
            placeholder="Enter new 6-digit pin"
            placeholderTextColor={"rgb(234,188,78)"}
            value={pin}
            onChangeText={(e) => setPin(e)}
          />
          <TextInput
            style={Styles.forgetInput}
            keyboardType="numeric"
            placeholder="Confirm 6-digit pin"
            placeholderTextColor={"rgb(234,188,78)"}
            value={conPin}
            onChangeText={(e) => setConPin(e)}
          />
          <Text style={Styles.Txt3M}>{error}</Text>
        </View>

        <TouchableOpacity style={Styles.forgetbtn} onPress={saveFnc}>
          <Text style={Styles.setPinTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    );
};
export const ForgetPassword = () => {
    const {t} = useTranslation();
    const Styles = StylesCon();
    const { userToken } = useContext(AuthContext);
    const {navigation} = useContext(GlobalContext);
    const [pwd, setPwd] = useState("");
    const [conPwd, setConPwd] = useState("");
    const [validPwd,setValidPwd] = useState(false);
    const [changed, setChanged] = useState(false);
    const [error,setError] = useState("");
    const saveFnc = () => {
      if(!validPwd){
        setError(t("invalid password"))
        return
      } else if (pwd != conPwd){
        setError(t("password not match"));
        return
      } 
        validPwd &&
          pwd == conPwd &&
          axios
            .post(RESETPWD, { userToken: userToken, newPwd: pwd })
            .then((e) => {
              if (e.status === 201 || 200) {
                setChanged(true);
              }
            })
            .catch((e) => console.log(e));
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
      <View style={Styles.ContainerF}>
        <ChangeModel setModal={setChanged} modal={changed}/>
        <View style={Styles.ContainerX}>
          <TextInput
            style={Styles.forgetInput}
            textContentType="password"
            placeholder="Enter new password"
            value={pwd}
            placeholderTextColor={"rgb(234,188,78)"}
            onChangeText={(e) => setPwd(e)}
          />
          <TextInput
            style={Styles.forgetInput}
            textContentType="password"
            placeholder="Confirm new password"
            placeholderTextColor={"rgb(234,188,78)"}
            value={conPwd}
            onChangeText={(e) => setConPwd(e)}
          />
          <Text style={Styles.Txt3M}>{error}</Text>
        </View>

        <TouchableOpacity style={Styles.forgetbtn} onPress={saveFnc}>
          <Text style={Styles.setPinTxt}>{t("save")}</Text>
        </TouchableOpacity>
      </View>
    );
};

