import { StyleSheet,Platform,Dimensions } from "react-native";
const app_1 = "rgb(83,99,82)";
const app_2 = "rgb(149,166,142)";
const app_3 = "rgb(197,206,183)";
const app_4 ="rgb(228,230,219)";

const bg_1 = "#101916";
const bg_2 = "#121212";
const bg_3 = "#AFC1B6";
const bg_4 = "#EFEFE9";
const bg_5 = "#F3F5D8";
export { app_1, app_2, app_3, app_4, bg_1, bg_2, bg_3, bg_4, bg_5 };
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: bg_4,
  },
  userBoardCon: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    padding: 10,
  },
  userBoard:{
    marginTop:20,
    backgroundColor:app_1,
    height:210,
    width:"90%",
    borderRadius:25
  },
  twoD: {
    flex: 1,
    backgroundColor: bg_4,
  },
  threeD: {
    flex: 1,
    backgroundColor: bg_4,
  },
});
export default styles;
