import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Styles from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import AnimatedLottieView from "lottie-react-native";
import GlobalContext from "../services/global/globalContext";
import LocalContext from "../services/localization/localContext";

const Transfer = () => {
    const [tphone,setTphone]=useState("");
    const {navigation} = useContext(GlobalContext);
    const {setSendTo} = useContext(LocalContext)
    const contactFnc = ()=>{
       navigation.navigate("addressbook")
    };
    const nextFnc = () =>{
        setSendTo(tphone)
        navigation.navigate("TransferMain")
    }
    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <View style={Styles.Container}>
          <View style={Styles.TransferTopCon}>
            <View style={Styles.tphoneCon}>
              <Text style={Styles.tphoneH}>Transfer to Phone Number</Text>
              <TextInput
                inputMode="tel"
                placeholder="Phone"
                value={tphone}
                style={Styles.tphoneInput}
                onChangeText={(e) => setTphone(e)}
              />
              <TouchableOpacity
                onPress={contactFnc}
                style={Styles.contactBookCon}
              >
                <AnimatedLottieView
                  autoPlay
                  style={Styles.contactBook}
                  source={require("../../assets/contactBook.json")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.TransferBtCon}>
            <TouchableOpacity style={Styles.NextBtn} onPress={nextFnc}>
              <Text style={Styles.btnTxt}>Next</Text>
            </TouchableOpacity>
            <View style={Styles.recentTlist}>
              <TouchableOpacity style={Styles.transDBtn}>
                <Text style={Styles.transDTxt}>Delete history</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}
export default Transfer;