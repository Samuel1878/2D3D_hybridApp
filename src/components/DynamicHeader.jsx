import { Animated } from "react-native"
import { Text, View } from "react-native"
import styles, { app_1, app_3, app_4, bg_1, bg_2 } from "../libs/style";
import { useContext, useEffect } from "react";
import DataContext from "../services/data/dataContext";
import { useTranslation } from "react-i18next"; 
import LocalContext from "../services/localization/localContext";
const Header_Max_Height = 250;
const Header_Min_Height = 170;
const DynamicHeader = ({navigation, animHeaderValue}) => {
    const {live2D} = useContext(DataContext);
    const {lang,setLang,mode,setMode} = useContext(LocalContext);
    const {t,i18n} = useTranslation();
     const animateHeaderBackgroundColor = animHeaderValue.interpolate({
       inputRange: [0, Header_Max_Height - Header_Min_Height],
       outputRange: [bg_1, app_1],
       extrapolate: "clamp",
     });
     const animateHeaderHeight = animHeaderValue.interpolate({
       inputRange: [0, Header_Max_Height - Header_Min_Height],
       outputRange: [Header_Max_Height, Header_Min_Height],
       extrapolate: "clamp",
     });
     useEffect(()=>{
        console.debug(live2D)
     },[live2D])

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
          <Text style={styles.liveNo}>{live2D?.liveResult}</Text>
          <Text style={styles.liveDate}>{t("updated")}{live2D?.currentDate+ " " +live2D?.currentTime}</Text>
         
        </View>
      </Animated.View>
    );
}
export default DynamicHeader