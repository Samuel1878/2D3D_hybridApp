import { FlatList, View,Text, RefreshControl } from "react-native";
import styles, { app_1 } from "../libs/style";
import { useCallback, useContext, useState } from "react";
import GlobalContext from "../services/global/globalContext";

const History = () => {
   const{history}  = useContext(GlobalContext);
   const [refreshing,setRefreshing] = useState(false)
   console.log(history)
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
   const Item = ({item})=>{
   let betDate =  item?.date
   let time 
   let date = betDate?.slice(2,4);
   let month = betDate?.slice(4,5)
   let year = betDate?.slice(5)
    if(betDate?.slice(0,2)=== "ev"){
        time = "4:30 PM";
    }else if (betDate?.slice(0, 2) === "af"){
        time = "12:00 PM"
    } 
    
    betDate = date + "/" + month + "/" + year + " " + time
    return (
      <View style={styles.hisItem}>
        <Text style={styles.hisTxt}>{item?.number}</Text>
        <Text style={styles.hisTxt}>{time + ":" + item?.date}</Text>

        <Text style={styles.hisTxt}>{item?.amount}</Text>
      </View>
    );
   }

  return (
    <View style={styles.History2D}>
      <FlatList
        data={history}
        keyExtractor={(item) => Math.random()}
        renderItem={({ item }) => <Item item={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.HistContainer}
        extraData={history}
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
