import { TouchableOpacity, View ,Text,Image, TextInput} from "react-native";
import styles, { app_1, app_3, app_4, bg_3, bg_4, text_1, text_1b } from "../libs/style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LottieView from "lottie-react-native";
import { useContext, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import { Entypo } from "@expo/vector-icons";
import {SliderBox} from "react-native-image-slider-box"
import { IMAGES } from "../libs/data";





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
              <Text style={styles.ballanceD}>
                {opened ? money : "**********"}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => (opened ? setOpened(false) : setOpened(true))}
              style={styles.eye}
            >
              <Entypo
                name={opened ? "eye-with-line" : "eye"}
                size={26}
                color={app_1}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.walletBottomCon}>
          <View style={styles.walletBtnCon}>
            <TouchableOpacity style={styles.walletBtns}>
              <LottieView
                autoPlay
                style={styles.walletBtnImg}
                source={require("../../assets/transfer.json")}
              />
              <Text style={styles.walletBtnsTxt}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.walletBtns}>
              <LottieView
                autoPlay
                style={styles.walletBtnImg}
                source={require("../../assets/history.json")}
              />
              <Text style={styles.walletBtnsTxt}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.walletBtns}>
              <LottieView
                autoPlay
                style={styles.walletBtnImg}
                source={require("../../assets/services.json")}
              />
              <Text style={styles.walletBtnsTxt}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.walletBtns}>
              <LottieView
                autoPlay
                style={styles.walletBtnImg}
                source={require("../../assets/bank.json")}
              />
              <Text style={styles.walletBtnsTxt}>Bank</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.walletSliderCon}>
            <SliderBox
              images={IMAGES}
              sliderBoxHeight={120}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
              }
              dotColor={app_1}
              inactiveDotColor={bg_4}
              paginationBoxVerticalPadding={10}
              autoplay
              activeOpacity={0.5}
              circleLoop
              resizeMethod="resize"
              resizeMode={"cover"}
              paginationBoxStyle={{
                position: "absolute",
                bottom: 0,
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 10,
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: "rgba(128, 128, 128, 0.92)",
              }}
              ImageComponentStyle={{
                borderRadius: 10,
                width: "95%",
                marginTop: 5,
              }}
              imageLoadingColor="#2196F3"
            />
          </View>
          <View style={styles.paymentsCon}>
            <Text style={styles.paymentHeader}>Payment Methods</Text>
            <View style={styles.payments}>
              <Image
                style={styles.paymentImg}
                source={require("../../assets/kbzPay.png")}
              />
              <View style={styles.payment}>
                <Text style={styles.paymentN}>Willian J. Carrey</Text>
                <Text style={styles.paymentP}> 0969123144</Text>
              </View>
              <TouchableOpacity style={styles.paymentEd}>
                <Text style={styles.paymentEdTxt}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.payments}>
              <Image
                style={styles.paymentImg}
                source={require("../../assets/wavePay.png")}
              />
              <View style={styles.payment}>
                <Text style={styles.paymentN}>Willian J. Carrey</Text>
                <Text style={styles.paymentP}> 0969123144</Text>
              </View>
              <TouchableOpacity style={styles.paymentEd}>
                <Text style={styles.paymentEdTxt}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.payments}>
              <Image
                style={styles.paymentImg}
                source={require("../../assets/kbzPay.png")}
              />
              <View style={styles.payment}>
                <Text style={styles.paymentN}>Willian J. Carrey</Text>
                <Text style={styles.paymentP}> 0969123144</Text>
              </View>
              <TouchableOpacity style={styles.paymentEd}>
                <Text style={styles.paymentEdTxt}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
}
export default Wallet;