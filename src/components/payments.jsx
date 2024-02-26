import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import StylesCon from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { _ADD_PAYMENT } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
import GlobalContext from "../services/global/globalContext";
import themeProvider from "../libs/theme";
import {useTranslation} from "react-i18next"
const PaymentEdids = ({method}) => {
  const colors = themeProvider().colors;
  const {t} = useTranslation();
    const {userToken} = useContext(AuthContext);
    const {navigation,setUserRef} = useContext(GlobalContext)
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
  useEffect(()=>{
    if(isSuccess) { 
      navigation.navigate("payments");
      isSuccess && setUserRef(true);
      setTimeout(() => {
      setUserRef(false);
      }, 1000);
    }
  },[isSuccess]);

   


  return (
    <>
      <TextInput
        style={Styles.editInput}
        value={name}
        placeholder={t("username")}
        onChangeText={(e) => setName(e)}
        placeholderTextColor={colors.text_3}
      />
      <TextInput
        style={Styles.editInput}
        value={phone}
        placeholder={t("phone number")}
        onChangeText={(e) => setPhone(e)}
        placeholderTextColor={colors.text_3}
      />
      {
        <Text style={Styles.successTxt}>
          {isSuccess ? "Successfully updated..." : "On processing..."}
        </Text>
      }
      <TouchableOpacity style={Styles.paySubmit} onPress={paymentAddHandler}>
        <Text style={Styles.payText}>Submit</Text>
      </TouchableOpacity>

      <View style={Styles.policyContainer}>
        <Text style={Styles.Txt2M}>Proclaimer:</Text>
        <Text style={Styles.Txt4}>
          Please double check your payment username and phone number. We are not
          responsible for wrong phone or username you have entered, So make sure
          you have check Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Totam cupiditate neque aspernatur ipsum perferendis, nihil rerum
          aut sint reiciendis, delectus fugiat dolores.consequatur
        </Text>
        <Text style={Styles.policyH}>We guarenttee safety</Text>
        <Text style={Styles.Txt4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          dolorum!dicta amet facilis recusandae, accusantium consequatur id
          debitis
        </Text>
        <Text style={Styles.footTxt}>
          We guarenttee your information safe @Admin
        </Text>
      </View>
    </>
  );
};
export default PaymentEdids
