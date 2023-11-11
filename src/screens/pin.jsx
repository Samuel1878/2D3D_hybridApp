import { TextInput, Touchable, TouchableOpacity, View,Text, TouchableHighlight } from "react-native"
import Styles from "../libs/Styles"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../services/global/globalContext"
import { pinREGEX } from "../libs/data"
import { PIN } from "../hooks/config"
import AuthContext from "../services/auth/authContext"
import axios from "axios"
import { ChangeModel } from "../components/modals"

const Pin = ({navigation})=>{
    const {pin,setPin} = useContext(GlobalContext);
    const {userToken} = useContext(AuthContext)
    const [fPin,setFPin] = useState("")
    const [sPin, setSPin] = useState("");
    const [oPin, setOPin] = useState("");
    const [isNew, setIsNew] = useState(true);
    const [validPin, setValidPin] = useState(false);
    const [changed, setChanged] = useState(false);
    const setUpPin= ()=>{
        validPin && axios.post(PIN,{userToken:userToken,pin:fPin}).then((e)=>{
            if(e.status===200){
                setChanged(true)
            }
        })
    };
    const changePin = ()=>{
         validPin && (pin === oPin) &&
           axios.post(PIN, { userToken: userToken, pin: fPin }).then((e) => {
             if (e.status === 200) {
               setChanged(true);
               return
             }
             
           });
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
        <ChangeModel changed={changed}/>
        <View style={Styles.SetPinCon}>
          {isNew ? (
            <Text style={Styles.setPinH}>Set up new pin for fund security</Text>
          ) : (
            <View style={Styles.changePinCon}>
              <TextInput
                placeholder="Old Pin"
                style={Styles.setPinInput}
                value={oPin}
                onChangeText={(e) => setOPin(e)}
              />
            </View>
          )}

          <View style={Styles.setPinInCon}>
            <TextInput
              placeholder="New Pin"
              style={Styles.setPinInput}
              value={fPin}
              onChangeText={(e) => setFPin(e)}
            />
          </View>
          <View style={Styles.setPinInCon}>
            <TextInput
              placeholder="Confirm Pin"
              style={Styles.setPinInput}
              value={sPin}
              onChangeText={(e) => setSPin(e)}
            />
          </View>
          {validPin ? (
            <Text style={Styles.good}>Good to go</Text>
          ) : (
            <Text style={Styles.warn}>
              Pin must be a 6-digit pair; only numbers are allowed!
            </Text>
          )}
          {isNew ? (
            <TouchableOpacity style={Styles.setPinBtn} onPress={setUpPin}>
              <Text style={Styles.setPinTxt}>Set Up</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={Styles.setPinBtn} onPress={changePin}>
              <Text style={Styles.setPinTxt}> Change </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={Styles.forgetBtn}
            onPress={() => navigation.navigate("2fa")}
          >
            <Text style={Styles.Txt2}>Forget fund Pin?</Text>
            <Text style={Styles.Txt2M}> Reset now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default Pin;