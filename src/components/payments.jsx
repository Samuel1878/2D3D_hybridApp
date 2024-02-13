import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import StylesCon from "../libs/Styles";
import { useContext, useState } from "react";
import axios from "axios"
import { _ADD_PAYMENT } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
const PaymentEdids = ({method}) => {
    const {userToken} = useContext(AuthContext);
    const Styles = StylesCon();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const paymentAddHandler = () => {
    name && phone && axios.post(_ADD_PAYMENT,{name:name,phone:phone,method:method,userToken:userToken},{headers:{
        "Content-Type":"application/json"
    }}).then((e)=>{
        if(e.status===201){
            setIsSuccess(true);
        }else if(e.status===401){
            setIsSuccess(false);
            setName("");
            setPhone("");
        }
    })
  }
  return (
    <>
      <TextInput
        style={Styles.editInput}
        value={name}
        placeholder="name"
        onChangeText={(e) => setName(e)}
      />
      <TextInput
        style={Styles.editInput}
        value={phone}
        placeholder="phone number"
        onChangeText={(e) => setPhone(e)}
      />
      {<Text style={Styles.successTxt}>{isSuccess?"Successfully updated...":"On processing..."}</Text>}
      <TouchableOpacity style={Styles.paySubmit} onPress={paymentAddHandler}>
        <Text style={Styles.payText}>Submit</Text>
      </TouchableOpacity>

      <View style={Styles.policyContainer}>
        <Text style={Styles.policyH}>Proclaimer:</Text>
        <Text style={Styles.Txt3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          doloremque delectus alias inventore? Fuga quas blanditiis, consequatur
          
        </Text>
        <Text style={Styles.policyH}>Guarenttee</Text>
        <Text style={Styles.Txt3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit
          dicta amet facilis recusandae, accusantium consequatur id debitis
  
        </Text>
        <Text style={Styles.footTxt}>
          We guarenttee your information safe @Admin
        </Text>
      </View>
    </>
  );
};
export default PaymentEdids
