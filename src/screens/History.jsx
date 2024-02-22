import { FlatList, View,Text, RefreshControl, TouchableOpacity } from "react-native";
import stylesCon from "../libs/style";
import { useCallback, useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import SocketContext from "../services/socket/socketContext";
import { THREEDHISTORY, TWODHISTORY } from "../libs/actions";
import AuthContext from "../services/auth/authContext";
import LocalContext from "../services/localization/localContext";
import { Picker } from "@react-native-picker/picker";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";

const History = () => {
  const styles = stylesCon();
  const {t} = useTranslation();
  const colors = themeProvider().colors;
  const [isTwoD,setIsTwoD] = useState(true);
  const {userToken} = useContext(AuthContext);
  const { history_2D, setHistory_2D, navigation, history_3D ,setHistory_3D} =
    useContext(GlobalContext);
  const {setVouchers} = useContext(LocalContext);
  const {socket} = useContext(SocketContext);
  const [refreshing,setRefreshing] = useState(false);


    
  const onRefresh = useCallback(() => {
    setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
  useEffect(()=>{
      socket && socket.emit(TWODHISTORY,userToken);
     socket.off(TWODHISTORY).on(TWODHISTORY, (data)=>{
        console.log(data);
        setHistory_2D(data);
      });
      socket && socket.emit(THREEDHISTORY,userToken);
      socket.off(THREEDHISTORY).on(THREEDHISTORY, (data)=>{
        setHistory_3D(data);
      });
  },[refreshing])
   const Item = ({item})=>{
    let time = item?.section==="af"?"Evening":"Morning";
    const pressFnc = () => {
      setVouchers(item);
      navigation.navigate("vouchers");

      
    };
    return (
      <TouchableOpacity style={styles.hisItem} onPress={pressFnc}>
        <Text style={styles.meTxt}>{item?.number}</Text>
        <Text style={styles.hisTxt}>
          {item?.date + "/" + item?.month + "/" + item?.year}
          {"   " + time}
        </Text>

        <Text style={styles.hisTxt}>{item?.amount}</Text>
        <Text style={[{color:item.finished?"red":"green"}]}>
          {item.finished ? t("expired") : t("new")}
        </Text>
      </TouchableOpacity>
    );
   }

  return (
    <View style={styles.History2D}>
      <View style={styles.pickerCon}>
        <TouchableOpacity onPress={()=>setIsTwoD(true)}>
          <Text style={[styles.btnTxt, {color:isTwoD?colors.app_1:colors.text_1}]}>2D</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setIsTwoD(false)}>
          <Text style={[styles.btnTxt,{color:isTwoD?colors.text_1:colors.app_1}]}>3D</Text>
        </TouchableOpacity>
      </View>
      {isTwoD?(<FlatList
        data={history_2D}
        keyExtractor={(item) => Math.random()}
        renderItem={({ item }) => <Item item={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.HistContainer}
        extraData={history_2D}
        refreshControl={
          <RefreshControl
            tintColor={colors.app_1}
            colors={colors.app_1}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />):(<FlatList
        data={history_3D}
        keyExtractor={(item) => Math.random()}
        renderItem={({ item }) => <Item item={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.HistContainer}
        extraData={history_3D}
        refreshControl={
          <RefreshControl
            tintColor={colors.app_1}
            colors={colors.app_1}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
          />)}
    </View>
  );
};
export default History;
