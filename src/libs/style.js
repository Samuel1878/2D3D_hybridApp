import { StyleSheet,Platform,Dimensions } from "react-native";
const app_1 = "rgb(83,99,82)";
const app_2 = "rgb(149,166,142)";
const app_3 = "rgb(197,206,183)";
const app_4 ="rgb(228,230,219)";

const bg_1 = "#101916";
const bg_2 = "#121212";
const bg_3 = "#AFC1B6";
const bg_4 = "#EFEFE9";
const bg_5 = "#0E3E30";
export { app_1, app_2, app_3, app_4, bg_1, bg_2, bg_3, bg_4, bg_5 };
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: bg_4,
  },
  ///Home
  homeBoardCon: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    padding: 10,
  },
  userBoard: {
    flex: 1,
    marginTop: 20,
    backgroundColor: app_1,
    height: 210,
    width: "90%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: app_1,
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 10 },
  },
  liveNo: {
    fontSize: 75,
    fontWeight: "900",
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: { x: 2, y: 5 },
    color: bg_4,
    fontFamily: "Roboto_Bold",
  },
  liveDate: {
    fontSize: 12,
    color: bg_4,
    fontFamily: "Roboto",
  },
  homeDataCon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  //TwoDmini
  twoDmini: {
    flex: 1,
    width: "90%",
  },
  dataA: {
    marginVertical: 10,
    flex: 1,
    backgroundColor: app_4,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: app_1,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { x: 0, y: 5 },
  },
  dataHeader: {
    color: bg_1,
    fontSize: 21,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    marginVertical: 5,
  },
  dataACon: {
    borderTopColor: app_3,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  dataH: {
    fontSize: 14,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_2,
  },
  dataV: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: app_1,
  },
  line: {
    width: "90%",
    height: 2,
    flex: 1,
    backgroundColor: app_1,
    marginVertical: 5,
  },
  //Service Internet and Modern Data
  internetDataCon: {
    flex: 1,
    width: "90%",
  },
  interData: {
    flexDirection: "row",
    backgroundColor: app_4,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    shadowColor: bg_1,
    shadowOffset: { x: 5, y: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
  inter: {
    padding: 5,
    alignItems: "center",
  },
  interHeader: {
    color: bg_1,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Roboto_Bold",
  },
  interH: {
    color: app_2,
    fontSize: 12,
    fontFamily: "Roboto",
  },
  interV: {
    color: bg_5,
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
  },
  interData3D: {
    flexDirection: "row",
    backgroundColor: app_4,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    shadowColor: bg_1,
    shadowOffset: { x: 5, y: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    width: "80%",
  },
  threeDTxt: {
    textAlign: "center",
    fontFamily: "Roboto_Bold",
    fontSize: 16,
    color: app_1,
    fontWeight: "600",
  },
  //Image
  imageSliderCon: {
    position: "absolute",
    bottom: 30,
    paddingVertical: 40,
    width: "100%",
    backgroundColor: app_4,
  },
  //buttons
  btnBlurCon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  btnLabelTxt: {
    color: bg_5,
    fontSize: 16,
  },
  regBtn: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: bg_2,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  regBtnTxt: {
    fontSize: 18,
    color: app_4,
    fontWeight: "600",
  },
  logBtn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: "80%",
    borderRadius: 10,
    backgroundColor: app_1,
  },
  logBtnTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: app_4,
  },
  twoD: {
    flex: 1,
    backgroundColor: bg_4,
  },
  threeD: {
    flex: 1,
    backgroundColor: bg_4,
  },
  //Wallet
  wallet: {
    flex: 1,
    backgroundColor: bg_4,
  },
  walletMainCon: {
    flex: 1,
    backgroundColor: app_1,
    position: "relative",
  },
  walletMain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  scanBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  walletBtnTxt: {
    color: bg_4,
    fontWeight: "500",
    fontSize: 16,
  },
  ballanceCon: {
    width: "auto",
    height: 100,
    position: "absolute",
    bottom: "-25%",
    left: 50,
    right: 50,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: app_4,
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    shadowOffset: { x: 5, y: 5 },
  },
  ///Screens
  Container: {
    flex: 1,
    backgroundColor: bg_4,
  },
  topCon: {
    backgroundColor: app_1,
    flex: 1,
  },
  bottomCon: {
    flex: 2,
  },
  //Login Screen
  loginCon: {
    flex: 1,
    backgroundColor: app_2,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBoxCon: {
    flex: 1.5,
    width: "90%",
    backgroundColor: "transparent",
    borderCurve: "continuous",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginHeader: {
    fontSize: 26,
    fontFamily: "Roboto_Bold",
    fontWeight: "800",
    marginVertical: 20,
    color: bg_4,
  },
  inputName: {
    paddingVertical: 10,
    backgroundColor: app_4,
    paddingLeft: 60,
    width: "100%",
    borderRadius: 5,
    fontSize: 18,
    fontFamily: "Roboto",
    color: app_1,
    marginVertical: 10,
  },
  inputPwd: {
    paddingVertical: 10,
    backgroundColor: app_4,
    paddingLeft: 60,
    width: "100%",
    borderRadius: 5,
    fontSize: 18,
    fontFamily: "Roboto",
    color: app_1,
    marginVertical: 10,
    marginBottom: 50,
  },
  //img
  loginImgCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginImg: {
    height: 220,
    width: 200,
  },
});
export default styles;
