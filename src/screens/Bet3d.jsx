import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "../libs/style";
import { useContext, useEffect, useRef, useState } from "react";
import BetContext from "../services/bet/betContext";
import axios from "axios";
import { _2d_BET, _2d_BET_URL, _3d_BET_URL } from "../hooks/config";
import { dateGenerator } from "../libs/helper/generator";
import AuthContext from "../services/auth/authContext";

const Bet3D = () => {
  const {betDigits3D } = useContext(BetContext);
  const [isEditable, setIsEditable] = useState(false);
  const [edited, setEdited] = useState(null);
  const [date, setDate] = useState(null);
  const { userToken } = useContext(AuthContext);
  const conFirmOrder = () => {

      const betDigit3D = betDigits3D.map((e) => ({
        number: e.pair,
        amount: e.amount,
        betDate: date,
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
        .then((e) => console.log(e.status));
    
  };
  const changeAmount = (e) => {
    betDigits3D[edited]["amount"] = e;
  };
  useEffect(() => {
    const res = dateGenerator();
    setDate(res._j);
  }, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss() && setIsEditable(false)}
    >
      <View style={styles._betContainer}>
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
