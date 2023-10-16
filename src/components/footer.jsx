import { Image, Text, View } from "react-native";
import Styles from "../libs/Styles";


export const Footer = () => {
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