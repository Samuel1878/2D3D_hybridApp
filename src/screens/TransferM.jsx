import { View,Text, TouchableOpacity,TextInput, TouchableWithoutFeedback, Keyboard, Modal, Pressable } from "react-native";
import Styles from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import LocalContext from "../services/localization/localContext";
import axios from "axios"
import { TRANSFER, isUserRegistered } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
import GlobalContext from "../services/global/globalContext";
import { pinREGEX } from "../libs/data";
import { BlurView } from "expo-blur";


const TransferMain = ()=>{
    const {userToken} = useContext(AuthContext);
    const {navigation} = useContext(GlobalContext)
    const {sendTo} = useContext(LocalContext);
    const [isUser, setIsUser] = useState(false);
    const [name,setName] = useState("");
    const [pin,setPin] = useState("");
    const [validPin, setValidPin] = useState(false);
    const [amount, setAmount] = useState("");
    const [modal,setModal] = useState(false);
    const transferFnc = () =>{
       validPin &&
         isUser &&
         axios
           .post(
             TRANSFER,
             { phone: sendTo, name: name, amount: parseInt(amount), pin: pin },
             { headers: { "Content-Type": "application/json" } ,params:{userToken:userToken}}
           )
           .then((e) => {
             if (e.status === 200 || 201) {
              setModal(true)
             } else {
               setModal(false);
             }
           })
           .catch((err) => console.log(err));
    };
    const hideModalFnc = () => {
      setModal(!modal);
      navigation.navigate("Transfer")
    }

    
    useEffect(()=>{
        axios.get(isUserRegistered, {
          params: {number:sendTo},
          headers: { "Content-Type": "application/json" },
        }).then((e)=>{
            if(e.status===200){
                console.log(e.data)
                setName(e.data.name)
                setIsUser(true)
                return
            }
        }).catch((err)=>console.log(err))
    },[])
    useEffect(()=>{
        setValidPin(pinREGEX.test(pin))
    },[pin])
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={Styles.tranContainer}>
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
                <Text style={Styles.Txt2M}>Transaction completed!</Text>
                <Text style={Styles.Txt3}>
                 You have successfully transferred { amount } MMK to  
                 { " "+ name} { ": "+ sendTo}
                </Text>
                <Text>Please check receipts.</Text>
                <Pressable style={Styles.modalBtn} onPress={hideModalFnc}>
                  <Text style={Styles.Txt3}>OK</Text>
                </Pressable>
              </View>
            </BlurView>
          </Modal>
          {isUser ? (
            <View style={Styles.tranCon}>
              <View style={Styles.ToCon}>
                <Text style={Styles.ToH}>Transfer To</Text>
                <Text style={Styles.toName}>{name}</Text>
                <Text style={Styles.toNo}>{sendTo}</Text>
              </View>
              <View style={Styles.amountCon}>
                <Text style={Styles.amountH}>Amount</Text>
                <TextInput
                  inputMode="numeric"
                  textContentType="telephoneNumber"
                  autoFocus
                  style={Styles.amountInput}
                  value={amount}
                  onChangeText={(e) => setAmount(e)}
                />
                <Text style={Styles.amountH}>Fund Security Pin</Text>
                <TextInput
                  value={pin}
                  onChangeText={(e) => setPin(e)}
                  inputMode="numeric"
                  style={Styles.amountInput}
                />
                <View style={Styles.pinCon}>
                  <Text style={Styles.pinH}>Click here to manage pin</Text>
                  <TouchableOpacity style={Styles.pinBtn}>
                    <Text style={Styles.pin}>Pin</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={Styles.transferBtn}
                onPress={transferFnc}
              >
                <Text style={Styles.transferTxt}>Transfer</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={Styles.notfoundTran}>
              <Text style={Styles.notfoundH}>User Not Found</Text>
              <Text style={Styles.notfoundTxt}>
                {" "}
                {sendTo} -This number is not registerred!
              </Text>
            </View>
          )}
          
        </View>
      </TouchableWithoutFeedback>
    );
}
export default TransferMain;