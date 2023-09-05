import { View,Text } from "react-native"
import styles, { app_4 } from "../libs/style"
import TwoDmini, { InternetData } from "./2Dmini"
import HorizonalLine, { ThreeDmini } from "./services"
import ImageSlider from "./imageSlider"


const HomeItems = ({item})=>{
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
          <View style={{ height: 500 }}>
            <Text style={styles.threeDTxt}>Latest 3D result</Text>
            <ThreeDmini />
          </View>
        );
    }

}
export default HomeItems