import { Animated } from "react-native"
import { Text, View } from "react-native"
import styles, { app_1, app_4 } from "../libs/style";
import { useEffect } from "react";
const Header_Max_Height = 250;
const Header_Min_Height = 150;
const DynamicHeader = ({animHeaderValue}) => {
     const animateHeaderBackgroundColor = animHeaderValue.interpolate({
       inputRange: [0, Header_Max_Height - Header_Min_Height],
       outputRange: [app_4, app_1],
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
            styles.userBoardCon,
          {
            height: animateHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor,
          },
        ]}
      >
        <View style={styles.userBoard}>

        </View>
      </Animated.View>
    );
}
export default DynamicHeader