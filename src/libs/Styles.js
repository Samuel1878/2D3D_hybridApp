import { StyleSheet, Platform, Dimensions } from "react-native";
import { app_1, app_4, bg_1, bg_2, bg_3, bg_3b, bg_3c } from "./style";

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
  topGainer: {
    padding: 10,
    backgroundColor: bg_3,
    borderRadius: 10,
    flexDirection:"row"
  },
  topImg: {
    width: 50,
    height: 50,
    borderRadius: "100%",
  },
  topGainerBox:{
    flex:1,
  },
});
export default Styles