import { Image, Text, View } from "react-native";
import StylesCon from "../libs/Styles";


export const Footer = () => {
  const Styles = StylesCon();
    return (
      <>
        <Text style={Styles.needHelpTxt}>Need Help? Contact us</Text>
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
      </>
    );
}