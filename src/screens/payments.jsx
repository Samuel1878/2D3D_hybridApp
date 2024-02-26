import { View,Text,FlatList,Image,TouchableOpacity } from "react-native"
import StylesCon from "../libs/Styles";
import {  useContext, useEffect, useState } from "react"
import GlobalContext from "../services/global/globalContext"
import { Data, ayaPay, cbPay, kbzPay, wavePay } from "../libs/data"
import stylesCon from "../libs/style";
import { Footer } from "../components/footer";
import { useTranslation } from "react-i18next";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { _DELETE_PAYMENT } from "../hooks/config";
import AuthContext from "../services/auth/authContext";

const Payments = () =>{
  const {t} = useTranslation();
  const styles = stylesCon();
  const Styles = StylesCon();
  const {payments,navigation,setUserRef} = useContext(GlobalContext);
  const {userToken} = useContext(AuthContext)
  // const [data,setData] = useState(null);
   
    // useEffect(()=>{
    //     payments && setData(payments);
    // },[payments]);
    const RenderPayments = ({ item }) => {
      const RenderImg = () => {
        let img;
        switch (item.method) {
          case "kbz":
            img = kbzPay;
            break;
          case "wave":
            img = wavePay;
            break;
          case "aya":
            img = ayaPay;
            break;
          default:
            img = cbPay;
            break;
        }
        return <Image style={styles.paymentImg} source={img} />;
      };
      const EditPayment = () => {
        switch (item.method) {
          case "kbz":
            navigation.navigate("kbzPay");
            break;
          case "wave":
            navigation.navigate("wavePay");

            break;
          case "aya":
            navigation.navigate("ayaPay");

            break;
          default:
            navigation.navigate("cbPay");

            break;
        }
      };
     
      const deleteFnc = () => {
        
        axios
        .post(_DELETE_PAYMENT, {
            name:item.name,
            phone:item.phone
            ,method:item.method,
            userToken:userToken})
        .then((res)=>{
            if(res.status===201 ||200){
              setUserRef(true);
              setTimeout(()=>{
                setUserRef(false)
              },100)
             
            }
        })
        .catch((e)=>console.log(e))
      }
      return (
        <View style={styles.payments}>
          <RenderImg />
          <View style={styles.payment}>
            <Text style={styles.paymentN}>{item.name}</Text>
            <Text style={styles.paymentP}> {item.phone}</Text>
          </View>
          <TouchableOpacity onPress={deleteFnc}>
            <AntDesign name="delete" size={26} color={"red"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentEd} onPress={EditPayment}>
            <Text style={styles.paymentEdTxt}>{t("add")}</Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={Styles.payContainer}>
          <View style={Styles.payCon}>
             {payments && payments.length>0 ? (
            <FlatList
              data={payments}
              renderItem={RenderPayments}
              keyExtractor={(item) => item.phone + Math.random()}
              extraData={payments}
              bounces={true}
              showsVerticalScrollIndicator={false}
            />):

            <View style={Styles.noPayment}
          >
            <Text style={Styles.Txt}>No payment method</Text>
            <Text style={Styles.Txt4}>Choose and add payment method for depository and withdrawl below</Text>
          </View>
}
            <View style={Styles.addCon}>
              <Text style={Styles.Txt}>
                {t(
                  "the more payment methods you set up, the faster you can withdraw in cash"
                )}
              </Text>
              <View style={Styles.addPayments}>
                <TouchableOpacity
                  style={Styles.payment}
                  onPress={() => navigation.navigate("kbzPay")}
                >
                  <Image source={kbzPay} style={Styles.payments} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.payment}
                  onPress={() => navigation.navigate("wavePay")}
                >
                  <Image source={wavePay} style={Styles.payments} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.payment}
                  onPress={() => navigation.navigate("ayaPay")}
                >
                  <Image source={ayaPay} style={Styles.payments} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.payment}
                  onPress={() => navigation.navigate("cbPay")}
                >
                  <Image source={cbPay} style={Styles.payments} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
    
        <Footer />
      </View>
    );
}
export default Payments 