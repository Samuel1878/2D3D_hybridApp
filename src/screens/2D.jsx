import { View ,Text, SafeAreaView, VirtualizedList, TouchableOpacity, ImageBackground} from "react-native";
import stylesCon from "../libs/style";
import LogReg from "../layouts/logReg";
import { useContext, useEffect,useState,useRef } from "react";
import ServiceBtn from "../components/ServiceBtn";
import { Picker } from "@react-native-picker/picker";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import AuthContext from "../services/auth/authContext";
import DataContext from "../services/data/dataContext";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";
import AnimatedLottieView from "lottie-react-native";


const TwoD = ({navigation}) => {
    const colors = themeProvider().colors;
    const styles = stylesCon();
    const {t} = useTranslation();
    const {history2D,limit,setLimit,setPage,page,results2D} = useContext(DataContext)
    const {userToken} = useContext(AuthContext);
    const animation = useRef(null);
    const animation2 = useRef(null);
    const pickerRef = useRef();
    const animation1 = useRef(null);
    const [bet2D, setBet2D] = useState(false)
    useEffect(() => {
      animation.current?.play();
     bet2D ? animation2.current?.play() : animation1.current?.play();
    }, [bet2D]);
    const getItem = (_data, index) => ({
      id: index+1,
      data: results2D[index],
    });

   const getItemCount = (_data) => 29


    const Item = ({ item }) => {
  
      return item &&(
        <View style={styles._2d_itemCon}>
          <View style={styles._2d_itemTop}>
            <Text style={styles._2d_Header}>{item?.date}</Text>
          </View>
          <View style={styles._2d_itemBottom}>
            <Text style={styles._2d_H}>
              {item.child[1].time.slice(0, -3) + " PM"}
            </Text>
            <View style={styles._2d_line}></View>
            <View style={styles._2d_bt_af}>
              <View style={styles._2d_Set}>
                <Text style={styles._2d_h}>{t("set")}</Text>
                <Text style={styles._2d_d}>{item.child[1].set}</Text>
              </View>
              <View style={styles._2d_Value}>
                <Text style={styles._2d_h}>{t("value")}</Text>
                <Text style={styles._2d_d}>{item.child[1].value}</Text>
              </View>
              <View style={styles._2d_Result}>
                <Text style={styles._2d_h}>{t("2D")}</Text>
                <Text style={styles._2d_d}>{item.child[1].twod}</Text>
              </View>
            </View>
            <Text style={styles._2d_H}>
              {item.child[3].time.slice(0, -3) + " PM"}
            </Text>
            <View style={styles._2d_line}></View>
            <View style={styles._2d_bt_ev}>
              <View style={styles._2d_Set}>
                <Text style={styles._2d_h}>{t("set")}</Text>
                <Text style={styles._2d_d}>{item.child[3].set}</Text>
              </View>
              <View style={styles._2d_Value}>
                <Text style={styles._2d_h}>{t("value")}</Text>
                <Text style={styles._2d_d}>{item.child[3].value}</Text>
              </View>
              <View style={styles._2d_Result}>
                <Text style={styles._2d_h}>{t("2D")}</Text>
                <Text style={styles._2d_d}>{item.child[3].twod}</Text>
              </View>
            </View>
            <View style={styles._2d_interCon}>
              <Text style={styles._2d_interH}>
                {item.child[0].time.slice(0, -3) + " AM"}
              </Text>
              <View style={styles._2d_interBox}>
                <Text style={styles._2d_interh}>{t("set")}</Text>
                <Text style={styles._2d_interD}>{item.child[0].set}</Text>
              </View>
              <View style={styles._2d_interBox}>
                <Text style={styles._2d_interh}>{t("value")}</Text>
                <Text style={styles._2d_interD}>{item.child[0].value}</Text>
              </View>
              {/* <View style={styles._2d_interBox}>
              <Text style={styles._2d_interh}>TW</Text>
              <Text style={styles._2d_interD}>02</Text>
            </View> */}
            </View>
            <View style={styles._2d_interCon2}>
              <Text style={styles._2d_interH}>
                {item.child[2].time.slice(0, -3) + " PM"}
              </Text>
              <View style={styles._2d_interBox}>
                <Text style={styles._2d_interh}>{t("set")}</Text>
                <Text style={styles._2d_interD}>{item.child[2].set}</Text>
              </View>
              <View style={styles._2d_interBox}>
                <Text style={styles._2d_interh}>{t("value")}</Text>
                <Text style={styles._2d_interD}>{item.child[2].value}</Text>
              </View>
            </View>
          </View>
        </View>
      );};
    return (
      <View style={styles.Container}>
        <View style={styles.top2DCon}>
          <View style={styles._2dTopCon}>
            <View style={styles._2dTopAbCon}>
              <View style={styles.morningCon}>
                <ImageBackground
                  resizeMode="cover"
                  style={styles.bg}
                  source={require("../../assets/mn.jpg")}
                >
                  <Text style={styles._2dBtnTxt}>12:00 PM</Text>
                  <Text style={styles._2d_liveNo}>
                    {(results2D && results2D[0].child[1].twod) || "??"}
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.morningCon}>
                <ImageBackground
                  style={styles.bg}
                  source={require("../../assets/ev.jpg")}
                >
                  <Text style={styles._2dBtnTxt}>40:30 PM</Text>
                  <Text style={styles._2d_liveNo}>
                    {(results2D && results2D[0].child[3].twod) || "??"}
                  </Text>
                </ImageBackground>
              </View>
            </View>
          </View>
          <View style={styles._2d_liveCon}>
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
            <TouchableOpacity
              style={styles._2d_WinnerBtnCon}
              onPress={() => navigation.navigate("winners")}
            >
              <AnimatedLottieView
                autoPlay
                style={styles._2d_WinnerBtn}
                source={require("../../assets/winnerCup.json")}
              />
            </TouchableOpacity>
            {/* <View style={styles._2d_filterCon}>
              <Picker
                mode="dropdown"
                style={styles._2d_filter}
                ref={pickerRef}
                selectedValue={selected}
                dropdownIconColor={colors.app_1}
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
                color={colors.app_1}
                style={styles.filter}
              />
            </View> */}
          </View>
        </View>
        <View style={styles.bottom2DCon}>
          <SafeAreaView style={styles._2d_dataCon}>
            {results2D && (
              <VirtualizedList
                // initialNumToRender={parseInt(selected)}
                renderItem={({ item }) => <Item item={item.data} />}
                keyExtractor={(item) => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
                refreshing={true}
                extraData={results2D}
              />
            )}
          </SafeAreaView>
        </View>

        {userToken ? <ServiceBtn /> : <LogReg navigation={navigation} />}
        <SafeAreaView>
          {bet2D ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("2dBet")}
              style={styles.bet2DBtn}
            >
              <Text style={styles.bet2DBtnTxt}>{t("bet now")}</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </SafeAreaView>
      </View>
    );
};
export default TwoD;