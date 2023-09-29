import { StyleSheet, Platform, Dimensions } from "react-native";
import { app_1, app_4, bg_1, bg_2, bg_3 } from "./style";

const Styles = StyleSheet.create({
  ServiceContainer: {
    flex: 1,
    backgroundColor: bg_2,
  },
  chatAreaCon: {
    flex: 1,
    backgroundColor: bg_2,
  },
  chatBox: {
    marginTop:10
  },
  MessageItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  messageBOx: {
    backgroundColor: bg_3,
    paddingHorizontal: 10,
    padding:5,
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
});
export default Styles