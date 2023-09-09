import { FlatList,SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles, { bg_3, bg_3c } from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import {BlurView} from "expo-blur";
import LogReg from "../layouts/logReg";
import { useContext } from "react";
import GlobalContext from "../services/global/globalContext";
import ServiceBtn from "../components/ServiceBtn";
import { Ionicons } from "@expo/vector-icons";
const data = [
    {id:1,result:215,date:21/23/12},
    {id:2,result:253,date:21/23/12},
    {id:3,result:351,date:21/23/12},
    {id:4,result:255,date:21/23/12},
    {id:5,result:235,date:21/23/112}
];
const Item = ({item})=>{
    return(<View style={styles.threeDItem}>

    </View>)
}

const ThreeD = ({navigation}) => {
    const {loggedIn} = useContext(GlobalContext);
    return (
      <View style={styles.threeDCon}>
        {loggedIn ? <ServiceBtn /> : <LogReg navigation={navigation} />}
        <View style={styles.threeDCon}>
          <View style={styles.threeDTopCon}>
            <View style={styles.serverTimeCon}>
              <Text style={styles.serverTime}>
                <Ionicons name="ios-time" size={24} color={bg_3} />12:89 PM
              </Text>
            </View>
            <View style={styles.threeDBtnBox}>
              <TouchableOpacity style={styles.HistoryBtn}>
                <Text style={styles.btnTxt}>History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.WinnerBtn}>
                <Text style={styles.btnTxt}>Winners</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.AnalysisBtn}>
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
        </View>
      </View>
    );
};
export default ThreeD;