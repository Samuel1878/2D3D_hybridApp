import { TouchableOpacity, View ,Text, TextInput, Image, Modal, Pressable} from "react-native";
import Styles from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import { AntDesign } from '@expo/vector-icons';
import { app_1, text_1b } from "../libs/style";
import { ayaPay, cbPay, kbzPay, wavePay } from "../libs/data";
import axios from "axios";
import { BlurView } from 'expo-blur';
import { WITHDRAWL } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
const WithDrawl = () => {
    const {payments,money,pin,navigation} = useContext(GlobalContext);
    const {userToken} = useContext(AuthContext)
    const [pinn, setPinn] = useState("");
    const [amount, setAmount] = useState("");
    const [selected, setSelected] = useState(0);
    const [modal,setModal] = useState(false);
    const hideModalFnc = () => {
      setModal(!modal);
      navigation.navigate("Wallet");
    }
    const submitFnc = ()=>{
    
        pinn == pin&& money>amount && axios.post(WITHDRAWL,{name:payments[selected].name,phone:payments[selected].phone,method:payments[selected].method,type:"withdrawl",amount:amount},{headers:{
            "Content-Type":"application/json"
        },params:{
            userToken:userToken
        }}).then((e)=>{
            if(e.status===200||201){
                setModal(true);
            }
        })
    };
    const changeFnc = () => {
        console.log(selected)
        if(selected<payments?.length-1){
            setSelected((prev) => prev+1);
            return
        }
        setSelected(0)
      
    };

  return (
    <View style={[Styles.Container]}>
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
            <Text style={Styles.Txt2M}>Successed!</Text>
            <Text style={Styles.Txt3}>
              Your withdrawl request has been placed. This may take 24 business
              hours to be accomplished
            </Text>
            <Text>Please check your receipts.</Text>
            <Pressable style={Styles.modalBtn} onPress={hideModalFnc}>
              <Text style={Styles.Txt3}>OK</Text>
            </Pressable>
          </View>
        </BlurView>
      </Modal>
      {!payments && (
        <>
          <TouchableOpacity style={Styles.addPaymentsBtn}>
            <Text>Add payments</Text>
            <View style={Styles.innerBtn}>
              <AntDesign name="right" size={24} color={app_1} />
            </View>
          </TouchableOpacity>
        </>
      )}
      {payments && (
        <View style={Styles.withdrawCon}>
          <Text style={Styles.Txt3}>Choose your receiving account</Text>
          <View style={Styles.receivingCon}>
            {payments[selected]?.method === "kbz" ? (
              <Image style={Styles.Img} source={kbzPay} />
            ) : (
              ""
            )}
            {payments[selected]?.method === "wave" ? (
              <Image style={Styles.Img} source={wavePay} />
            ) : (
              ""
            )}
            {payments[selected]?.method === "aya" ? (
              <Image style={Styles.Img} source={ayaPay} />
            ) : (
              ""
            )}
            {payments[selected]?.method === "cb" ? (
              <Image style={Styles.Img} source={cbPay} />
            ) : (
              ""
            )}
            <View style={Styles.selectedData}>
              <Text style={Styles.Txt1}>{payments[selected]?.name}</Text>
              <Text style={Styles.Txt2}>{payments[selected]?.phone}</Text>
            </View>
            <TouchableOpacity style={Styles.chanegBtn} onPress={changeFnc}>
              <Text style={Styles.Txt3M}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text style={Styles.Txt2M}>Availiable amount: {money} MMK</Text>
          <Text style={Styles.Txt3}>Cash amount</Text>
          <TextInput
            placeholder="Enter cash amount"
            style={Styles.withdrawInput}
            value={amount}
            onChangeText={(e) => setAmount(e)}
          />
          <Text style={Styles.Txt3}>Fund security pin</Text>
          <TextInput
            placeholder="Enter 6-digit pin"
            style={Styles.withdrawInput}
            value={pinn}
            onChangeText={(e) => setPinn(e)}
          />
          <TouchableOpacity style={Styles.SubmitBtn} onPress={submitFnc}>
            <Text style={Styles.btnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  
};
export default WithDrawl;
