import { View,Text} from "react-native";
import StylesCon from "../libs/Styles";
import { useTranslation } from "react-i18next";


const Version = () => {
      const Styles = StylesCon();
      const {t} = useTranslation();
  return <View style={Styles.Container}>
      <View style={Styles.versionTop}>

      </View>
      <View style={Styles.versionBt}>
        <Text style={Styles.versionTxt}>{t("version") + ": "}  1.0.1 vMi</Text>

      </View>
  </View>;
};
export default Version;
