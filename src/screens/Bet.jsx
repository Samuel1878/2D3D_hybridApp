import { TextInput, View ,Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from "react-native";
import styles from "../libs/style";
import { useContext, useEffect, useRef, useState } from "react";
import BetContext from "../services/bet/betContext";
import axios from "axios";
import { _2d_BET } from "../hooks/config";
import { dateGenerator } from "../libs/helper/generator";
import AuthContext from "../services/auth/authContext";


const Bet = () => {
    const {betDigits2D,betDigits3D} = useContext(BetContext);
    const [is2D, setIs2D] = useState(true);
    const [isEditable, setIsEditable] = useState(false);
    const [edited, setEdited] = useState(null);
    const [date,setDate] = useState(null);
    const {userToken} = useContext(AuthContext)
    const conFirmOrder = ()=>{
       if(is2D){
        let options = betDigits2D.map((e)=>({number:e.pair,betDate:date,userId:userToken,amount:e.amount}))
        console.log(options)
        axios.post(_2d_BET,)
       }
    }
    const changeAmount = (e)=>{
        betDigits2D[edited]["amount"] = e
    }
    useEffect(()=>{
        const res = dateGenerator();
        setDate(res._j);
    

    },[])
    useEffect(()=>{
        if(betDigits2D.length<=0 && betDigits3D.length>0 ){
            setIs2D(false)
        }
    },betDigits2D,betDigits3D);
   
    return (
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()&& setIsEditable(false)}>
        <View style={styles._betContainer}>
          <View style={styles._betFormBox}>
            {is2D &&
              betDigits2D.map((pair,index) => (
                <View style={styles._betForm} key={index}>
                  <Text style={styles._betPairTxt}>{pair.pair}</Text>
                  <TextInput
                    defaultValue={pair["amount"]}
                    style={styles.pairInput}
                    editable={isEditable}
                    onFocus={()=>setEdited(index)}
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
}
export default Bet