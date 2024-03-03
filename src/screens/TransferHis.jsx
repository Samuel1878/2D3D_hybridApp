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
import Loader from "../components/loader";
import { XDLoader } from "../components/modals";

const TransferHis = ()=> {
  const Styles = StylesCon();
  const {t} = useTranslation();
  const colors = themeProvider().colors;
  const [transactions, setTransactions] = useState([]);
  const { navigation,name,phone } = useContext(GlobalContext);
  const { socket } = useContext(SocketContext);
  const { setDetail } = useContext(LocalContext);
  const { userToken } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(10);
  const [tPage, setTpage] = useState(0);
  const [end, setEnd] = useState(false);

  const viewDetailFnc = (item) => {
    setRefresh(true)
    setDetail(item);
    setTimeout(()=>{
      setRefresh(false);
      navigation.navigate("detail");
    },500)
  };
  const fetchFnc = () => {
    setRefresh(true);
 socket && socket.emit(TRANSACTION, {userToken:userToken,page:page});
    socket.off(TRANSACTION).on(TRANSACTION, async({length,data}) => {
      setTransactions(data);
      setTpage(length);
      setRefresh(false);

    });
  };
  const reFetchPage = () => {
    if(!end){if (page > tPage && tPage > 0){
      setPage(tPage);
      return
    } else if(page<= tPage && tPage>0){
      setPage((prev)=>prev+=10);
    }}
  };
  useEffect(()=>{
    if(tPage> 0 && page>=tPage){
      setEnd(true);
      return
    }
  },[page,tPage])
  useEffect(() => {
      // refresh && end || fetchFnc();
      !end && fetchFnc()
  }, [page]);
  useEffect(()=>{
    fetchFnc();
  },[]);
  const emptyListFnc = () => {
    return (
      <View style={Styles.emptyListCon}>
        <Text style={Styles.Txt1}>No data found</Text>
      </View>
    );
  };
  const renderTransactions = ({ item }) => {
    if(item.number && item.owner) {
      return (
        <TouchableOpacity
          onPress={() => viewDetailFnc(item)}
          style={Styles.hisItemCon}
        >
          <View style={Styles.transactionItem}>
            <LottieView
              style={Styles.hisItemImg}
              autoPlay
              source={require("../../assets/cashIn.json")}
              loop
            />
            <View style={Styles.hisItem}>
              <Text style={Styles.hisH}>
                {t("bought number ") + item.number}
              </Text>
              <Text style={Styles.hisDate}>
                {item.date + " /" + item.month + " /" + item.year}
              </Text>
              <Text style={Styles.hisDate}>
                {item.section === "ev"
                  ? t("evening section")
                  : t("morning section")}
              </Text>
            </View>
          </View>
          <Text style={Styles.hisAmount}>{"- " + item.amount}</Text>
        </TouchableOpacity>
      );
    } else if (item.from && item.to){
      return (
        <TouchableOpacity
          onPress={() => viewDetailFnc(item)}
          style={Styles.hisItemCon}
        >
          <View style={Styles.transactionItem}>
            {item.fromName === name || item.fromPhone === phone ? (
              <LottieView
                style={Styles.hisItemImg}
                autoPlay
                source={require("../../assets/transfer.json")}
                loop
              />
            ) : (
              <LottieView
                style={Styles.hisItemImg}
                autoPlay
                source={require("../../assets/transfered.json")}
                loop
              />
            )}
            <View style={Styles.hisItem}>
              <Text style={Styles.hisH}>
                {item.fromName === name || item.fromPhone === phone
                  ? t("transfer to") + " " + item.toPhone
                  : t("received from") + " " + item.toPhone}
              </Text>
              <Text style={Styles.hisDate}>
                {item.date + " /" + item.month + " /" + item.year} { " " +item.time}
              </Text>
            </View>
          </View>

          <Text style={Styles.hisAmount}>
            {item.fromName === name || item.fromPhone === phone ? " - " : " + "}
            {item.amount}
          </Text>
        </TouchableOpacity>
      );

    }else if(item.earn || item.capital){
       return (
         <TouchableOpacity
           onPress={() => viewDetailFnc(item)}
           style={Styles.hisItemCon}
         >
           <View style={Styles.transactionItem}>
             <LottieView
               style={Styles.hisItemImg}
               autoPlay
               source={require("../../assets/winners.json")}
               loop
             />
             <View style={Styles.hisItem}>
               <Text style={Styles.hisH}>{t("number ") + item.luckyNo}</Text>
               {/* <Text style={Styles.hisDate}>
               {item.dayId}
             </Text> */}
               <Text style={Styles.hisDate}>{item.capital}</Text>
             </View>
             <Text style={Styles.times}>{item.times + "X"}</Text>
           </View>
           <Text style={Styles.hisAmount}>{"+ " + item.earn}</Text>
         </TouchableOpacity>
       );
    } else if(item.type && item.completed){
      return (
        <TouchableOpacity
          onPress={() => viewDetailFnc(item)}
          style={Styles.hisItemCon}
        >
          <View style={Styles.transactionItem}>
            <LottieView
              style={Styles.hisItemImg}
              autoPlay
              source={require("../../assets/moneySecurity.json")}
              loop
            />
            <View style={Styles.hisItem}>
              <Text style={Styles.hisH}>{item.type==="deposit"?"Deposit via ":"Withdraw via " + item.method + " method."}</Text>
              <Text style={Styles.hisDate}>
               {item.name}
             </Text>
              <Text style={Styles.hisDate}>{item.phone}</Text>
            </View>
          </View>
          <Text style={Styles.hisAmount}>{item.type==="deposit"?" + ":" - " }{item.amount}</Text>
        </TouchableOpacity>
      );
    }
    
  };
  // if(!transactions || !transactions.length){
  //   return <Loader/>
  // }
  return (
    <View style={Styles.Container}>
      <XDLoader setModal={setRefresh} modal={refresh}/>
      <View style={Styles.line}></View>
      <View style={Styles.TranHisCon}>
        <FlatList
          keyExtractor={(item) => item._id + Math.random()}
          renderItem={renderTransactions}
          data={transactions}
          extraData={transactions}
          bounces={true}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={emptyListFnc}
          removeclippedsubviews={true} // unmount components when outside 
          initialnumtorender={11} // reduce initial render amount
          maxtorenderperbatch={10} // reduce number in each render batch
          updatecellsbatchingperiod={100} // increase time between renders
          // windowsize={7} // reduce the window size
          onEndReachedThreshold={0.1}
          onEndReached={reFetchPage}
        />
      </View>
    </View>
  );
}
export default TransferHis;