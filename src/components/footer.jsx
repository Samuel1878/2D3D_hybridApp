import { Image, Text, View } from "react-native";
import StylesCon from "../libs/Styles";
import {useTranslation} from "react-i18next"


export const Footer = () => {
    const {t} = useTranslation()
  const Styles = StylesCon();
    return (
      <View style={Styles.footer}>
        <Text style={Styles.needHelpTxt}>{t("need help? contact us")}</Text>
        <View style={Styles.footerCon}>
          <Image
            style={Styles.serviceImg}
            source={require("../../assets/telegram.png")}
          />
          <Image
            style={Styles.serviceImg}
            source={require("../../assets/viber.png")}
          />
          <Image
            style={Styles.serviceImg}
            source={require("../../assets/telegram.png")}
          />
        </View>
      </View>
    );
}