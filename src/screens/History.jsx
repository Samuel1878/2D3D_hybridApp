import { FlatList, View,Text } from "react-native";
import styles from "../libs/style";
import { useContext } from "react";
import GlobalContext from "../services/global/globalContext";

const History = () => {
   const{history}  = useContext(GlobalContext);
   console.log(history)
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
        <Text style={styles.hisTxt}>{betDate}</Text>

        <Text style={styles.hisTxt}>{item?.amount}</Text>
      </View>
    );
   }

  return (<View style={styles.History2D}>
    <FlatList
        data={history}
        keyExtractor={item=> Math.random()}
        renderItem={({item})=><Item item={item}/>}
        showsVerticalScrollIndicator={false}
        style={styles.HistContainer}
        extraData={history}
        />

  </View>)
};
export default History;
