import { useState } from "react";
import {SliderBox} from "react-native-image-slider-box";
import { View } from "react-native";
import stylesCon from "../libs/style";
import themeProvider from "../libs/theme";

const ImageSlider = () =>{
    const colors = themeProvider().colors;
    const styles = stylesCon();
    const [image, setImage] = useState([require("../../assets/bgA.png"),require("../../assets/bgE.png"),require("../../assets/bgB.jpg")]);
    return (
      <View style={styles.imageSliderCon}>
        <SliderBox
          images={image}
          sliderBoxHeight={300}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor={colors.app_1} 
          inactiveDotColor={colors.app_4}
          paginationBoxVerticalPadding={10}
          autoplay
          activeOpacity={0.5}
          circleLoop
          resizeMethod="resize"
          resizeMode={"cover"}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)",
          }}
          ImageComponentStyle={{ borderRadius:0, width: "100%", marginTop: 5 }}
          imageLoadingColor="#2196F3"
        />
      </View>
    );
}
export default ImageSlider