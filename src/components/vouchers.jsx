import { useContext } from "react";
import { View,Text } from "react-native"
import LocalContext from "../services/localization/localContext";
import StylesCon from "../libs/Styles";
import { Ionicons } from "@expo/vector-icons";
import themeProvider from "../libs/theme";
import {useTranslation} from "react-i18next"
import AnimatedLottieView from "lottie-react-native";

const Vouchers = () => {
    const {vouchers} = useContext(LocalContext);
    const colors = themeProvider().colors;
    const {t} = useTranslation()
    const Styles = StylesCon();
    console.log(vouchers);
    return (
      <View style={Styles.voucherCon}>
        <Ionicons name="receipt" size={60} color={colors.app_1} />
        <Text style={Styles.Vounumber}>{vouchers?.number}</Text>
        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>{t("amount")}</Text>
          <Text style={Styles.Txt2}>{vouchers?.amount}</Text>
        </View>
        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>ID</Text>
          <Text style={Styles.Txt2}>{vouchers?._id}</Text>
        </View>
        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>{t("date")}</Text>
          <Text style={Styles.Txt2}>
            {vouchers?.date + "/" + vouchers?.month + "/" + vouchers?.year}
          </Text>
        </View>
        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>{t("time")}</Text>
          <Text style={Styles.Txt2}>
            {vouchers?.section === "af" ? "12:00 PM" : "4:30 PM"}
          </Text>
        </View>

        <View style={Styles.rowCon}>
          <Text style={Styles.Txt3}>{t("status")}</Text>
          <Text style={Styles.Txt2}>
            {vouchers?.finished ? t("processed") : t("on going")}
          </Text>
        </View>
        {vouchers?.win
        ?(
          <View style={Styles.Container}>
            <AnimatedLottieView
              style={Styles.winner}
              autoPlay
              source={require("../../assets/winnerCup.json")}
              />
          </View>
        ):(<View style={Styles.Container}>
            <Text style={Styles.Txt1M}>{t("good luck next time")}</Text>
        </View>)}
      </View>
    );
}
export default Vouchers;