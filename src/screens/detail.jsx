import { View ,Text} from "react-native"
import Styles from "../libs/Styles"
import { useContext } from "react"
import LocalContext from "../services/localization/localContext"
import { AntDesign } from '@expo/vector-icons';
import { app_1 } from "../libs/style";
export const Details = ()=>{
    const {detail} = useContext(LocalContext);
    console.log(detail)
    return (
      <View style={Styles.Container}>
        <AntDesign
          name="checkcircle"
          size={60}
          color={app_1}
          style={Styles.detailTop}
        />
        <Text style={Styles.detailTxt}>Payment Successful</Text>
        <Text style={Styles.detailAmount}>
          {detail.to ? "-" : "+"}
          {detail?.amount}
        </Text>
        <View style={Styles.line}></View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Transaction Time</Text>
          <Text style={Styles.detailTxt}>{detail?.date}</Text>
        </View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Transaction Id</Text>
          <Text style={Styles.detailTxt}>{detail?.id}</Text>
        </View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Transaction Type</Text>
          <Text style={Styles.detailTxt}>Transfer</Text>
        </View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>
            {detail?.to ? "Transfer To" : "Receive from"}
          </Text>
          <View>
            <Text style={Styles.detailTxt}>{detail?.to||detail?.from}</Text>
            <Text style={Styles.detailTxt}>{detail?.name}</Text>
          </View>
        </View>
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Amount</Text>
          <Text style={Styles.detailTxt}>
            {detail.to ? "-" : "+"}
            {detail?.amount}
          </Text>
        </View>
      </View>
    );
}