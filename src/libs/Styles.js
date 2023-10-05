import { StyleSheet, Platform, Dimensions } from "react-native";
import { app_1, app_2, app_4, bg_1, bg_2, bg_3, bg_3b, bg_3c, text_1 } from "./style";

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: bg_2,
    alignItems: "center",
  },
  ServiceContainer: {
    flex: 1,
    backgroundColor: bg_2,
  },
  chatAreaCon: {
    flex: 1,
    backgroundColor: bg_2,
  },
  chatBox: {
    marginTop: 10,
  },
  MessageItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  messageBOx: {
    backgroundColor: bg_3,
    paddingHorizontal: 10,
    padding: 5,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  messages: {
    fontSize: 18,
    color: app_1,
    fontFamily: "Roboto",
  },
  msgProfile: {
    width: 35,
    height: 35,
  },
  ServiceBox: {
    width: "100%",
    backgroundColor: app_1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 15,
  },
  controls: {
    marginHorizontal: 5,
  },
  serviceTextInput: {
    height: 45,
    flex: 1,
    padding: 5,
    borderRadius: 15,
    backgroundColor: bg_2,
    color: app_4,
    fontSize: 18,
    marginHorizontal: 5,
  },
  sendBtnCon: {
    borderRadius: "100%",
  },
  SendBtn: {
    width: 60,
    height: 60,
  },
  ///Payment edit pages
  editInput: {
    padding: 20,
    backgroundColor: bg_3,
    marginVertical: 10,
    width: "90%",
    borderLeftColor: app_4,
    borderLeftWidth: 30,
    borderRadius: 5,
    fontSize: 18,
    color: app_1,
  },
  paySubmit: {
    backgroundColor: app_1,
    padding: 20,
    width: "90%",
    borderRadius: "50%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  payImg: {
    width: 100,
    height: 100,
    marginVertical: 20,
    borderRadius: 10,
  },
  payText: {
    fontSize: 18,
    fontWeight: "600",
    color: bg_2,
    fontFamily: "Roboto_Bold",
  },
  policyContainer: {
    width: "90%",
    flex: 1,
    marginVertical: 50,
    padding: 10,
    backgroundColor: bg_3,
    borderRadius: 20,
  },
  policyH: {
    fontSize: 18,
    fontWeight: "600",
    color: app_1,
    fontStyle: "italic",
    fontFamily: "Roboto_Bold",
  },
  footTxt: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 17,
    color: app_1,
    position: "absolute",
    bottom: 20,
    left: 10,
  },
  successTxt: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 17,
    color: app_1,
  },
  ///WINNER

  winnerH: {
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
    textAlign: "center",
    marginVertical: 10,
    textDecorationLine: "underline",
    textDecorationColor: bg_3,
    textDecorationStyle: "solid",
  },
  topCon: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    borderBottomColor: app_1,
    borderBottomWidth: 2,
  },
  topGainer: {
    backgroundColor: bg_3,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 5,
    width: 300,
    flex: 1,
  },
  topImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  topGainerBox: {
    flex: 1,
    paddingVertical: 5,
  },
  tnameTxt: {
    fontSize: 17,
    fontFamily: "Roboto",
    color: text_1,
  },
  pnameTxt: {
    fontSize: 17,
    fontFamily: "Roboto",
    color: text_1,
  },
  mnameTxt: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    color: text_1,
    fontWeight: "600",
  },
  NoCon: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 50,
    backgroundColor: app_1,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  No: {
    fontSize: 20,
    fontFamily: "Roboto_Bold",
    color: bg_2,
    fontWeight: "600",
  },
  ///Cash In Out
  cashServiceCon: {
    flex:1,
    backgroundColor: bg_3,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    justifyContent:"space-around"
  },
  customerBtn: {
    width:170,
    borderRadius: "100%",
    overflow: "hidden",
    marginHorizontal: 10,
    backgroundColor: app_1,
    flexDirection: "row",
    alignItems: "center",

  },
  customer: {
    width: 70,
    height: 70,
    marginRight:10,
  },
});
export default Styles