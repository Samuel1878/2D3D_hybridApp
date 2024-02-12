import { View,Text,FlatList,Image,TouchableOpacity } from "react-native"
import StylesCon from "../libs/Styles";
import {  useContext, useEffect, useState } from "react"
import GlobalContext from "../services/global/globalContext"
import { Data, ayaPay, cbPay, kbzPay, wavePay } from "../libs/data"
import stylesCon from "../libs/style";
import { Footer } from "../components/footer";
import { useTranslation } from "react-i18next";

const Payments = () =>{
  const {t} = useTranslation();
  const styles = stylesCon();
  const Styles = StylesCon();
  const {payments,navigation} = useContext(GlobalContext);
  const [data,setData] = useState(null);
    useEffect(()=>{
        payments && setData(payments);
        !payments && setData(Data);
    },[payments]);
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
      return (
        <View style={styles.payments}>
          <RenderImg />
          <View style={styles.payment}>
            <Text style={styles.paymentN}>{item.name}</Text>
            <Text style={styles.paymentP}> {item.phone}</Text>
          </View>
          <TouchableOpacity style={styles.paymentEd} onPress={EditPayment}>
            <Text style={styles.paymentEdTxt}>{t("edit")}</Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={Styles.payContainer}>
        {data && (
          <FlatList
            data={data}
            renderItem={RenderPayments}
            keyExtractor={(item) => item.phone}
            extraData={data}
            bounces={false}
            showsVerticalScrollIndicator={false}
          />
        )}
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
        <Footer />
      </View>
    );
}
export default Payments 