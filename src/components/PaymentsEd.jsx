import { View , Image, TouchableWithoutFeedback, Keyboard} from "react-native"
import StylesCon from "../libs/Styles";
import { ayaPay, cbPay, kbzPay, wavePay } from "../libs/data";
import PaymentEdids from "./payments";


export const KbzPay = ()=> {
      const Styles = StylesCon();
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={{ flex: 1 }}
      >
        <View style={Styles.Container}>
          <Image source={kbzPay} style={Styles.payImg} />
         <PaymentEdids method={"kbz"}/>
        </View>
      </TouchableWithoutFeedback>
    );
}
export const WavePay = () => {
      const Styles = StylesCon();
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={Styles.Container}>
        <Image source={wavePay} style={Styles.payImg} />
        <PaymentEdids method={"wave"} />
      </View>
    </TouchableWithoutFeedback>
  );};
export const AyaPay = () => {
      const Styles = StylesCon();
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={Styles.Container}>
        <Image source={ayaPay} style={Styles.payImg} />
        <PaymentEdids method={"aya"} />
      </View>
    </TouchableWithoutFeedback>
  );
};
export const CbPay = () => {
      const Styles = StylesCon();
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={Styles.Container}>
        <Image source={cbPay} style={Styles.payImg} />
        <PaymentEdids method={"cb"} />
      </View>
    </TouchableWithoutFeedback>
  );
};