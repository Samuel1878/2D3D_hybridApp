import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Pressable,
} from "react-native";
import styles from "../libs/style";
import { useContext, useEffect, useRef, useState } from "react";
import BetContext from "../services/bet/betContext";
import axios from "axios";
import { _2d_BET, _2d_BET_URL, _3d_BET_URL } from "../hooks/config";
import { dateGenerator } from "../libs/helper/generator";
import AuthContext from "../services/auth/authContext";
import { BlurView } from "expo-blur";
import Styles from "../libs/Styles";
import GlobalContext from "../services/global/globalContext";

const Bet3D = () => {
  const {betDigits3D } = useContext(BetContext);
  const {navigation} = useContext(GlobalContext)
  const [isEditable, setIsEditable] = useState(false);
  const [edited, setEdited] = useState(null);
  const [modal, setModal] = useState(false);
  const { userToken } = useContext(AuthContext);
  const conFirmOrder = () => {

      const betDigit3D = betDigits3D.map((e) => ({
        number: e.pair,
        amount: e.amount,
      }));
      axios
        .post(_3d_BET_URL, betDigit3D, {
          params: {
            userToken: userToken,
          },
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((e) => {
          if(e.status===200||201){
            setModal(true);
          }
        }).catch((e)=>console.log(e));
    
  };
  const changeAmount = (e) => {
    betDigits3D[edited]["amount"] = e;
  };
  const hideModalFnc = ()=> {
      setModal(false);
      navigation.navigate("3D");
    }
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss() && setIsEditable(false)}
    >
      <View style={styles._betContainer}>
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
              <Text style={Styles.Txt2M}>Successfully ordered</Text>
              <Text style={Styles.Txt3}>
                You have purchased lottery tickets today. Good luck!
              </Text>
              <Text>Please check receipts.</Text>
              <Pressable style={Styles.modalBtn} onPress={hideModalFnc}>
                <Text style={Styles.Txt3}>OK</Text>
              </Pressable>
            </View>
          </BlurView>
        </Modal>
        <View style={styles._betFormBox}>
          {betDigits3D.map((pair, index) => (
            <View style={styles._betForm} key={index}>
              <Text style={styles._betPairTxt}>{pair.pair}</Text>
              <TextInput
                defaultValue={pair["amount"]}
                style={styles.pairInput}
                editable={isEditable}
                onFocus={() => setEdited(index)}
                onChangeText={changeAmount}
                onBlur={() => setIsEditable(false)}
              />
              <TouchableOpacity
                onPress={() => setIsEditable(true)}
                style={styles.changeAmountBtn}
              >
                <Text style={styles.btnTxt}>Edit</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity
            style={styles._confirmOrderBtn}
            onPress={conFirmOrder}
          >
            <Text style={styles.btnTxt}>Confirm order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Bet3D;
