import { FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Styles from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import AnimatedLottieView from "lottie-react-native";
import { app_1, bg_2, bg_3, text_1 } from "../libs/style";
import LottieView from "lottie-react-native";
import LocalContext from "../services/localization/localContext";
import SocketContext from "../services/socket/socketContext";
import { TOPUP, TRANSACTION } from "../libs/actions";
import AuthContext from "../services/auth/authContext";
const TransferHis = ()=> {
  const { transactions, setTransactions, topUp, setTopUp, navigation,name,phone } =
    useContext(GlobalContext);
  const { socket } = useContext(SocketContext);
  const { setDetail ,setReceipts} = useContext(LocalContext);
  const { userToken } = useContext(AuthContext);
  const [isTran, setIsTran] = useState(true);
  const transferFnc = () => {
    !isTran && setIsTran(true);
  };
  const receiveFnc = () => {
    isTran && setIsTran(false);
  };
  const viewDetailFnc = (item) => {
    setDetail(item);
    navigation.navigate("detail");
  };
  const viewReceipt = (item)=>{
    setReceipts(item);
    navigation.navigate("cashinout")
  }
  function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    return `${hours}:${minutes}:${seconds}`;
  }
  useEffect(() => {
    isTran && socket.emit(TRANSACTION, userToken);
    socket.off(TRANSACTION).on(TRANSACTION, (data) => {
      setTransactions(data);
    });
  }, [isTran]);
  useEffect(() => {
    !isTran && socket.emit(TOPUP, userToken);
    socket.off(TOPUP).on(TOPUP, (data) => {
      setTopUp(data);
    });
  }, [isTran]);
  const renderCashInOut = ({item})=>{
  return (
    <TouchableOpacity onPress={()=>viewReceipt(item)} style={Styles.cashInItemCon}>
      <LottieView
        style={Styles.img}
        autoPlay
        source={require("../../assets/deposit.json")}
      />

      <View style={Styles.itemCashInOut}>
        <Text style={Styles.hisH}>{item.name}</Text>
        <Text style={Styles.hisDate}>{item.phone}</Text>
      </View>
      <Text style={Styles.hisAmount}>
        {item.type === "withdrawl" ? " - " : " + "}
        {item.amount}
      </Text>
    </TouchableOpacity>
  );
  };

  const renderTransactions = ({ item }) => {
    let time = convertMsToTime(item.time);
    return (
      <TouchableOpacity
        onPress={() => viewDetailFnc(item)}
        style={Styles.hisItemCon}
      >
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
            {item.date}
            {"  - " + time}
          </Text>
        </View>
        <Text style={Styles.hisAmount}>
          {item.fromName === name || item.fromPhone === phone ? " - " : " + "}
          {item.amount}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Styles.Container}>
      {/* <View style={Styles.hisTopHeaderCon}>
          <TouchableOpacity
            style={Styles.hisCashInOutBtn}
            onPress={() => navigation.navigate("cashinout")}
          >
            <Text style={Styles.btnTxt3}> Cash in/out</Text>
          </TouchableOpacity>
        </View> */}
      <View style={Styles.hisTopCon}>
        <TouchableOpacity style={[Styles.hisTopBtn]} onPress={transferFnc}>
          <Text style={[Styles.TranHisH, { color: isTran ? app_1 : text_1 }]}>
            Transactions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.hisTopBtn]} onPress={receiveFnc}>
          <Text style={[Styles.TranHisH, { color: isTran ? text_1 : app_1 }]}>
            Cash in/out
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.line}></View>
      {isTran ? (
        <View style={Styles.TranHisCon}>
          {transactions && (
            <FlatList
              keyExtractor={(item) => item._id}
              renderItem={renderTransactions}
              data={transactions}
              extraData={transactions}
              bounces={false}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      ) : (
        <View style={Styles.RecHisCon}>
          {topUp && (
            <FlatList
              keyExtractor={(item) => item._id}
              renderItem={renderCashInOut}
              extraData={topUp}
              data={topUp}
              bounces={false}
            />
          )}
        </View>
      )}
    </View>
  );
}
export default TransferHis;