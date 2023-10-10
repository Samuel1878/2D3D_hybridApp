import { TouchableOpacity, View,Text } from "react-native";
import Styles from "../libs/Styles"
import LottieView from "lottie-react-native";
const CashInOut = () => {

  return (
    <View style={Styles.Container}>
      <View style={Styles.cashServiceCon}>
        <View style={Styles.qchatCon}>
            <Text>Quick chat</Text>
            <Text>We provide quick chat for real time services</Text>
        </View>
        <TouchableOpacity style={Styles.customerBtn}>
          <LottieView
            autoPlay
            style={Styles.customer}
            source={require("../../assets/serviceB.json")}
          />
          <Text>
            Chat Now
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.cashServiceCon}>

      </View>

    </View>
  );
};
export default CashInOut;
