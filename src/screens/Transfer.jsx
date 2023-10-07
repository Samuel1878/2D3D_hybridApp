import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Styles from "../libs/Styles";
import { useEffect, useState } from "react";
import AnimatedLottieView from "lottie-react-native";
import * as Contacts from "expo-contacts";

const Transfer = () => {
    const [tphone,setTphone]=useState("")
    const contactFnc = ()=>{
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === "granted") {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
              const contact = data[0];
              console.log(contact);
            }
          }
        })();
    };
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
              <TouchableOpacity onPress={contactFnc} style={Styles.contactBookCon}>
                <AnimatedLottieView
                  autoPlay
                  style={Styles.contactBook}
                  source={require("../../assets/contactBook.json")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.TransferBtCon}>
            <TouchableOpacity style={Styles.NextBtn}>
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