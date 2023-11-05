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
        <Text style={Styles.detailsTxt}>Date</Text>
        <Text style={Styles.detailTxt}>{receipts?.createdAt}</Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Transaction Id</Text>
        <Text style={Styles.detailTxt}>{receipts?._id}</Text>
      </View>
      {receipts?.oneTimeNo ? (
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Security code</Text>
          <Text style={Styles.detailTxt}>{receipts?.oneTimeNo}</Text>
        </View>
      ) : (
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>Receipt Photo</Text>
          <Text style={Styles.detailTxt}>{receipts?.ontimeNo}</Text>
        </View>
      )}

      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Transaction Type</Text>
        <Text style={Styles.detailTxt}>{receipts?.type}</Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Payment method</Text>

        <Text style={Styles.detailTxt}>{receipts?.method}</Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Account</Text>
        <View>
          <Text style={Styles.detailTxt}>{receipts?.name}</Text>
          <Text style={Styles.detailTxt}>{receipts?.phone}</Text>
        </View>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Amount</Text>
        <Text style={Styles.detailTxt}>
          {receipts.type === "depsit" ? "+" : "-"}
          {receipts?.amount}
        </Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>Status</Text>

        <Text style={Styles.detailTxt}>{receipts?.status}</Text>
      </View>
    </View>
  );
};
export default CashInOut
