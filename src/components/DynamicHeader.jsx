import { Animated, Switch,Appearance } from "react-native"
import { Text, View } from "react-native"
import { useContext, useEffect } from "react";
import DataContext from "../services/data/dataContext";
import { useTranslation } from "react-i18next"; 
import { useTheme } from "@react-navigation/native";
import LocalContext from "../services/localization/localContext";
import { useTheme } from "@react-navigation/native";

const Header_Max_Height = 250;
const Header_Min_Height = 170;
const DynamicHeader = ({navigation, animHeaderValue}) => {
    const {live2D} = useContext(DataContext);
    const {lang,setLang,mode,setMode} = useContext(LocalContext);
    const colors = useTheme().colors;
    const {t,i18n} = useTranslation();

    
     const animateHeaderBackgroundColor = animHeaderValue.interpolate({
       inputRange: [0, Header_Max_Height - Header_Min_Height],
       outputRange: [colors.bg_1, colors.app_1],
       extrapolate: "clamp",
     });
     const animateHeaderHeight = animHeaderValue.interpolate({
       inputRange: [0, Header_Max_Height - Header_Min_Height],
       outputRange: [Header_Max_Height, Header_Min_Height],
       extrapolate: "clamp",
     });
     const toggleMode = () => setMode((prev) => prev==="dark"?"light":"dark");
     useEffect(()=>{
      Appearance.setColorScheme(mode)
     },[mode])

    return (
      <Animated.View
        style={[
          styles.homeBoardCon,
          {
            height: animateHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor,
          },
        ]}
      >
        <View style={styles.userBoard}>
          <View style={styles.dataLeftCon}>
            <Text style={styles.liveNo}>{live2D?.liveResult || "35"}</Text>
            <Text style={styles.liveDate}>
              {live2D?.currentDate || "19/2/2023"}
            </Text>
            <Text style={styles.liveDate}>
              {live2D?.currentTime || "18:00 AM"}
            </Text>
          </View>
          <View style={styles.dataMidCon}></View>
          <View style={styles.dataRightCon}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={mode=="dark" ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleMode}
              value={mode}
            />
          </View>
        </View>
      </Animated.View>
    );
}
export default DynamicHeader