import { View, Text } from "react-native";
import StylesCon from "../libs/Styles";
import { useContext } from "react";
import LocalContext from "../services/localization/localContext";
import { AntDesign } from "@expo/vector-icons";
import themeProvider from "../libs/theme";
import {useTranslation} from "react-i18next";
export const CashInOut = () => {
  const Styles = StylesCon();
  const colors = themeProvider().colors;
  const {t} = useTranslation();
  const { receipts } = useContext(LocalContext);
  console.log(receipts)
  return (
    <View style={Styles.Container}>
      <AntDesign
        name="checkcircle"
        size={60}
        color={colors.app_1}
        style={Styles.detailTop}
      />
      <Text style={Styles.detailTxt}>{t("payment successful")}</Text>
      <Text style={Styles.detailAmount}>
        {receipts.to ? "-" : "+"}
        {receipts?.amount}
      </Text>
      <View style={Styles.line}></View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>{t("date")}</Text>
        <Text style={Styles.detailTxt}>{receipts?.createdAt.slice(0,10)}</Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>ID</Text>
        <Text style={Styles.detailTxt}>{receipts?._id}</Text>
      </View>
      {receipts?.oneTimeNo ? (
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>{t("security code")}</Text>
          <Text style={Styles.detailTxt}>{receipts?.oneTimeNo}</Text>
        </View>
      ) : (
        <View style={Styles.details}>
          <Text style={Styles.detailsTxt}>{t("receipt")}</Text>
          <Text style={Styles.detailTxt}>{receipts?.ontimeNo}</Text>
        </View>
      )}

      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>{t("type")}</Text>
        <Text style={Styles.detailTxt}>{receipts?.type}</Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>{t("method")}</Text>

        <Text style={Styles.detailTxt}>{receipts?.method}</Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>{t("payment")}</Text>
        <View>
          <Text style={Styles.detailTxt}>{receipts?.name}</Text>
          <Text style={Styles.detailTxt}>{receipts?.phone}</Text>
        </View>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>{t("amount")}</Text>
        <Text style={Styles.detailTxt}>
          {receipts.type === "depsit" ? "+" : "-"}
          {receipts?.amount}
        </Text>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.detailsTxt}>{t("status")}</Text>

        <Text style={Styles.detailTxt}>{receipts?.status}</Text>
      </View>
    </View>
  );
};
export default CashInOut
