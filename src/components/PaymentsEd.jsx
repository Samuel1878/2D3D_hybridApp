import { View , Image, TouchableWithoutFeedback, Keyboard} from "react-native"
import Styles from "../libs/Styles";
import { ayaPay, cbPay, kbzPay, wavePay } from "../libs/data";
import PaymentEdids from "./payments";


export const KbzPay = ()=> {
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