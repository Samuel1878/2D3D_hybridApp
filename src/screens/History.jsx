import { FlatList, View,Text, RefreshControl, TouchableOpacity } from "react-native";
import stylesCon from "../libs/style";
import { useCallback, useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import SocketContext from "../services/socket/socketContext";
import { TWODHISTORY } from "../libs/actions";
import AuthContext from "../services/auth/authContext";
import LocalContext from "../services/localization/localContext";
import { Picker } from "@react-native-picker/picker";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";

const History = () => {
  const styles = stylesCon();
  const {t} = useTranslation();
  const colors = themeProvider().colors;
  const [loading,setLoading] = useState(true);
  const {userToken} = useContext(AuthContext);
  const {history_2D,setHistory_2D,navigation} = useContext(GlobalContext);
  const {setVouchers} = useContext(LocalContext);
  const {socket} = useContext(SocketContext);
  const [refreshing,setRefreshing] = useState(false);
  const [page,setPage] = useState("1")

    
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
      })
  },[refreshing])
   const Item = ({item})=>{
    let time = item?.section==="af"?"PM":"AM";
    const pressFnc = () => {
      setVouchers(item);
      navigation.navigate("vouchers");

      
    };
    return (
      <TouchableOpacity style={styles.hisItem} onPress={pressFnc}>
        <Text style={styles.hisTxt}>{item?.number}</Text>
        <Text style={styles.hisTxt}>{item?.date+"/"+item?.month+"/"+item?.year}{" : "+time}</Text>

        <Text style={styles.hisTxt}>{item?.amount}</Text>
        <Text>{item.finished?t("expired"):t("new")}</Text>
      </TouchableOpacity>
    );
   }

  return (
    <View style={styles.History2D}>
      <View style={styles.pickerCon}>
        <Picker
          selectedValue={page}
          style={styles.picker}
          dropdownIconColor={colors.app_1}
          itemStyle={styles._2d_filterItem}
          onValueChange={(itemValue, itemIndex) => setPage(itemValue)}
        >
          <Picker.Item label="30 Day" value="30" />
          <Picker.Item label="3 Month" value="90" />
          <Picker.Item label="1 Year" value="365" />
        </Picker>
      </View>
      <FlatList
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
      />
    </View>
  );
};
export default History;
