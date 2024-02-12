import { View,Text, TouchableOpacity } from "react-native"
import stylesCon from "../libs/style"
import TwoDmini, { InternetData } from "./2Dmini"
import HorizonalLine, { ThreeDmini } from "./services"
import ImageSlider from "./imageSlider";
import { useTranslation } from "react-i18next"; 


const HomeItems = ({item})=>{
    const styles = stylesCon();
    const {t, i18n} = useTranslation();
    switch (item.title) {
        case "TwoDmini":
        return<ImageSlider/>;
        case "line":
            return <TwoDmini />;
        case "internet":
            return <HorizonalLine />;
        case "imageSlider":
            return <InternetData/>
        default:
        return (
          <View style={{ height: 600, alignItems:"center" }}>
            <Text style={styles.threeDTxt}>{t("latest 3D result")}</Text>
            <ThreeDmini />
            <View style={styles.homeBottom}>
              <TouchableOpacity style={styles.homeBtns}>
                <Text style={styles.btnTxt}>{t("winner")}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.homeBtns}>
                <Text style={styles.btnTxt}>{t("analysis")}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.homeBottom}>
              <TouchableOpacity style={styles.homeBtns}>
                <Text style={styles.btnTxt}>{t("winner")}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.homeBtns}>
                <Text style={styles.btnTxt}>{t("analysis")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }

}
export default HomeItems