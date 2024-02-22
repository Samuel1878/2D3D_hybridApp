import { FlatList, RefreshControl, Text, TouchableOpacity, View } from "react-native"
import StylesCon from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import LottieView from "lottie-react-native";
import LocalContext from "../services/localization/localContext";
import SocketContext from "../services/socket/socketContext";
import { TOPUP, TRANSACTION, TWODHISTORY } from "../libs/actions";
import AuthContext from "../services/auth/authContext";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";

const TransferHis = ()=> {
  const Styles = StylesCon();
  const {t} = useTranslation();
  const colors = themeProvider().colors;
  const [total, setTotal] = useState([]);
  const { transactions,setHistory_2D,history_2D, setTransactions,navigation,name,phone } = useContext(GlobalContext);
  const { socket } = useContext(SocketContext);
  const { setDetail } = useContext(LocalContext);
  const { userToken } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);

  const viewDetailFnc = (item) => {
    setDetail(item);
    navigation.navigate("detail");
  };
  const onRefresh = ()=>{
    setRefresh(true);
    setTimeout(()=>{
      setRefresh(false)
    },1000);
  };
 
  // function convertMsToTime(milliseconds) {
  //   let seconds = Math.floor(milliseconds / 1000);
  //   let minutes = Math.floor(seconds / 60);
  //   let hours = Math.floor(minutes / 60);

  //   seconds = seconds % 60;
  //   minutes = minutes % 60;
  //   hours = hours % 24;
  //   return `${hours}:${minutes}:${seconds}`;
  // }
  useEffect(() => {
     socket && socket.emit(TRANSACTION, userToken);
    socket.off(TRANSACTION).on(TRANSACTION, (data) => {
      setTransactions();
      setTransactions(data);
    });
    socket && socket.emit(TWODHISTORY, userToken);
     socket.off(TWODHISTORY).on(TWODHISTORY, (data) => {
      setHistory_2D();
       setHistory_2D(data);
       
     });
  }, [refresh]);
  useEffect(()=>{
    const all = transactions.concat(history_2D);
    transactions && history_2D && setTotal(all);
  },[refresh])
 
  
  

  const renderTransactions = ({ item }) => {
    // let time = convertMsToTime(item.time);
    console.log(item)
    return (
      <TouchableOpacity
        onPress={() => viewDetailFnc(item)}
        style={Styles.hisItemCon}
      >
        {item.number || item.owner ? (
          <></>
        ) : (
          <>
            <LottieView
              style={Styles.hisItemImg}
              autoPlay
              source={require("../../assets/transfered.json")}
              loop
            />
            <View style={Styles.hisItem}>
              <Text style={Styles.hisH}>
                {item.fromName === name || item.fromPhone === phone
                  ? "Transfer To " + item.toName
                  : "Received from" + item.fromName}
              </Text>
              <Text style={Styles.hisDate}>
                {item.date + " /" + item.month + " /" + item.year}

              </Text>
              <Text style={Styles.hisDate}>
              
                {item.time}
              </Text>
            </View>
          </>
        )}
        <Text style={Styles.hisAmount}>
          {item.fromName === name || item.fromPhone === phone ? " - " : " + "}
          {item.amount}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Styles.Container}>
     
      <View style={Styles.line}></View>
      <View style={Styles.TranHisCon}>
        {transactions && (
          <FlatList
            keyExtractor={(item) => item._id + Math.random()}
            renderItem={renderTransactions}
            data={total}
            extraData={transactions}
            bounces={true}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
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
    </View>
  );
}
export default TransferHis;