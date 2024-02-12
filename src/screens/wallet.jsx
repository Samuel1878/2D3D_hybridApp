import { TouchableOpacity, View ,Text,Image, FlatList, RefreshControl, ScrollView} from "react-native";
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
const Wallet = ()=>{ 
  const styles = stylesCon();
  const colors = themeProvider().colors;
  const {t} = useTranslation();
  const {money,navigation,payments,level,phone,name} = useContext(GlobalContext);
  const {userToken} = useContext(AuthContext);
  const {socket} = useContext(SocketContext)
  const [data,setData]= useState([]);
  const [opened, setOpened] = useState(false);
  const [qr,setQr] = useState(false);
  const [refreshing, setRefreshing] = useState(false);



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
          <RenderImg />
          <View style={styles.Payment}>
            <Text style={styles.paymentN}>{item?.name}</Text>
            <Text style={styles.paymentP}> {item?.phone}</Text>

            <TouchableOpacity style={styles.paymentEd} onPress={EditPayment}>
              <Text style={styles.paymentEdTxt}>{t("edit")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );

    };
  useEffect(()=>{
    refreshing && socket.emit(FETCH_INFO,userToken)
    payments&&setData(payments);
    if(!payments){
        setData(Data);
      }   
    },[payments,refreshing]);
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
    
  
    return (
      <View style={styles.wallets}>
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
                refreshing={refreshing}
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
              <View style={styles.walletTopR}>
                <Image
                  style={styles.walletImage}
                  source={require("../../assets/profile.png")}
                />
              </View>
            </View>
            <View style={styles.wallet}>
              <View style={styles.walletMainCon}>
                <View style={styles.ballanceCon}>
                  <LinearGradient
                    start={{ x: 2.1, y: 0.5 }}
                    style={styles.linearCon}
                    colors={[
                      "rgba(243,186,47,.5)",
                      "rgba(12,14,17,.5)",
                      "rgba(251,206,41,.5)",
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
                          {t("wallet balance") + " "+ t("MMK")}
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
                      <Text style={styles.userTxt}>{level=="1"?t("LEVEL ONE USER"):t("VIP USER")}</Text>
                      <Text style={styles.balanceNo}>{phone}</Text>
                    </View>
                  </LinearGradient>
                  <TouchableOpacity
                    style={!qr ? styles.qrCodeBtn : styles.qrCodePressed}
                    onPress={() => (!qr && setQr(true)) || (qr && setQr(false))}
                  >
                    <MaterialCommunityIcons
                      name="qrcode"
                      size={qr ? 200 : 45}
                      color={colors.app_1}
                    />
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
                  >
                    <AntDesign name="export" size={50} color={colors.app_1} />
                    {/* <LottieView
                speed={1}
                autoPlay
                style={styles.cashInOut}
                source={require("../../assets/withdraw.json")}
              /> */}
                    {/* <Image
                source={require("../../assets/withdraw.png")}
                style={styles.scanLoti}
              /> */}
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
                      onPress={() => navigation.navigate("Service")}
                      style={styles.walletBtns}
                    >
                      <LottieView
                        autoPlay
                        style={styles.walletBtnImg}
                        source={require("../../assets/services.json")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.walletBtnsTxt}>{t("services")}</Text>
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
                  <Text style={styles.paymentHeader}>{t("payment methods")}</Text>
                  <FlatList
                    data={data}
                    renderItem={RenderPayments}
                    keyExtractor={(item) => item.method}
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
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    );
}
export default Wallet;