import { FlatList, Text, View,TouchableOpacity, RefreshControl } from "react-native";
import {useTranslation} from "react-i18next"
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import StylesCon from "../libs/Styles";
import AnimatedLottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import SocketContext from "../services/socket/socketContext";
import { TOPUP } from "../libs/actions";
import themeProvider from "../libs/theme";
import LocalContext from "../services/localization/localContext";
import AuthContext from "../services/auth/authContext";

const Form = () => {
   const Styles = StylesCon();
   const {t} = useTranslation();
   const colors = themeProvider().colors;
   const {topUp, setTopUp,navigation} = useContext(GlobalContext);
   const {socket} = useContext(SocketContext);
   const [refresh, setRefresh] = useState(false);
   const {setReceipts} = useContext(LocalContext);
   const {userToken} = useContext(AuthContext);
    const viewReceipt = (item) => {
      setReceipts(item);
      navigation.navigate("cashinout");
    };
   const onRefresh = () => {
    setRefresh(true);
    setTimeout(()=>{
        setRefresh(false)
    },1000)
   };
    const emptyListFnc = () => {
        return (
           <View style={Styles.emptyListCon}>
             <Text style={Styles.Txt1}>No data found</Text>
           </View>
         );
    };
   useEffect(() => {
    socket && socket.emit(TOPUP, userToken);
     socket.off(TOPUP).on(TOPUP, (data) => {
       setTopUp();
       setTopUp(data);
     });
   }, [refresh]);
    const renderCashInOut = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => viewReceipt(item)}
          style={Styles.cashInItemCon}
        >
          {item.type === "deposit" ? (
            <AnimatedLottieView
              style={Styles.img}
              autoPlay
              source={require("../../assets/deposit.json")}
            />
          ) : (
            <AnimatedLottieView
              style={Styles.img}
              autoPlay
              source={require("../../assets/withdraw.json")}
            />
          )}

          <View style={Styles.itemCashInOut}>
            {/* <Text style={Styles.hisH}>{item.name}</Text>
            <Text style={Styles.hisDate}>{item.phone}</Text> */}
            <Text style={Styles.hisH}>
              {item.type !== "deposit"
                ? t("withraw")
                : t("deposit") + " " + "to"}
            </Text>
            <Text style={Styles.hisDate}>{item.phone}</Text>
            <Text style={Styles.hisDate}>{item.name}</Text>
          </View>

          <Text style={Styles.hisAmount}>
            {item.type === "withdrawl" ? (
              <AntDesign name="minus" size={24} color={colors.app_1} />
            ) : (
              <AntDesign name="plus" size={24} color={colors.app_4} />
            )}
            {"  "}
            {item.amount}
          </Text>
          {item.status === "pending" ? (
            <AntDesign name="hourglass" size={24} color="red" />
          ) : (
            <AntDesign name="checkcircle" size={24} color="green" />
          )}
        </TouchableOpacity>
      );
    };
   return (
     <View style={Styles.formCon}>
       <View style={Styles.line}></View>
       {topUp && (
         <FlatList
           keyExtractor={(item) => item._id + Math.random()}
           renderItem={renderCashInOut}
           extraData={topUp}
           data={topUp}
           bounces={true}
           horizontal={false}
           showsHorizontalScrollIndicator={false}
           ListEmptyComponent={emptyListFnc}
           refreshControl={
             <RefreshControl
               tintColor={colors.app_1}
               colors={colors.app_1}
               refreshing={refresh}
               onRefresh={onRefresh}
             />
           }
         />
       )}
     </View>
   );
};  
export default Form