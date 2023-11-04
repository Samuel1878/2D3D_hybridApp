import { useContext } from "react";
import { View,Text } from "react-native"
import LocalContext from "../services/localization/localContext";
import Styles from "../libs/Styles";
import { Ionicons } from "@expo/vector-icons";
import { app_1 } from "../libs/style";

const Vouchers = () => {
    const {vouchers} = useContext(LocalContext);
    console.log(vouchers);
    return (
      <View style={Styles.voucherCon}>
        <Ionicons name="receipt" size={60} color={app_1} />
        <Text style={Styles.Vounumber}>{vouchers?.number}</Text>
        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>Amount</Text>
          <Text style={Styles.Txt2}>{vouchers?.amount}</Text>
        </View>
        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>voucher Id</Text>
          <Text style={Styles.Txt2}>{vouchers?._id}</Text>
        </View>
        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>Date</Text>
          <Text style={Styles.Txt2}>
            {vouchers?.date + "/" + vouchers?.month + "/" + vouchers?.year}
          </Text>
        </View>
        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>Time</Text>
          <Text style={Styles.Txt2}>
            {vouchers?.section === "af" ? "12:00 PM" : "4:30 PM"}
          </Text>
        </View>

        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>Status</Text>
          <Text style={Styles.Txt2}>
            {vouchers?.finished ? "processed" : "processing"}
          </Text>
        </View>
      </View>
    );
}
export default Vouchers;