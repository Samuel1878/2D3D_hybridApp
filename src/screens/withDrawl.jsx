import { TouchableOpacity, View ,Text, TextInput, Image} from "react-native";
import Styles from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import { AntDesign } from '@expo/vector-icons';
import { app_1, text_1b } from "../libs/style";
import { ayaPay, cbPay, kbzPay, wavePay } from "../libs/data";
const WithDrawl = () => {
    const {payments,money} = useContext(GlobalContext);

    const [pin, setPin] = useState("");
    const [amount, setAmount] = useState("");
    const [selected, setSelected] = useState({});
    useEffect(()=>{
        setSelected(payments[0])
    },[])
  return (
    <View style={Styles.Container}>
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
      {selected && payments&&(
        <View style={Styles.withdrawCon}>
          <Text style={Styles.Txt3}>Choose your receiving account</Text>
          <View style={Styles.receivingCon}>
            {selected?.method === "kbz" ? (
              <Image style={Styles.Img} source={kbzPay} />
            ) : (
              ""
            )}
            {selected?.method === "wave" ? (
              <Image style={Styles.Img} source={wavePay} />
            ) : (
              ""
            )}
            {selected?.method === "aya" ? (
              <Image style={Styles.Img} source={ayaPay} />
            ) : (
              ""
            )}
            {selected?.method === "cb" ? (
              <Image style={Styles.Img} source={cbPay} />
            ) : (
              ""
            )}
            <View style={Styles.selectedData}>
              <Text style={Styles.Txt1}>{selected.name}</Text>
              <Text style={Styles.Txt2}>{selected.phone}</Text>
            </View>
            <TouchableOpacity>
                <Text style={Styles.Txt3M}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text style={Styles.Txt2M}>Availiable amount: {money}  MMK</Text>
          <Text style={Styles.Txt3}>Cash amount</Text>
          <TextInput
            placeholder="Enter cash amount"
            style={Styles.withdrawInput}
            value={amount}
          />
          <Text style={Styles.Txt3}>Fund security pin</Text>
          <TextInput
            placeholder="Enter 6-digit pin"
            style={Styles.withdrawInput}
            value={pin}
          />
          <TouchableOpacity style={Styles.SubmitBtn}><Text style={Styles.btnTxt}>Submit</Text></TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default WithDrawl;
