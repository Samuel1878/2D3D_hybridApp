import { Image, TouchableOpacity, View,Text, TextInput} from "react-native";
import StylesCon from "../libs/Styles";
import { ayaPay, cbPay, kbzPay, wavePay } from "../libs/data";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import LocalContext from "../services/localization/localContext";
import { useTranslation } from "react-i18next";


const Deposit = ()=>{
    const {t} = useTranslation();
    const Styles = StylesCon();
    const {navigation} = useContext(GlobalContext);
    const {setDepoMethod,setDeposit,deposit} = useContext(LocalContext);
    const [valid, setValid] = useState(false);
    const [pressedOn, setPressedOn] = useState()
    function kbzPayfnc (){ 
        setDepoMethod("kbzPay")
        navigation.navigate("depositLayout")
    }
     function wavePayfnc() {
       setDepoMethod("wavePay");
       navigation.navigate("depositLayout");
     }
      function ayaPayfnc() {
        setDepoMethod("ayaPay");
        navigation.navigate("depositLayout");
      }
       function cbPayfnc() {
         setDepoMethod("cbPay");
         navigation.navigate("depositLayout");
       }
    useEffect(()=>{
        if(deposit>=1000 && deposit<=50000000){
            setValid(true);
            return
        }
        setValid(false)
        
    },[deposit])
    return (
      <View style={Styles.Container}>
        <View style={Styles.depositAmount}>
          <Text style={Styles.inputLabel}>{t("deposit amount")}</Text>
          <TextInput
            placeholder=" 1000 to 5,000,000 MMK"
            placeholderTextColor={"rgb(130,125,135)"}
            value={deposit}
            onChangeText={(e) => setDeposit(e)}
            style={Styles.depositAmountInput}
          />
          <Text style={Styles.alertTxt}>{valid?"":t("unvalid amount")}</Text>
          <View style={Styles.recommedCon}>
            <TouchableOpacity
              style={Styles.recommedInputs}
              onPress={() => setDeposit("1000")}
            >
              <Text style={Styles.recommedTxt}>1,000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.recommedInputs}
              onPress={() => setDeposit("5000")}
            >
              <Text style={Styles.recommedTxt}>5,000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.recommedInputs]}
              onPress={() => setDeposit("10000")}
            >
              <Text style={Styles.recommedTxt}>10,000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.recommedInputs}
              onPress={() => setDeposit("100000")}
            >
              <Text style={Styles.recommedTxt}>100,000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.recommedInputs}
              onPress={() => setDeposit("200000")}
            >
              <Text style={Styles.recommedTxt}>200,000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.recommedInputs}
              onPress={() => setDeposit("500000")}
            >
              <Text style={Styles.recommedTxt}>500,000</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={Styles.depoH}>{t("direct deposity via 24/7 supported")}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Service")}
          style={Styles.depoServiceBtn}
        >
          <Text style={Styles.depoBtnTxt}>{t("customer service")}</Text>
        </TouchableOpacity>
        <Text style={Styles.depoTxt}>{t("or")}</Text>
        <View style={Styles.btnDeponContainer}>
          <TouchableOpacity onPress={kbzPayfnc} style={Styles.BtnDepoCon}>
            <Image source={kbzPay} style={Styles.PayDepo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={wavePayfnc} style={Styles.BtnDepoCon}>
            <Image source={wavePay} style={Styles.PayDepo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ayaPayfnc} style={Styles.BtnDepoCon}>
            <Image source={ayaPay} style={Styles.PayDepo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={cbPayfnc} style={Styles.BtnDepoCon}>
            <Image source={cbPay} style={Styles.PayDepo} />
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default Deposit;