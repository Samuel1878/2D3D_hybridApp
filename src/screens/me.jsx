import { Image, TextInput, View ,Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from "react-native"
import styles from "../libs/style"
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";

const Me = ()=>{
    const {profile,phone,name} = useContext(GlobalContext);
    const [nameChange, setNameChange] = useState(name); 
    const [valid, setValid] = useState(false)
    const [changedProfile , setChangePf] = useState();
    const REG_NAME = /^[a-zA-Z0-9]+$/;
    const SaveFnc = () => {
            valid && axios.post()
    };
    useEffect(()=>{
        setValid(REG_NAME.test(nameChange));
    },[nameChange])
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.Container}>
          <View style={styles.meTop}></View>

          <View style={styles.meBottom}>
            <View style={styles.meProfile}>
              <Image resizeMode="cover" style={styles.meImg} source={profile} />
            </View>
            <KeyboardAvoidingView style={styles.meNameChangeCon}>
              <TextInput
                style={styles.nameChangeInput}
                value={nameChange}
                defaultValue={name}
                onChangeText={(e) => setNameChange(e)}
              />
              <View style={styles.mePhone}>
                <Text style={styles.meTxt}>{phone}</Text>
              </View>
              <TouchableOpacity style={styles.nameChangeBtn} onPress={SaveFnc}>
                <Text style={styles.saveTxt}>Save</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}
export default Me;