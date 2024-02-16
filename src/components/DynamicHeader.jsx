import { Animated, Switch,TouchableOpacity} from "react-native"
import { Text, View } from "react-native"
import { useContext } from "react";
import DataContext from "../services/data/dataContext";
import { useTranslation } from "react-i18next"; 
import LocalContext from "../services/localization/localContext";
import themeProvider from "../libs/theme";
import stylesCon from "../libs/style";
import { AntDesign } from "@expo/vector-icons";
import AnimatedLottieView from "lottie-react-native";

const Header_Max_Height = 250;
const Header_Min_Height = 170;

const DynamicHeader = ({navigation, animHeaderValue}) => {
    const {live2D} = useContext(DataContext);
    const {lang,setLang,theme,toggleTheme,useSystemTheme} = useContext(LocalContext);
    const colors = themeProvider().colors;
    const styles = stylesCon();
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
     const toggleMode = () => {
        const newTheme = theme === "dark" ? "light" : "dark" ;
        toggleTheme(newTheme);
     };
     const changeLanguage = () => {
        navigation.navigate("language");
     };
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
            <AnimatedLottieView
              autoPlay
              style={styles.txtLive}
              source={require("../../assets/live.json")}
            />
          </View>
          <View style={styles.dataMidCon}>
            <Text style={styles.liveNo}>{live2D?.live?.twod }</Text>
            <Text style={styles.liveDate}>
              {live2D?.live?.date || "no data"}
            </Text>
            <Text style={styles.liveDate}>
              {live2D?.live?.time || "check internet"}
            </Text>
          </View>
          <View style={styles.dataRightCon}>
            <Switch
              trackColor={{ false: "#767577", true: "#a8c9f0" }}
              thumbColor={theme === "dark" ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleMode}
              value={theme === "dark" ? false : true}
              style={{ margin: 5 }}
            />
            <TouchableOpacity style={styles.langBtn} onPress={changeLanguage}>
              <Text style={[styles.meTxt, { textTransform: "uppercase" }]}>
                {lang || "en"}
              </Text>
              <AnimatedLottieView
                autoPlay
                style={styles.langLot}
                source={require("../../assets/rightArrow.json")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
}
export default DynamicHeader