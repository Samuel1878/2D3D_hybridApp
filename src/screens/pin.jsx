import { TextInput, Touchable, TouchableOpacity, View,Text } from "react-native"
import StylesCon from "../libs/Styles"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../services/global/globalContext"
import { pinREGEX } from "../libs/data"
import { PIN } from "../hooks/config"
import AuthContext from "../services/auth/authContext"
import axios from "axios"
import { ChangeModel, NoPinErr } from "../components/modals"
import { useTranslation } from "react-i18next"

const Pin = ({navigation})=>{
    const Styles = StylesCon();
    const {t} = useTranslation();
    const {pin,setPin} = useContext(GlobalContext);
    const {userToken} = useContext(AuthContext)
    const [fPin,setFPin] = useState("")
    const [sPin, setSPin] = useState("");
    const [oPin, setOPin] = useState("");
    const [isNew, setIsNew] = useState(true);
    const [validPin, setValidPin] = useState(false);
    const [changed, setChanged] = useState(false);
    const [valid, setValid] = useState(false);
    const setUpPin= ()=>{
        validPin && axios.post(PIN,{userToken:userToken,pin:fPin}).then((e)=>{
            if(e.status===200){
                setChanged(true)
            }
        })
    };
    const changePin = ()=>{
        if (oPin.length!=0 && pin != oPin && validPin){
          setValid(true);
            return
        }
          validPin &&
            axios
              .post(PIN, { userToken: userToken, pin: fPin })
              .then((e) => {
                if (e.status === 200) {
                  setChanged(true);
                  return;
                } else if (e.status === 401 || 403) {
                  console.log(e.data);
                }
              })
              .catch((e) => console.log(e.message));
    }
    useEffect(()=>{
        setValidPin(pinREGEX.test(fPin) && fPin===sPin);
        if(pin!==null){
            setIsNew(false);
            return
        }
        setIsNew(true);

    },[pin,fPin,sPin]);
    useEffect(()=>{
      changed && setTimeout(()=>{
        setChanged(false);
        navigation.navigate("More");
      },1500)
    },[changed])
    return (
      <View style={Styles.Container}>
        <ChangeModel modal={changed} setModal={setChanged}/>
        <NoPinErr setModal={setValid} modal={valid}/>
        <View style={Styles.SetPinCon}>
          {isNew ? (
            <Text style={Styles.setPinH}>
              {t("set up new pin for fund security")}
            </Text>
          ) : (
            <View style={Styles.changePinCon}>
              <TextInput
                placeholder={t("old pin")}
                style={Styles.setPinInput}
                value={oPin}
                placeholderTextColor={"rgb(234,188,78)"}
                onChangeText={(e) => setOPin(e)}
              />
            </View>
          )}

          <View style={Styles.setPinInCon}>
            <TextInput
              placeholder={t("new pin")}
              style={Styles.setPinInput}
              value={fPin}
              placeholderTextColor={"rgb(234,188,78)"}
              onChangeText={(e) => setFPin(e)}
            />
          </View>
          <View style={Styles.setPinInCon}>
            <TextInput
              placeholderTextColor={"rgb(234,188,78)"}
              placeholder={t("confirm pin")}
              style={Styles.setPinInput}
              value={sPin}
              onChangeText={(e) => setSPin(e)}
            />
          </View>
          {validPin ? (
            <Text style={Styles.good}>{t("good to go")}</Text>
          ) : (
            <Text style={Styles.warn}>
              {t("pin must be a 6-digit pair and only numbers are allowed")}
            </Text>
          )}
          {isNew ? (
            <TouchableOpacity style={Styles.setPinBtn} onPress={setUpPin}>
              <Text style={Styles.setPinTxt}>{t("set up")}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={Styles.setPinBtn} onPress={changePin}>
              <Text style={Styles.setPinTxt}>{t("change")}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={Styles.forgetBtn}
            onPress={() => navigation.navigate("2fa")}
          >
            <Text style={Styles.Txt4}>{t("forget fund pin?") + "  "}</Text>
            <Text style={Styles.Txt3M}>{t("click here to reset")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default Pin;