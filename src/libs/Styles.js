import { StyleSheet, Platform, Dimensions } from "react-native";
import themeProvider from "./theme";
const StylesCon = () => {
  const colors = themeProvider().colors;
  const StylesS = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: colors.bg_2,
      alignItems: "center",
    },
    ////TWOD HISTORY
    top: {
      flex: 1,
      backgroundColor: colors.app_1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    liveNo: {
      fontSize: 75,
      color: colors.text_1b,
      fontFamily: "Roboto_Bold",
      fontWeight: "800",
    },
    item: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
      margin: 0,
    },
    datePicker: {
      // padding:10,
      // position:"absolute",
      // right:10,
      // top:30,
    },

    btnCon: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: colors.bg_2,
      minWidth: 150,
      justifyContent: "center",
      alignItems: "center",
    },
    analHeader: {
      width: "100%",
      backgroundColor: colors.app_1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
    },
    bottom: {
      flex: 4,
      width: "100%",
    },
    //Service Con//////////////////////////////////////////
    ServiceContainer: {
      flex: 1,
      backgroundColor: colors.bg_2,
    },
    chatAreaCon: {
      flex: 1,
      backgroundColor: colors.bg_2,
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
      backgroundColor: colors.bg_3,
      paddingHorizontal: 10,
      padding: 5,
      marginHorizontal: 15,
      borderRadius: 5,
    },
    messages: {
      fontSize: 18,
      color: colors.app_1,
      fontFamily: "Roboto",
    },
    msgProfile: {
      width: 35,
      height: 35,
    },
    ServiceBox: {
      width: "100%",
      backgroundColor: colors.app_1,
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
      backgroundColor: colors.bg_2,
      color: colors.app_4,
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
    ///Payment edit pages //////////////////////////////////////////
    editInput: {
      padding: 20,
      backgroundColor: colors.bg_3,
      marginVertical: 10,
      width: "90%",
      borderLeftColor: colors.app_4,
      borderLeftWidth: 30,
      borderRadius: 5,
      fontSize: 18,
      color: colors.app_1,
    },
    paySubmit: {
      backgroundColor: colors.app_1,
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
      color: colors.bg_2,
      fontFamily: "Roboto_Bold",
    },
    policyContainer: {
      width: "90%",
      flex: 1,
      marginVertical: 50,
      padding: 10,
      backgroundColor: colors.bg_3,
      borderRadius: 20,
    },
    Txt6M: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.app_1,
      fontStyle: "italic",
      fontFamily: "Roboto_Bold",
    },
    footTxt: {
      textAlign: "center",
      fontStyle: "italic",
      fontSize: 17,
      color: colors.app_1,
      position: "absolute",
      bottom: 20,
      left: 10,
    },
    successTxt: {
      textAlign: "center",
      fontStyle: "italic",
      fontSize: 12,
      color: colors.app_1,
    },
    ///WINNER

    winnerH: {
      fontSize: 19,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
      textAlign: "center",
      marginVertical: 10,
      textDecorationLine: "underline",
      textDecorationColor: colors.bg_3,
      textDecorationStyle: "solid",
    },
    topCon: {
      width: "100%",
      height: "30%",
      alignItems: "center",
      borderBottomColor: colors.app_1,
      borderBottomWidth: 2,
    },
    topGainer: {
      backgroundColor: colors.bg_3,
      borderRadius: 10,
      flexDirection: "row",
      marginVertical: 5,
      width: 350,
      flex: 1,
    },
    noRecordBox: {
      margin: 10,
      backgroundColor: colors.bg_3,
      width: "100%",
      height: "100%",
      borderRadius: "25%",
      padding: 10,
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
      color: colors.text_1,
    },
    pnameTxt: {
      fontSize: 17,
      fontFamily: "Roboto",
      color: colors.text_1,
    },
    mnameTxt: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      color: colors.text_1,
      fontWeight: "600",
    },
    NoCon: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: 50,
      backgroundColor: colors.app_1,
      justifyContent: "center",
      alignItems: "center",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    No: {
      fontSize: 20,
      fontFamily: "Roboto_Bold",
      color: colors.bg_2,
      fontWeight: "600",
    },

    ///LEVEL PAGE ////////////////////////
    levelTop: {
      flex: 1,
      width: "100%",
      backgroundColor: colors.app_1,
      justifyContent: "center",
      alignItems: "center",
    },
    levelTxt: {
      fontSize: 75,
      color: colors.text_1b,
      fontFamily: "Roboto_Bold",
      fontWeight: "900",
    },
    levelXTxt: {
      fontSize: 250,
      color: colors.app_1,
      fontFamily: "Roboto_Bold",
      fontWeight: "900",
    },
    levelBottom: {
      flex: 2,
      backgroundColor: colors.bg_2,
      justifyContent: "center",
      alignItems: "center",
    },
    //VERSION ?
    versionTop: {
      flex: 1,
      backgroundColor: colors.app_1,
      width: "100%",
    },
    versionBt: {
      flex: 2,
      backgroundColor: colors.bg_2,
      justifyContent: "center",
      alignItems: "center",
    },
    versionTxt: {
      fontSize: 20,
      color: colors.app_1,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
    },
    //TERMS OF US
    termofusH: {
      fontSize: 19,
      color: colors.app_1,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      textAlign: "center",
      margin: 10,
    },
    termofusP: {
      fontSize: 15,
      color: colors.text_2,
      fontFamily: "Roboto_Bold",
      fontWeight: "400",
      margin: 10,
    },
    termofusG: {
      height: 4,
      width: "90%",
      alignSelf: "center",
      backgroundColor: colors.bg_3,
    },
    ////TRANSFER SCREEN
    TransferTopCon: {
      flex: 1,
      backgroundColor: colors.app_1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    tphoneCon: {
      padding: 15,
      borderRadius: 10,
      width: "90%",
      backgroundColor: colors.bg_2,
    },
    tphoneH: {
      fontSize: 18,
      color: colors.text_1,
      fontFamily: "Roboto_Bold",
      fontWeight: "400",
      margin: 10,
    },
    tphoneInput: {
      padding: 10,
      backgroundColor: colors.bg_2,
      borderBottomColor: colors.bg_3b,
      borderBottomWidth: 2.5,
      marginVertical: 10,
      color: colors.text_1,
      fontSize: 21,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
    },
    contactBookCon: {
      position: "absolute",
      right: 10,
      top: "50%",
    },
    contactBook: {
      width: 60,
      height: 60,
    },
    TransferBtCon: {
      flex: 3,
      backgroundColor: colors.bg_2,
      width: "100%",
      alignItems: "center",
    },
    NextBtn: {
      width: "90%",
      paddingVertical: 20,
      alignItems: "center",
      borderRadius: 5,
      color: colors.text_1,
      backgroundColor: colors.app_1,
      marginVertical: 25,
    },
    btnTxt: {
      fontSize: 21,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1b,
    },
    recentTlist: {
      flex: 1,
      backgroundColor: colors.bg_2,
      width: "90%",
      marginVertical: 35,
      borderRadius: 15,
      justifyContent: "flex-end",
    },
    //delete
    transDBtn: {
      width: "100%",
      paddingVertical: 20,
      borderRadius: 5,
      backgroundColor: colors.bg_3,
      alignItems: "center",
    },
    transDTxt: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_4,
    },
    ///ADDRESS BOOK
    searchCon: {
      paddingVertical: 20,
      paddingHorizontal: 30,
      width: "100%",
      backgroundColor: colors.bg_2,
      borderBottomColor: colors.bg_3,
      borderbottomWidth: 4,
      marginVertical: 10,
    },
    searchInput: {
      height: 40,
      width: "100%",
      padding: 5,
      backgroundColor: colors.bg_3,
      borderLeftColor: colors.app_1,
      borderLeftWidth: 30,
      color: colors.app_4,
      fontSize: 18,
      borderRadius: 5,
    },
    addressContainer: {
      flex: 1,
      backgroundColor: colors.bg_2,
      width: "100%",
    },
    addressBookCon: {
      color: colors.app_1,
      fontSize: 17,
    },
    addressBook: {
      width: "100%",
      padding: 10,
      backgroundColor: colors.bg_3,
      flexDirection: "row",
    },
    addressProfile: {
      width: 50,
      height: 50,
    },
    addressD: {
      padding: 5,
      justifyContent: "center",
    },
    addressHCon: {
      width: "100%",
      padding: 10,
      backgroundColor: colors.bg_2,
      flexDirection: "row",
    },
    addressHeader: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_4,
    },
    addressN: {
      fontSize: 16,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
    },
    ///TRANFERMAIN
    tranContainer: {
      flex: 1,
      backgroundColor: colors.bg_2,
      justifyContent: "center",
      alignItems: "center",
    },
    notfoundTran: {
      padding: 20,
      backgroundColor: colors.bg_3,
      borderRadius: 10,
    },
    notfoundH: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_4,
      textAlign: "center",
    },
    notfoundTxt: {
      fontSize: 15,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
    },
    tranCon: {
      width: "90%",
      flex: 1,
      marginVertical: 15,
      backgroundColor: colors.bg_3,
      borderRadius: 10,
    },
    ToCon: {
      width: "100%",
      padding: 20,
      backgroundColor: colors.bg_3b,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    Toimg: {
      width: 65,
      height: 65,
      borderRadius:65
    },

    toName: {
      fontSize: 23,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
    },
    toNo: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_2,
    },
    amountCon: {
      padding: 10,
      width: "100%",
      justifyContent: "center",
    },
    amountH: {
      fontSize: 15,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_2,
      marginLeft: 10,
    },
    amountInput: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: "90%",
      borderBottomColor: colors.bg_3b,
      borderBottomWidth: 2,
      color: colors.text_1,
      fontSize: 32,
      alignSelf: "center",
      marginVertical: 5,
      fontFamily: "Roboto_Bold",
      fontWeight: "700",
    },
    pinCon: {
      width: "100%",
      padding: 5,
      backgroundColor: colors.bg_2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderRadius: 5,
      marginVertical: 10,
    },
    pinH: {
      fontSize: 16,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_2,
    },
    pinBtn: {
      padding: 10,
      backgroundColor: colors.app_1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      margin: 5,
    },
    pin: {},
    transferBtn: {
      padding: 20,
      backgroundColor: colors.app_1,
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      alignSelf: "center",
      marginVertical: 10,
    },
    transferTxt: {
      fontSize: 21,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1b,
    },
    ///////Transfer RECENT HISTORY ITEM
    recentItem: {
      padding: 10,
      width: "100%",
      borderColor: colors.bg_2,
      backgroundColor: colors.bg_3,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderLeftColor: colors.bg_3b,
      borderLeftWidth: 10,
      marginVertical: 2,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 5,
      borderTopLeftRadius: 5,
    },
    recentImg: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginHorizontal: 20,
    },
    recentTxt: {
      fontSize: 21,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
      flex: 1,
    },
    ///TRANSACTION HISTORY
    TranHisCon: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    hisTopCon: {
      flexDirection: "row",
      height: 50,
      width: "100%",
      backgroundColor: colors.bg_2,
    },
    hisTopBtn: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg_2,
    },
    TranHisH: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
    },
    hisItemCon: {
      backgroundColor: colors.bg_3,
      padding: 5,
      minHeight: 70,
      borderRadius: 5,
      marginVertical: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: 360,
    },
    transactionItem: {
      flexDirection: "row",
      alignItems: "center",
      width: 260,
    },
    hisItemImg: {
      width: 50,
      height: 50,
    },
    hisItem: {
      padding: 5,
    },
    hisH: {
      fontSize: 16,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_2,
    },
    hisDate: {
      fontSize: 12,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
      marginLeft: 4,
    },
    hisAmount: {
      fontSize: 21,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
    },
    times: {
      fontSize: 31,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_4,
      marginLeft: 20,
    },
    //EMPTY LIST
    emptyListCon: {
      alignItems: "center",
      justifyContent: "center",
    },
    //FORM
    formCon: {
      flex: 1,
      backgroundColor: colors.bg_2,
      alignItems: "center",
      // padding:10,
      height: "100%",
      width: "100%",
    },
    cashInItemCon: {
      backgroundColor: colors.bg_3,
      padding: 5,
      borderRadius: 5,
      marginVertical: 5,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      justifyContent: "space-between",
      width: 360,
    },

    img: {
      width: 70,
      height: 70,
    },
    itemCashInOut: {
      paddingHorizontal: 10,
    },
    ///Details
    detailTop: {
      marginVertical: 20,
    },
    detailTxt: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
      marginVertical: 5,
    },
    detailAmount: {
      fontSize: 40,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.text_2,
      marginVertical: 10,
    },
    details: {
      flexDirection: "row",

      justifyContent: "space-between",
      width: "95%",
      marginVertical: 5,
    },
    detailsTxt: {
      fontSize: 15,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.app_2,
      marginVertical: 5,
    },
    line: {
      height: 2,
      width: "90%",
      backgroundColor: colors.bg_3,
      marginVertical: 10,
    },
    ////PIN MANAGEMENT
    SetPinCon: {
      width: "90%",
      flex: 1,
      backgroundColor: colors.bg_2,
      alignItems: "center",
    },
    setPinH: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.app_3,
      marginVertical: 20,
    },
    setPinInCon: {
      padding: 5,
      flexDirection: "row",
      marginVertical: 10,
    },
    setPinInput: {
      backgroundColor: colors.bg_2,
      padding: 10,
      color: colors.text_1,
      flex: 1,
      textAlign: "center",
      fontSize: 18,
      borderBottomColor: colors.bg_3b,
      borderBottomWidth: 2,
      marginVertical: 10,
    },
    setPinBtn: {
      padding: 20,
      backgroundColor: colors.app_1,
      borderRadius: 10,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
    },
    //FORGET BTN

    forgetBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15,
    },
    changePinCon: {
      padding: 5,
      flexDirection: "row",
      marginVertical: 20,
    },
    setPinTxt: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.text_1b,
    },
    ///FORGET PAGE
    forgetContainer: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.bg_2,
      paddingVertical: 20,
    },
    phoneCon: {
      width: "90%",
      borderRadius: 5,
    },
    phoneInput: {
      padding: 20,
      backgroundColor: colors.bg_3,
      borderRadius: 5,
      color: colors.app_1,
      fontSize: 18,
      marginVertical: 10,
    },
    _2fa: {
      padding: 20,
      backgroundColor: colors.bg_3,
      borderRadius: 5,
      marginVertical: 10,
      color: colors.app_1,
      fontSize: 18,
    },
    _2faTime: {
      backgroundColor: colors.app_1,
      marginHorizontal: 5,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      paddingHorizontal: 25,
    },
    _2faCon: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 10,
    },
    _2faBtns: {
      padding: 20,
      backgroundColor: colors.bg_3b,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    ////Forget MainPage.
    exitBtn: {
      padding: 20,
      marginVertical: 25,
      borderRadius: 10,
      width: "90%",
      backgroundColor: colors.app_1,
      justifyContent: "center",
      alignItems: "center",
    },
    ContainerF: {
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,
      backgroundColor: colors.bg_2,
    },
    ContainerX: {
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    forgetCon: {
      flex: 1,
      paddingVertical: 10,
      alignItems: "center",
      width: "100%",
    },
    itemCon: {
      padding: 20,
      width: "95%",
      borderRadius: 10,
      marginVertical: 5,
      backgroundColor: colors.bg_3,
    },
    forgetInput: {
      borderBottomWidth: 2,
      borderBottomColor: colors.bg_3b,
      padding: 10,
      marginVertical: 20,
      width: "85%",
      fontSize: 18,
      color: colors.app_1,
    },
    forgetbtn: {
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      width: "85%",
      backgroundColor: colors.app_1,
      marginVertical: 25,
      borderRadius: 5,
    },
    ////INPUTSSS
    good: {
      fontSize: 15,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.app_2,
    },
    warn: {
      fontSize: 13,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.text_3,
    },

    ////DEPOSIT SCREEN /////////////******************
    depositAmount: {
      width: "90%",
      padding: 10,
      borderRadius: 10,
      backgroundColor: colors.bg_3,
      marginVertical: 10,
      shadowColor: colors.bg_1,
      shadowOffset: { x: 10, y: 10 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    depositAmountInput: {
      width: "100%",
      padding: 10,
      color: colors.text_1,
      borderRadius: 5,
      borderColor: colors.app_1,
      borderWidth: 2,
      marginVertical: 10,
      fontSize: 19,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
    },
    inputLabel: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.app_1,
    },
    alertTxt: {
      fontSize: 16,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: "red",
      margin: 5,
      textAlign: "center",
    },
    depoH: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.app_4,
      marginVertical: 10,
    },
    recommedCon: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },

    recommedInputs: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 5,
      borderColor: colors.app_1,
      borderWidth: 2,
      width: 110,
      margin: 5,
    },
    recommedTxt: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.app_4,
      marginVertical: 10,
    },

    depoServiceBtn: {
      backgroundColor: colors.app_1,
      padding: 20,
      borderRadius: "50%",
      marginVertical: 10,
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
    },
    depoBtnTxt: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "500",
      color: colors.text_1b,
    },
    depoTxt: {
      fontSize: 19,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
      textAlign: "center",
      margin: 5,
    },
    btnDeponContainer: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    BtnDepoCon: {
      padding: 5,
      borderRadius: 5,
      backgroundColor: colors.bg_3,
      // width: 100,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      // height:75
    },
    PayDepo: {
      width: 100,
      height: 100,
      borderRadius: 5,
    },
    ///DepositLayout
    depositContainer: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: colors.bg_2,
    },
    depospitH: {
      fontSize: 19,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
      textAlign: "center",
      margin: 5,
    },
    depositCon: {
      flex: 1,
      width: "90%",
      backgroundColor: colors.bg_3,
      borderRadius: 5,
      marginVertical: 2.5,
      padding: 10,
      shadowColor: colors.bg_3,
      shadowOffset: { x: 10, y: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    depositRowCon: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      paddingHorizontal: 10,
    },
    qrToggleBtn: {
      width: 175,
      backgroundColor: colors.bg_3b,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    depositH1: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_2,
    },
    TranId: {
      backgroundColor: colors.bg_2,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      flex: 1,
      margin: 5,
      width: 100,
      alignSelf: "center",
    },
    tranIdTxt: {
      fontSize: 23,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_4,
      textAlign: "center",
    },

    MethodImg: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginVertical: 10,
    },
    depositTxt: {
      fontSize: 15,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_2,
    },
    depositDataTxt: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
    },
    depositNameTxt: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_2,
      marginVertical: 5,
    },
    depositBtnTxt: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1b,
    },
    depositBtnTxt1: {
      fontSize: 14,
      fontFamily: "Roboto_Bold",
      fontWeight: "700",
      color: colors.text_1b,
    },
    depositPaymentsCon: {
      flex: 1,
    },
    depositCopyBtn: {
      flex: 0.5,
      backgroundColor: colors.app_1,
      padding: 15,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    changeBtn: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center",
    },
    depositUploadBtn: {
      width: 150,
      backgroundColor: colors.bg_3b,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderRadius: 5,
    },

    submitBtn: {
      marginVertical: 10,
      width: "90%",
      backgroundColor: colors.app_1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      borderRadius: 5,
    },
    qrCode: {
      width: 75,
      height: 75,
      margin: 10,
      borderRadius: 5,
    },
    serviceImg: {
      width: 50,
      height: 50,
    },
    ///Need Help FOOTER COM
    footer: {
      margin: 2,
    },
    needHelpTxt: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_2,
      textAlign: "center",
    },
    footerCon: {
      backgroundColor: colors.bg_3,
      width: "90%",
      alignSelf: "center",
      borderRadius: 5,
      flexDirection: "row",
      marginVertical: 5,
      justifyContent: "center",
    },
    ////Payments
    payContainer: {
      flex: 1,
      backgroundColor: colors.bg_2,
      padding: 10,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    payCon: {
      height: "80%",
    },
    noPayment: {
      flex: 1,
      backgroundColor: colors.bg_3,
      padding: 20,
    },

    addCon: {
      height: "15%",
      backgroundColor: colors.bg_1,
      borderTopLeftRadius: 10,
      borderTopLeftRadius: 10,
    },
    addPayments: {
      flexDirection: "row",
      backgroundColor: colors.bg_1,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    payment: {
      padding: 10,
      margin: 5,
      backgroundColor: colors.bg_3,
      borderRadius: 5,
    },
    payments: {
      width: 70,
      height: 70,
      borderRadius: 5,
    },
    Txt: {
      fontSize: 14,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_3,
      marginVertical: 10,
      textAlign: "center",
    },
    depositImageCon: {
      flex: 1,
      borderColor: colors.app_1,
      borderWidth: 2,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      overflow: "scroll",
    },
    depositImage: {
      width: 100,
      height: 100,
      borderRadius: 5,
    },
    clickhere: {
      flex: 1,
      marginHorizontal: 5,
    },
    ////WITHDRAW
    addPaymentsBtn: {
      padding: 20,
      borderRadius: 5,
      backgroundColor: colors.bg_3b,
      width: "90%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginVertical: 20,
    },
    innerBtn: {
      padding: 5,
      backgroundColor: colors.bg_3,
      borderRadius: "100%",
    },
    withdrawCon: {
      flex: 1,
      width: "90%",
      marginVertical: 10,
    },
    receivingCon: {
      padding: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: colors.bg_3,
      marginVertical: 15,
      borderRadius: 5,
    },
    withdrawInput: {
      padding: 20,
      width: "100%",
      backgroundColor: colors.bg_3,
      borderRadius: 5,
      marginVertical: 10,
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
    },
    selectedData: {
      flex: 1,
      paddingHorizontal: 10,
    },
    Img: {
      width: 75,
      height: 75,
      borderRadius: 5,
    },
    SubmitBtn: {
      marginVertical: 25,
      width: "100%",
      backgroundColor: colors.app_1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
    },
    chanegBtn: {
      backgroundColor: colors.bg_2,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      borderRadius: 5,
    },

    ////Common TXT
    Txt1: {
      fontSize: 13,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1,
      marginVertical: 5,
    },
    Txt2: {
      fontSize: 20,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_2,
      marginVertical: 5,
    },
    Txt3: {
      fontSize: 17,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_3,
      marginVertical: 5,
      // textAlign: "center",
    },
    Txt4: {
      fontSize: 15,
      fontFamily: "Roboto_Bold",
      fontWeight: "700",
      color: colors.text_4,
      marginVertical: 5,
      textAlign: "center",
    },
    Txt5: {
      fontSize: 11,
      fontFamily: "Roboto_Bold",
      fontWeight: "700",
      color: colors.text_1,
      marginVertical: 5,
      textAlign: "center",
    },
    Txt1M: {
      fontSize: 22,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
      textAlign: "center",
    },
    Txt2M: {
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
      textAlign: "center",
    },
    Txt3M: {
      fontSize: 16,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
    },
    Txt4M: {
      fontSize: 12,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
    },
    Txt5M: {
      fontSize: 11,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
      textAlign: "center",
      flexWrap: "wrap",
    },
    btnTxt1: {
      fontSize: 19,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1b,
    },
    btnTxt2: {
      fontSize: 16.5,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1b,
    },
    btnTxt3: {
      fontSize: 13,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.text_1b,
    },

    ///Voucher
    voucherCon: {
      flex: 1,
      backgroundColor: colors.bg_2,
      alignItems: "center",
      paddingTop: 20,
    },
    Vounumber: {
      marginVertical: 25,
      fontSize: 55,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_1,
    },
    rowCon: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      width: "90%",
    },
    winner:{
      width:150,
      height:150
    },

    //HOLIDAY PAGE /////////
    holiItemCon: {
      backgroundColor: colors.bg_3b,
      borderRadius: 10,
      marginVertical: 10,
      width: 365,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    itemCON: {
      backgroundColor: colors.bg_3,
      flex: 0.5,
      height: "100%",
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      alignItems: "center",
    },
    reasonTxt: {
      flex: 1,
      fontSize: 18,
      fontFamily: "Roboto_Bold",
      fontWeight: "600",
      color: colors.app_2,
      margin: 5,
    },

    ///MODAL
    blurCon: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modal: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    modalBox: {
      width: 220,
      padding: 20,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg_1,
      borderRadius: "10%",
      elevation: 5,
    },
    modalBtn: {
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      width: 150,
      backgroundColor: colors.app_1,
      justifyContent: "center",
      alignItems: "center",
    },
    loader: {
      width: 60,
      height: 60,
    },
    okayCon: {
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    ////LanguageChoose
    langContainer: {
      flex: 1,
      backgroundColor: colors.bg_2,
      alignItems: "center",
    },
    langCon: {
      width: "90%",
      padding: 20,
      backgroundColor: colors.bg_3,
      borderRadius: 10,
      marginVertical: 25,
      flexDirection: "row",
      alignItems: "center",
      gap: 25,
    },
    langChoseCon: {
      shadowColor: colors.app_1,
      shadowOffset: { x: 10, y: 10 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      borderRadius: 10,
    },
    flagImg: {
      width: 65,
      height: 65,
      borderRadius: 65,
    },
  });
  return StylesS
};

export default StylesCon;