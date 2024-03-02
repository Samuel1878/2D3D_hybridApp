import { TouchableOpacity, View ,Text,Image, FlatList, RefreshControl, ScrollView, SafeAreaView} from "react-native";
import stylesCon from "../libs/style";
import LottieView from "lottie-react-native";
import { useContext, useEffect, useState ,useCallback} from "react";
import GlobalContext from "../services/global/globalContext";
import { Entypo } from "@expo/vector-icons";
import {SliderBox} from "react-native-image-slider-box";
import { Data, IMAGES } from "../libs/data";
import {wavePay,kbzPay,ayaPay,cbPay}from "../libs/data";
import { MaterialCommunityIcons,AntDesign, } from "@expo/vector-icons";
import AuthContext from "../services/auth/authContext";
import LogReg from "../layouts/logReg";
import { LinearGradient } from "expo-linear-gradient";
import SocketContext from "../services/socket/socketContext";
import { FETCH_INFO } from "../libs/actions";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";
import { FontAwesome } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
const Wallet = ()=>{ 
  const styles = stylesCon();
  const colors = themeProvider().colors;
  const {t} = useTranslation();
  const {money,navigation,payments,level,phone,profile,userRef,setUserRef} = useContext(GlobalContext);
  const {userToken} = useContext(AuthContext);
  const {socket} = useContext(SocketContext)
  const [data,setData]= useState([]);
  const [opened, setOpened] = useState(false);
  const [qr,setQr] = useState(false);

    const scanFunc = ()=>{

    }
    const RenderPayments = ({item}) =>{

      const RenderImg= ()=>{
        let img ;
        switch (item.method) {
          case "kbz":
            img = kbzPay
            break;
          case "wave":
            img = wavePay
            break
          case "aya":
            img = ayaPay
            break;
          default:
            img = cbPay
            break;
        }
        return(<Image style={styles.PaymentImg} source={img}/>)
      }
      const EditPayment = () =>{
         switch (item.method) {
           case "kbz":
         navigation.navigate("kbzPay");
             break;
           case "wave":
               navigation.navigate("wavePay");
         
             break;
           case "aya":
               navigation.navigate("ayaPay");
             
             break;
           default:
               navigation.navigate("cbPay");
       
             break;
         }
        
      }
      return (
        <View style={styles.Payments}>
          <TouchableOpacity style={styles.paymentEd} onPress={EditPayment}>
            <FontAwesome name="plus" size={26} color={colors.text_1} />
          </TouchableOpacity>
          <RenderImg />
          <View style={styles.Payment}>
            <Text style={styles.paymentN}>{item?.name}</Text>
            <Text style={styles.paymentP}> {item?.phone}</Text>
          </View>
        </View>
      );

    };
 
    const onRefresh = useCallback(() => {
      setUserRef(true);
      setTimeout(() => {
        setUserRef(false);
      }, 2000);
    }, []);
    
  
    return (
      <SafeAreaView style={styles.wallets}>
        {!userToken ? (
          <LogReg navigation={navigation} />
        ) : (
          <ScrollView
            contentContainerStyle={styles.WALLETscrollView}
            disableScrollViewPanResponder={true}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
            refreshControl={
              <RefreshControl
                tintColor={colors.app_1}
                refreshing={userRef}
                onRefresh={onRefresh}
                colors={colors.app_1}
              />
            }
          >
            <View style={styles.walletTopCon}>
              <View style={styles.walletTopL}>
                <MaterialCommunityIcons
                  name="line-scan"
                  size={45}
                  color={colors.app_1}
                />
              </View>
              <TouchableOpacity
                style={styles.walletTopR}
                onPress={() => navigation.navigate("me")}
              >
                <Image style={styles.walletImage} source={{ uri: profile }} />
              </TouchableOpacity>
            </View>
            <View style={styles.wallet}>
              <View style={styles.walletMainCon}>
                <View style={styles.ballanceCon}>
                  <LinearGradient
                    start={{ x: 1.5, y: 0.5 }}
                    style={styles.linearCon}
                    colors={[
                      "rgba(243,186,47,.5)",
                      "rgba(145,100,31,.4)",
                      "rgba(251,206,41,.6)",
                    ]}
                  >
                    {/* <LottieView
                  speed={0.5}
                  autoPlay
                  style={{width:30,height:30}}
                  source={require("../../assets/dollar.json")}
                /> */}
                    <View style={styles.ballanceBox}>
                      <View>
                        <Text style={styles.ballanceHeader}>
                          {t("wallet balance") + " " + t("MMK")}
                        </Text>
                        <Text style={styles.ballanceD}>
                          {opened ? money : "**********"}
                        </Text>
                      </View>

                      <TouchableOpacity
                        onPress={() =>
                          opened ? setOpened(false) : setOpened(true)
                        }
                        style={styles.eye}
                      >
                        <Entypo
                          name={opened ? "eye-with-line" : "eye"}
                          size={26}
                          color={colors.bg_1}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.balanceCon}>
                      <Text style={styles.userTxt}>
                        {level == "1" ? t("LEVEL ONE USER") : t("VIP USER")}
                      </Text>
                      <Text style={styles.balanceNo}>{phone}</Text>
                    </View>
                  </LinearGradient>
                  <TouchableOpacity
                    style={!qr ? styles.qrCodeBtn : styles.qrCodePressed}
                    onPress={() => (!qr && setQr(true)) || (qr && setQr(false))}
                  >
                    {/* <MaterialCommunityIcons
                      name="qrcode"
                      size={qr ? 200 : 45}
                      color={colors.app_1}
                    /> */}
                    <QRCode value={phone} size={qr ? 200 : 45} logo={require("../../assets/logo.png")} logoSize={qr?65:25}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.walletMain}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("deposit")}
                    style={styles.scanBtn}
                  >
                    <MaterialCommunityIcons
                      name="wallet-plus-outline"
                      size={50}
                      color={colors.app_1}
                    />

                    <Text style={styles.walletBtnTxt}>{t("deposit")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("withdrawl")}
                    style={styles.scanBtn}
                    disabled={payments && payments.length > 0 ? false : true}
                  >
                    <AntDesign name="export" size={50} color={colors.app_1} />
                    <Text style={styles.walletBtnTxt}>{t("withdraw")}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.walletBottomCon}>
                <View style={styles.walletBtnCon}>
                  <View style={styles.walletBtnCons}>
                    <TouchableOpacity
                      style={styles.walletBtns}
                      onPress={() => navigation.navigate("Transfer")}
                    >
                      <LottieView
                        autoPlay
                        style={styles.walletBtnImg}
                        source={require("../../assets/transfer.json")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.walletBtnsTxt}>{t("transfer")}</Text>
                  </View>
                  <View style={styles.walletBtnCons}>
                    <TouchableOpacity
                      style={styles.walletBtns}
                      onPress={() => navigation.navigate("Transaction_History")}
                    >
                      <LottieView
                        autoPlay
                        style={styles.walletBtnImg}
                        source={require("../../assets/historyBlue.json")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.walletBtnsTxt}>{t("receipt")}</Text>
                  </View>

                  <View style={styles.walletBtnCons}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Form")}
                      style={styles.walletBtns}
                    >
                      <LottieView
                        autoPlay
                        style={styles.walletBtnImg}
                        source={require("../../assets/moneyGrow.json")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.walletBtnsTxt}>{t("form")}</Text>
                  </View>

                  <View style={styles.walletBtnCons}>
                    <TouchableOpacity
                      style={styles.walletBtns}
                      onPress={() => navigation.navigate("payments")}
                    >
                      <LottieView
                        autoPlay
                        style={[styles.walletBtnImg]}
                        source={require("../../assets/bank.json")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.walletBtnsTxt}>{t("payments")}</Text>
                  </View>
                </View>
                <View style={styles.walletSliderCon}>
                  <SliderBox
                    images={IMAGES}
                    sliderBoxHeight={120}
                    onCurrentImagePressed={(index) =>
                      console.warn(`image ${index} pressed`)
                    }
                    dotColor={colors.app_1}
                    inactiveDotColor={colors.bg_4}
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
                  <Text style={styles.paymentHeader}>
                    {t("payment methods")}
                  </Text>
                  {payments.length > 0 ? (
                    <FlatList
                      data={payments}
                      renderItem={RenderPayments}
                      keyExtractor={(item) => item.name + Math.random()}
                      extraData={data}
                      //initialScrollIndex={1}
                      bounces={false}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      // refreshControl={
                      //   <RefreshControl
                      //
                      //     refreshing={refreshing}
                      //     onRefresh={onRefresh}
                      //   />
                      // }
                    />
                  ) : (
                    <TouchableOpacity
                      style={styles.gotoPayBtn}
                      onPress={() => navigation.navigate("payments")}
                    >
                      <Text>Add Payments</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    );
}
export default Wallet;