import { View,Text,TouchableOpacity} from "react-native";
import StylesCon from "../libs/Styles";
import { useContext } from "react";
import LocalContext from "../services/localization/localContext";
import { Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {useTranslation} from "react-i18next";


const LanguageChoose = ({navigation}) => {
    const {lang,setLang} = useContext(LocalContext);
    const { t, i18n } = useTranslation();
    const Styles = StylesCon();
    const changeLang = (lang) => {
            navigation.navigate(t("home"));
            i18n.changeLanguage(lang);
    }
    const MM = () => {
        setLang("mm");
        changeLang("mm");
    };
    const EN =() => {
        setLang("en");
        changeLang("en");
    };
    const CN = () => {
        setLang("cn");
        changeLang("cn");
    };
    return (
      <View style={Styles.langContainer}>
        <TouchableOpacity
          style={[Styles.langCon, lang === "en" ? Styles.langChoseCon : null]}
          onPress={EN}
        >
          <Image
            style={Styles.flagImg}
            source={require("../../assets/uk.jpg")}
          />
          <Text style={Styles.Txt1}>English</Text>
          {lang === "en" ? (
            <AntDesign name="checkcircleo" size={40} color="green" />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.langCon, lang === "mm" ? Styles.langChoseCon : null]}
          onPress={MM}
        >
          <Image
            style={Styles.flagImg}
            source={require("../../assets/myanmar.jpg")}
          />
          <Text style={Styles.Txt1}>မြန်မာ</Text>
          {lang === "mm" ? (
            <AntDesign name="checkcircleo" size={40} color="green" />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.langCon, lang === "cn" ? Styles.langChoseCon : null]}
          onPress={CN}
        >
          <Image
            style={Styles.flagImg}
            source={require("../../assets/china.jpg")}
          />
          <Text style={Styles.Txt1}>中文</Text>
          {lang === "cn" ? (
            <AntDesign name="checkcircleo" size={40} color="green" />
          ) : null}
        </TouchableOpacity>
      </View>
    );
};
export default LanguageChoose;