import { Animated } from "react-native"
import { Text, View } from "react-native"
import styles, { app_1, app_3, app_4, bg_1, bg_2 } from "../libs/style";
import { useEffect } from "react";
import {LoginBtn,RegisterBtn} from "./logRegBtn"
const Header_Max_Height = 250;
const Header_Min_Height = 170;
const DynamicHeader = ({navigation, animHeaderValue}) => {
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
          <Text style={styles.liveNo}>63</Text>
          <Text style={styles.liveDate}>Updated: 05 Sep, 2023 (Tue) 16:30:01</Text>
         
        </View>
      </Animated.View>
    );
}
export default DynamicHeader