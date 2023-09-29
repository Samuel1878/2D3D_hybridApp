import { View ,Text, FlatList, SafeAreaView, VirtualizedList, TouchableOpacity} from "react-native";
import styles, { app_1, text_1 } from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import {BlurView} from "expo-blur";
import LogReg from "../layouts/logReg";
import { useContext, useEffect,useState,useRef, useMemo } from "react";
import GlobalContext from "../services/global/globalContext";
import ServiceBtn from "../components/ServiceBtn";
import Loader from "../components/loader";
import { Picker } from "@react-native-picker/picker";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import AuthContext from "../services/auth/authContext";
import DataContext from "../services/data/dataContext";

const TwoD = ({navigation}) => {
    const {history2D,live2D,limit,setLimit,setPage,page} = useContext(DataContext)
    const {userToken} = useContext(AuthContext);
    const animation = useRef(null);
        const animation2 = useRef(null);
    const pickerRef = useRef();
        const animation1 = useRef(null);
    const [bet2D, setBet2D] = useState(false)
    const [selected, setSelected] = useState("5");
    useEffect(() => {
      animation.current?.play();
     bet2D ? animation2.current?.play() : animation1.current?.play();
    }, [bet2D]);
    useEffect(()=>{
        console.log(selected);
        setLimit(parseInt(selected));
        switch (selected) {
            case "10":
                setPage(2)
                break;
            case "15":
                setPage(3)
                breack;
            case "20":
                setPage(4)
                break;
            default:
                break;
        }
       
    },[selected])

   
    const getItem = (_data, index) => ({
      id: index+1,
      data: history2D[index],
    });

    const getItemCount = (_data) => parseInt(selected);

    const Item = ({ item }) => (
      <View style={styles._2d_itemCon}>
        <View style={styles._2d_itemTop}>
          <Text style={styles._2d_Header}>{item?.current_date}</Text>
        </View>
        <View style={styles._2d_itemBottom}>
          <Text style={styles._2d_H}>12:00 PM</Text>
          <View style={styles._2d_line}></View>
          <View style={styles._2d_bt_af}>
            <View style={styles._2d_Set}>
              <Text style={styles._2d_h}>set</Text>
              <Text style={styles._2d_d}>{item?.set_1200}</Text>
            </View>
            <View style={styles._2d_Value}>
              <Text style={styles._2d_h}>value</Text>
              <Text style={styles._2d_d}>{item?.value_1200}</Text>
            </View>
            <View style={styles._2d_Result}>
              <Text style={styles._2d_h}>2D</Text>
              <Text style={styles._2d_d}>{item?.result_1200}</Text>
            </View>
          </View>
          <Text style={styles._2d_H}>4:30 PM</Text>
          <View style={styles._2d_line}></View>
          <View style={styles._2d_bt_ev}>
            <View style={styles._2d_Set}>
              <Text style={styles._2d_h}>set</Text>
              <Text style={styles._2d_d}>{item?.set_430}</Text>
            </View>
            <View style={styles._2d_Value}>
              <Text style={styles._2d_h}>value</Text>
              <Text style={styles._2d_d}>{item?.value_430}</Text>
            </View>
            <View style={styles._2d_Result}>
              <Text style={styles._2d_h}>2D</Text>
              <Text style={styles._2d_d}>{item?.result_430}</Text>
            </View>
          </View>
          <View style={styles._2d_interCon}>
            <Text style={styles._2d_interH}>9:30 AM</Text>
            <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>modern</Text>
              <Text style={styles._2d_interD}>{item?.modern_930}</Text>
            </View>
            <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>Internet</Text>
              <Text style={styles._2d_interD}>{item?.internet_930}</Text>
            </View>
            {/* <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>TW</Text>
              <Text style={styles._2d_interD}>02</Text>
            </View> */}
          </View>
          <View style={styles._2d_interCon2}>
            <Text style={styles._2d_interH}>2:00 PM</Text>
            <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>modern</Text>
              <Text style={styles._2d_interD}>{item?.modern_200}</Text>
            </View>
            <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>Internet</Text>
              <Text style={styles._2d_interD}>{item?.internet_200}</Text>
            </View>
          </View>
        </View>
      </View>
    );
    return (
      <View style={styles.Container}>
        <View style={styles.top2DCon}>
          <View style={styles._2dBtnCon}>
            <TouchableOpacity
              onPress={() => navigation.navigate("history")}
              style={styles._2dBtn}
            >
              <Text style={styles._2dBtnTxt}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("winners")}
              style={styles._2dBtn}
            >
              <Text style={styles._2dBtnTxt}>Winner</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("2dAnalysis")}
              style={styles._2dBtn}
            >
              <Text style={styles._2dBtnTxt}>Analysis</Text>
            </TouchableOpacity>
          </View>
          <View style={styles._2d_liveCon}>
            <Text style={styles._2d_liveNo}>{live2D?.liveResult}</Text>
            <Text style={styles._2d_live}>
              Updated: {live2D?.currentDate+ " "+ live2D?.currentTime}
            </Text>
            <TouchableOpacity
              onPress={() => (bet2D ? setBet2D(false) : setBet2D(true))}
              style={styles.betBtnCon}
            >
              {bet2D ? (
                <LottieView
                  speed={0.7}
                  autoPlay
                  ref={animation2}
                  style={styles.betnow}
                  source={require("../../assets/openG.json")}
                />
              ) : (
                <LottieView
                  autoPlay
                  ref={animation1}
                  style={styles.close}
                  source={require("../../assets/close.json")}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("calender")}
              style={styles.calenderCon}
            >
              <LottieView
                autoPlay
                ref={animation}
                style={styles.calender}
                source={require("../../assets/calender1.json")}
              />
            </TouchableOpacity>
            <View style={styles._2d_filterCon}>
              <Picker
                mode="dropdown"
                style={styles._2d_filter}
                ref={pickerRef}
                selectedValue={selected}
                dropdownIconColor={app_1}
                itemStyle={styles._2d_filterItem}
                onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
              >
                <Picker.Item label="Weekly" value="5" />
                <Picker.Item label="Monthly" value="20" />
                <Picker.Item label="Biannual" value="120" />
              </Picker>
              <AntDesign
                name="caretright"
                size={22}
                color={app_1}
                style={styles.filter}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottom2DCon}>
          <SafeAreaView style={styles._2d_dataCon}>
            <VirtualizedList
              initialNumToRender={parseInt(selected)}
              renderItem={({ item }) => <Item item={item.data} />}
              keyExtractor={(item) => item.id}
              getItemCount={getItemCount}
              getItem={getItem}
              refreshing={true}
              extraData={[limit,history2D]}
            />
          </SafeAreaView>
        </View>

        {userToken ? <ServiceBtn /> : <LogReg navigation={navigation} />}
        <SafeAreaView>
          {bet2D ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("2dBet")}
              style={styles.bet2DBtn}
            >
              <Text style={styles.bet2DBtnTxt}>Bet Now</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </SafeAreaView>
      </View>
    );
};
export default TwoD;