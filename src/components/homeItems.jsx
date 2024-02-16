import { View,Text, TouchableOpacity } from "react-native"
import stylesCon from "../libs/style"
import TwoDmini, { InternetData } from "./2Dmini"
import HorizonalLine, { ThreeDmini } from "./services"
import ImageSlider from "./imageSlider";
import { useTranslation } from "react-i18next"; 
import { useContext } from "react";
import GlobalContext from "../services/global/globalContext";


const HomeItems = ({item})=>{
    const styles = stylesCon();
    const {navigation} = useContext(GlobalContext)
    const {t, i18n} = useTranslation();
    switch (item.title) {
        case "TwoDmini":
            return <TwoDmini />;
        
        case "line":
            return <HorizonalLine />;
            
        case "internet":
            return <InternetData />;
        case "imageSlider":
            return <ImageSlider />;
        case "ThreeDmini":
            return <ThreeDmini/>;
        default:
        return (
          <View style={{alignItems: "center" }}>
            {/* <Text style={styles.threeDTxt}>{t("latest 3D result")}</Text> */}
            
            <View style={styles.homeBottom}>
              <TouchableOpacity
                style={styles.homeBtns}
                onPress={() => navigation.navigate("winners")}
              >
                <Text style={styles.btnTxt}>{t("winner")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.homeBtns}
                onPress={() => navigation.navigate("3dAnalysis")}
              >
                <Text style={styles.btnTxt}>{t("2D History")}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.homeBottom}>
              <TouchableOpacity
                style={styles.homeBtns}
                onPress={() => navigation.navigate("calender")}
              >
                <Text style={styles.btnTxt}>{t("calender")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.homeBtns}
                onPress={() => navigation.navigate("2dAnalysis")}
              >
                <Text style={styles.btnTxt}>{ t("Analysis")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }

}
export default HomeItems