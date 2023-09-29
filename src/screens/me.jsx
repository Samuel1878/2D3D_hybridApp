import { Image, TextInput, View ,Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from "react-native"
import styles from "../libs/style"
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import LottieView from "lottie-react-native";
import * as ImagePicker from 'expo-image-picker';

const Me = ()=>{
    const {profile,phone,name} = useContext(GlobalContext);
    const [nameChange, setNameChange] = useState(name); 
    const [valid, setValid] = useState(false)
    const [image, setImage] = useState();
    const REG_NAME = /^[a-zA-Z0-9]+$/;
    const SaveFnc = () => {
            valid && axios.post()
    };
    const ImgPickerFunc =async () => {
      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
       if (!res.canceled) {
         setImage(res.assets[0].uri);
       }
       console.log(image)

    }
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
              <TouchableOpacity style={styles.changeProfileBtn} onPress={ImgPickerFunc}>
                <LottieView
                  autoPlay
                  style={styles.cameraImg}
                  source={require("../../assets/camera.json")}
                />
              </TouchableOpacity>
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