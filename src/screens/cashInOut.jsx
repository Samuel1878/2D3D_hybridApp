import { View, Text } from "react-native";
import Styles from "../libs/Styles";
import { useContext } from "react";
import LocalContext from "../services/localization/localContext";
import { AntDesign } from "@expo/vector-icons";
import { app_1 } from "../libs/style";
export const CashInOut = () => {
  const { receipts } = useContext(LocalContext);
  console.log(receipts)
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
        {receipts.to ? "-" : "+"}
        {receipts?.amount}
      </Text>
      <View style={Styles.line}></View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Type</Text>
        <Text style={Styles.detailTxt}>{receipts?.date}</Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Transaction Id</Text>
        <Text style={Styles.detailTxt}>{receipts?.id}</Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Transaction Type</Text>
        <Text style={Styles.detailTxt}>Transfer</Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>
          {receipts?.to ? "Transfer To" : "Receive from"}
        </Text>
        <View>
          <Text style={Styles.detailTxt}>{receipts?.to || receipts?.from}</Text>
          <Text style={Styles.detailTxt}>{receipts?.name}</Text>
        </View>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Amount</Text>
        <Text style={Styles.detailTxt}>
          {receipts.to ? "-" : "+"}
          {receipts?.amount}
        </Text>
      </View>
    </View>
  );
};
export default CashInOut
