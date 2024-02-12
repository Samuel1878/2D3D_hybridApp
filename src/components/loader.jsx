import React, { useRef, useEffect } from "react";
import {  View } from "react-native";
import LottieView from "lottie-react-native";
import stylesCon from "../libs/style";

export default function Loader() {
  const animation = useRef(null);
    const styles = stylesCon();
  
  useEffect(() => {
     animation.current?.play();
  }, []);

  return (
    <View style={styles.loaderContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={styles.loader}
        source={require("../../assets/loader.json")}
      />

    </View>
  );
}
