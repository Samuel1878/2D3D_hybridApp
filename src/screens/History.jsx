import { FlatList, View,Text, RefreshControl } from "react-native";
import styles, { app_1 } from "../libs/style";
import { useCallback, useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import SocketContext from "../services/socket/socketContext";
import { TWODHISTORY } from "../libs/actions";
import AuthContext from "../services/auth/authContext";

const History = () => {
  const [loading,setLoading] = useState(true);
  const {userToken} = useContext(AuthContext);
  const {history_2D,setHistory_2D} = useContext(GlobalContext);
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
        setHistory_2D(data)
      })
  },[refreshing])
   const Item = ({item})=>{
    let time = item?.section==="af"?"PM":"AM"
    return (
      <View style={styles.hisItem}>
        <Text style={styles.hisTxt}>{item?.number}</Text>
        <Text style={styles.hisTxt}>{item?.date+"/"+item?.month+"/"+item?.year}{" : "+time}</Text>

        <Text style={styles.hisTxt}>{item?.amount}</Text>
      </View>
    );
   }

  return (
    <View style={styles.History2D}>
      <FlatList
        data={history_2D}
        keyExtractor={(item) => Math.random()}
        renderItem={({ item }) => <Item item={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.HistContainer}
        extraData={history_2D}
        refreshControl={
          <RefreshControl
            tintColor={app_1}
            colors={app_1}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};
export default History;
