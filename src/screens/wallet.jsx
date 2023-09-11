import { TouchableOpacity, View ,Text} from "react-native";
import styles, { app_1, app_3, app_4, bg_4, text_1, text_1b } from "../libs/style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LottieView from "lottie-react-native";
import { useContext, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import { Entypo } from "@expo/vector-icons";
const Wallet = ()=>{ 
  const {money} = useContext(GlobalContext);
  const [opened, setOpened] = useState(false)
    const scanFunc = ()=>{

    }
    return (
      <View style={styles.wallet}>
        <View style={styles.walletMainCon}>
          <View style={styles.walletMain}>
            <TouchableOpacity onPress={scanFunc} style={styles.scanBtn}>
              <MaterialCommunityIcons
                name="line-scan"
                size={45}
                color={text_1b}
              />
              <Text style={styles.walletBtnTxt}>Scan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={scanFunc} style={styles.scanBtn}>
              <MaterialCommunityIcons name="qrcode" size={45} color={text_1b} />
              <Text style={styles.walletBtnTxt}>Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={scanFunc} style={styles.scanBtn}>
              <MaterialCommunityIcons
                name="wallet-plus-outline"
                size={45}
                color={text_1b}
              />
              <Text style={styles.walletBtnTxt}>Cash In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={scanFunc} style={styles.scanBtn}>
              <AntDesign name="export" size={45} color={text_1b} />
              <Text style={styles.walletBtnTxt}>Cash Out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ballanceCon}>
            <LottieView
              autoPlay
              style={styles.walletImg}
              source={require("../../assets/wallet.json")}
            />
            <View>
              <Text style={styles.ballanceHeader}>Ballance (Ks)</Text>
              <Text style={styles.ballanceD}>{opened?money:"**********"}</Text>
            </View>
            <TouchableOpacity onPress={()=>opened?setOpened(false):setOpened(true)} style={styles.eye}>
              <Entypo name={opened?"eye-with-line":"eye"} size={26} color={app_1} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 3 }}></View>
      </View>
    );
}
export default Wallet;