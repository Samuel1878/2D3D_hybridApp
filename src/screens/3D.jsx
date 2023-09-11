import { FlatList,SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles, { bg_1, bg_3, bg_3c } from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import {BlurView} from "expo-blur";
import LogReg from "../layouts/logReg";
import { useContext, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import ServiceBtn from "../components/ServiceBtn";
import { Ionicons } from "@expo/vector-icons";
const data = [
    {id:1,result:215,date:"21/23/12"},
    {id:2,result:923,date:"21/23/12"},
    {id:3,result:131,date:"21/23/12"},
    {id:4,result:757,date:"21/23/12"},
    {id:5,result:435,date:"21/23/112"}
];
const Item = ({item})=>{
    return (
      <View style={styles.threeDItem}>
        <View style={styles.threeDheaderCon}>
          <Text style={styles.dataH}>Date</Text>
          <Text style={styles.dataV}>{item.date}</Text>
        </View>
        <View style={styles.threeDvalueCon}>
          <Text style={styles.dataH}>Result</Text>
          <Text style={styles.dataV}>{item.result}</Text>
        </View>
      </View>
    );
}

const ThreeD = () => {
    const {loggedIn,navigation} = useContext(GlobalContext);
    const [isOpen, setIsOpen] = useState(true)
    
    return (
      <View style={styles.threeDCon}>
        {loggedIn ? <ServiceBtn /> : <LogReg navigation={navigation} />}
        <View style={styles.threeDCon}>
          <View style={styles.threeDTopCon}>
            <View style={styles.serverTimeCon}>
              <Text style={styles.serverTime}>
                <Ionicons name="ios-time" size={24} color={bg_1} />
                {isOpen?"Bet close: 16-09-2023 02:30:00 PM":"Bet closed! will be ready soon"}
              </Text>
            </View>
            <View style={styles.threeDBtnBox}>
              <TouchableOpacity
                onPress={() => navigation?.navigate("history")}
                style={styles.HistoryBtn}
              >
                <Text style={styles.btnTxt}>History</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation?.navigate("winners")}
                style={styles.WinnerBtn}
              >
                <Text style={styles.btnTxt}>Winners</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation?.navigate("3dAnalysis")}
                style={styles.AnalysisBtn}
              >
                <Text style={styles.btnTxt}>Analysis</Text>
              </TouchableOpacity>
            </View>
          </View>

          <SafeAreaView style={styles.threeDdataCon}>
            <FlatList
              data={data}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
          {
            isOpen?(
              <TouchableOpacity style={styles._3d_betBtn} onPress={()=>navigation.navigate("3dBet")}>
                <Text style={styles._3d_betBtnTxt}>Bet now</Text>
              </TouchableOpacity>
            ):(<></>)
          }
        </View>
      </View>
    );
};
export default ThreeD;