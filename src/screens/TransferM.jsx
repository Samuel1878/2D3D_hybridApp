import { View,Text, TouchableOpacity,TextInput, TouchableWithoutFeedback, Keyboard, Modal, Pressable, Image } from "react-native";
import StylesCon from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import LocalContext from "../services/localization/localContext";
import axios from "axios"
import { TRANSFER, isUserRegistered } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
import GlobalContext from "../services/global/globalContext";
import { amountREGEX, pinREGEX } from "../libs/data";
import { BlurView } from "expo-blur";
import { useTranslation } from "react-i18next";
import { NoPinErr } from "../components/modals";
import themeProvider from "../libs/theme";


const TransferMain = ()=>{
    const {t} = useTranslation();
    const Styles = StylesCon();
    const {userToken} = useContext(AuthContext);
    const {navigation,phone,money} = useContext(GlobalContext)
    const {sendTo} = useContext(LocalContext);
    const [isUser, setIsUser] = useState(false);
    const [pin,setPin] = useState("");
    const [validPin, setValidPin] = useState(false);
    const [amounT, setAmounT] = useState("");
    const [toData, setToData] = useState({});
    const [modal,setModal] = useState(false);
    const [noPin, setNoPin] = useState(false);
    const [validMoney, setValidMoney] = useState(false);
    const colors = themeProvider().colors;
    const transferFnc = () =>{
      validMoney&&
       validPin &&
       sendTo != phone &&
         isUser &&
         axios
           .post(
             TRANSFER,
             { phone: sendTo, name: toData?.name, amount: parseInt(amounT), pin: pin },
             { headers: { "Content-Type": "application/json" } ,params:{userToken:userToken}}
           )
           .then((e) => {
             if (e.status === 200 || 201) {
              setModal(true)
             } else {
               setNoPin(true);
             }
           })
           .catch((err) => setNoPin(true));
    };
    const hideModalFnc = () => {
      setModal(!modal);
      navigation.navigate("Transfer")
    }
    useEffect(()=>{
       sendTo != phone && axios.get(isUserRegistered, {
          params: {number:sendTo},
          headers: { "Content-Type": "application/json" },
        }).then((e)=>{
            if(e.status===200){
                setToData(e.data);
                setIsUser(true);
                return
            } 
            setIsUser(false);
        }).catch((err)=>console.log(err))
    },[])
    useEffect(()=>{
        setValidPin(pinREGEX.test(pin));
    },[pin]);
    useEffect(()=>{
      setValidMoney(money>=amounT)
    },[amounT])
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={Styles.tranContainer}>
          <NoPinErr setModal={setNoPin} modal={noPin} />
          <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModal(!modal);
            }}
          >
            <BlurView intensity={50} tint="dark" style={Styles.modal}>
              <View style={Styles.modalBox}>
                <Text style={Styles.Txt2M}>{t("transaction completed")}</Text>
                <Text style={Styles.Txt3}>
                  {t("you have successfully transferred") +
                    " " +
                    amounT +
                    " " +
                    t("MMK") +
                    " " +
                    t("to") +
                    " " +
                    toData?.name +
                    ": " +
                    sendTo}
                </Text>
                <Text>{t("please check receipts")}</Text>
                <Pressable style={Styles.modalBtn} onPress={hideModalFnc}>
                  <Text style={Styles.Txt3}>{t("ok")}</Text>
                </Pressable>
              </View>
            </BlurView>
          </Modal>
          {toData ? (
            <View style={Styles.tranCon}>
              <View style={Styles.ToCon}>
                <Image
                  style={Styles.Toimg}
                  source={{uri:toData?.profile}}/>
                <View>
                  <Text style={Styles.toName}>{toData?.name}</Text>
                  <Text style={Styles.toName}>{sendTo}</Text>
                </View>
              </View>
              <View style={Styles.amountCon}>
                <Text style={Styles.amountH}>{t("Amount")}</Text>
                <TextInput
                  inputMode="numeric"
                  textContentType="telephoneNumber"
                  autoFocus
                  placeholder="Enter Amount"
                  placeholderTextColor={colors.text_3}
                  style={Styles.amountInput}
                  value={amounT}
                  onChangeText={(e) => setAmounT(e)}
                />
                <View style={Styles.rowCon}>
                  <Text style={Styles.Txt4}>
                    {t("availiable") + " " + t("balance")}
                  </Text>
                  <Text style={Styles.Txt4}>{money + " Ks"}</Text>
                </View>

                <Text style={Styles.amountH}>{t("fund security pin")}</Text>
                <TextInput
                  value={pin}
                  onChangeText={(e) => setPin(e)}
                  inputMode="numeric"
                  style={Styles.amountInput}
                />
                <View style={Styles.pinCon}>
                  <Text style={Styles.pinH}>{t("manage pin")}</Text>
                  <TouchableOpacity style={Styles.pinBtn}>
                    <Text style={Styles.pin}>{t("pin")}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={Styles.transferBtn}
                onPress={transferFnc}
              >
                <Text style={Styles.transferTxt}>{t("transfer")}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={Styles.notfoundTran}>
              <Text style={Styles.notfoundH}>{t("user not found")}</Text>
              <Text style={Styles.notfoundTxt}>
                {sendTo + " " + t("this number is not registerred!")}
              </Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
}
export default TransferMain;