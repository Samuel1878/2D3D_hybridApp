import { View ,Text} from "react-native"
import StylesCon from "../libs/Styles"
import { useContext } from "react"
import LocalContext from "../services/localization/localContext"
import { AntDesign } from '@expo/vector-icons';
import GlobalContext from "../services/global/globalContext";
import themeProvider from "../libs/theme";
export const Details = ()=>{
  const colors = themeProvider().colors;
      const Styles = StylesCon();
    const {detail} = useContext(LocalContext);
    const {name,phone} = useContext(GlobalContext);
    console.log(detail)
    return (
      <View style={Styles.Container}>
        <AntDesign
          name="checkcircle"
          size={60}
          color={colors.app_1}
          style={Styles.detailTop}
        />
        <Text style={Styles.detailTxt}>Payment Successful</Text>
        <Text style={Styles.detailAmount}>
          {detail.fromName === name || detail.fromPhone === phone ? "-" : "+"}
          {detail?.amount}
        </Text>
        <View style={Styles.line}></View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Transaction Date</Text>
          <Text style={Styles.detailTxt}>{detail?.date}</Text>
        </View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Transaction Id</Text>
          <Text style={Styles.detailTxt}>{detail?._id}</Text>
        </View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Transaction Time</Text>
          <Text style={Styles.detailTxt}>{detail?.time}</Text>
        </View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>
            {detail?.fromName == name || detail.fromPhone == phone
              ? "Transfer To"
              : "Receive from"}
          </Text>
          <View>
            <Text style={Styles.detailTxt}>
              {detail?.toName || detail?.fromName}
            </Text>
            <Text style={Styles.detailTxt}>{detail?.toPhone}</Text>
          </View>
        </View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Amount</Text>
          <Text style={Styles.detailTxt}>
            {detail.fromName === name || detail.fromPhone === phone ? "-" : "+"}
            {detail?.amount}
          </Text>
        </View>
      </View>
    );
}