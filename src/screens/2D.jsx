import { View ,Text, FlatList, SafeAreaView, VirtualizedList, TouchableOpacity} from "react-native";
import styles, { app_1, text_1 } from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import {BlurView} from "expo-blur";
import LogReg from "../layouts/logReg";
import { useContext, useEffect,useState,useRef } from "react";
import GlobalContext from "../services/global/globalContext";
import ServiceBtn from "../components/ServiceBtn";
import Loader from "../components/loader";
import { Picker } from "@react-native-picker/picker";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";

const TwoD = ({navigation}) => {
    const {loggedIn} = useContext(GlobalContext);
    const [dataRequest, setDataRequest] = useState(7);
    const [blob, setBlob] = useState([]);
    const animation = useRef(null);
        const animation2 = useRef(null);
    const pickerRef = useRef();
        const animation1 = useRef(null);
    const [bet2D, setBet2D] = useState(false)
    const [selected, setSelected] = useState("7")

    function open() {
      pickerRef.current.focus();
    }

    function close() {
      pickerRef.current.blur();
    }

    useEffect(() => {
      animation.current?.play();
     bet2D ? animation2.current?.play() : animation1.current?.play();
    }, [bet2D]);
    useEffect(()=>{
        console.log(selected);
        setDataRequest(parseInt(selected))
       
    },[selected])
   
    const getItem = (_data, index) => ({
      id: index+1,
      data: blob[index],
    });

    const getItemCount = (_data) => parseInt(selected);

    const Item = ({ item }) => (
      <View style={styles._2d_itemCon}>
        <View style={styles._2d_itemTop}>
          <Text style={styles._2d_Header}>September 7, 2023 (Thursday)</Text>
        </View>
        <View style={styles._2d_itemBottom}>
          <Text style={styles._2d_H}>12:01 PM</Text>
          <View style={styles._2d_line}></View>
          <View style={styles._2d_bt_af}>
            <View style={styles._2d_Set}>
              <Text style={styles._2d_h}>set</Text>
              <Text style={styles._2d_d}>1,2244,2</Text>
            </View>
            <View style={styles._2d_Value}>
              <Text style={styles._2d_h}>value</Text>
              <Text style={styles._2d_d}>21,298.3</Text>
            </View>
            <View style={styles._2d_Result}>
              <Text style={styles._2d_h}>2D</Text>
              <Text style={styles._2d_d}>12</Text>
            </View>
          </View>
          <Text style={styles._2d_H}>4:30 PM</Text>
          <View style={styles._2d_line}></View>
          <View style={styles._2d_bt_ev}>
            <View style={styles._2d_Set}>
              <Text style={styles._2d_h}>set</Text>
              <Text style={styles._2d_d}>1,2244,2</Text>
            </View>
            <View style={styles._2d_Value}>
              <Text style={styles._2d_h}>value</Text>
              <Text style={styles._2d_d}>21,298.3</Text>
            </View>
            <View style={styles._2d_Result}>
              <Text style={styles._2d_h}>2D</Text>
              <Text style={styles._2d_d}>12</Text>
            </View>
          </View>
          <View style={styles._2d_interCon}>
            <Text style={styles._2d_interH}>9:30 AM</Text>
            <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>modern</Text>
              <Text style={styles._2d_interD}>51</Text>
            </View>
            <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>Internet</Text>
              <Text style={styles._2d_interD}>32</Text>
            </View>
            <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>TW</Text>
              <Text style={styles._2d_interD}>02</Text>
            </View>
          </View>
          <View style={styles._2d_interCon2}>
            <Text style={styles._2d_interH}>2:00 PM</Text>
            <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>modern</Text>
              <Text style={styles._2d_interD}>51</Text>
            </View>
            <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>Internet</Text>
              <Text style={styles._2d_interD}>32</Text>
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
            <Text style={styles._2d_liveNo}>63</Text>
            <Text style={styles._2d_live}>
              Updated: 05 Sep, 2023 (Tue) 16:30:01{" "}
            </Text>
            <TouchableOpacity 
                onPress={()=>bet2D?setBet2D(false):setBet2D(true)}
                style={styles.betBtnCon}>
              {bet2D ? (
                <LottieView
                  autoPlay
                  ref={animation2}
                  style={styles.betnow}
                  source={require("../../assets/betnow.json")}
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
                <Picker.Item label="Weekly" value="7" />
                <Picker.Item label="Monthly" value="30" />
                <Picker.Item label="Biannual" value="180" />
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
              initialNumToRender={dataRequest}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item.id}
              getItemCount={getItemCount}
              getItem={getItem}
              refreshing={true}
            />
          </SafeAreaView>
        </View>

        {loggedIn ? <ServiceBtn /> : <LogReg navigation={navigation} />}
      </View>
    );
};
export default TwoD;