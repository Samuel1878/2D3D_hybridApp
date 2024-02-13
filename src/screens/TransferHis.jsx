import { FlatList, Text, TouchableOpacity, View } from "react-native"
import StylesCon from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import LottieView from "lottie-react-native";
import LocalContext from "../services/localization/localContext";
import SocketContext from "../services/socket/socketContext";
import { TOPUP, TRANSACTION } from "../libs/actions";
import AuthContext from "../services/auth/authContext";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";
import { AntDesign } from '@expo/vector-icons';
const TransferHis = ()=> {
  const Styles = StylesCon();
  const {t} = useTranslation();
  const colors = themeProvider().colors;
  const { transactions, setTransactions, topUp, setTopUp, navigation,name,phone } = useContext(GlobalContext);
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
      setTransactions();
      setTransactions(data);
    });
  }, [isTran]);
  useEffect(() => {
    !isTran && socket.emit(TOPUP, userToken);
    socket.off(TOPUP).on(TOPUP, (data) => {
      setTopUp();
      setTopUp(data);
    });
  }, [isTran]);
  const renderCashInOut = ({item})=>{
  return (
    <TouchableOpacity
      onPress={() => viewReceipt(item)}
      style={Styles.cashInItemCon}
    >
      <LottieView
        style={Styles.img}
        autoPlay
        source={require("../../assets/deposit.json")}
      />

      <View style={Styles.itemCashInOut}>
        <Text style={Styles.hisH}>{item.name}</Text>
        <Text style={Styles.hisDate}>{item.phone}</Text>
      </View>
      {item.status === "pending" ? (
        <Text style={Styles.Txt3}>Pending</Text>
      ) : (
        <AntDesign name="checkcircle" size={24} color="green" />
      )}
      <Text style={Styles.hisAmount}>
        {item.type === "withdrawl" ? (
          <AntDesign name="minuscircle" size={24} color="#fe23fe" />
        ) : (
          <AntDesign name="pluscircle" size={24} color="#fe32fe" />
        )}{
          "  "
        }
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
          <Text
            style={[
              Styles.TranHisH,
              { color: isTran ? colors.app_1 : colors.text_1 },
            ]}
          >
            {t("transactions")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.hisTopBtn]} onPress={receiveFnc}>
          <Text
            style={[
              Styles.TranHisH,
              { color: isTran ? colors.text_1 : colors.app_1 },
            ]}
          >
            {t("cash in/out")}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.line}></View>
      {isTran ? (
        <View style={Styles.TranHisCon}>
          {transactions && (
            <FlatList
              keyExtractor={(item) => item._id + Math.random()}
              renderItem={renderTransactions}
              data={transactions}
              extraData={transactions}
              bounces={true}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      ) : (
        <View style={Styles.RecHisCon}>
          {topUp && (
            <FlatList
              keyExtractor={(item) => item._id + Math.random()}
              renderItem={renderCashInOut}
              extraData={topUp}
              data={topUp}
              bounces={true}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      )}
    </View>
  );
}
export default TransferHis;