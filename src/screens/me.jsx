import { Image, TextInput, View ,Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from "react-native"
import styles from "../libs/style"
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import LottieView from "lottie-react-native";
import * as ImagePicker from 'expo-image-picker';
import { _CHANGE_NAME_URL, _CHANGE_PROFILE_URL } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
import axios from "axios";
import { ChangeModel } from "../components/modals";

const Me = ()=>{
    const {profile,phone,name,navigation} = useContext(GlobalContext);
    const {userToken} = useContext(AuthContext)
    const [nameChange, setNameChange] = useState(name); 
    const [valid, setValid] = useState(false)
    const [changed,setChanged] = useState(false);
    const [image, setImage] = useState(null);
    const REG_NAME = /^[a-zA-Z0-9]+$/;
    const SaveFnc = () => {
            name!= nameChange && valid && axios.post(_CHANGE_NAME_URL, {name:nameChange,userToken:userToken}).then((e)=>{
               if(e.status===200||201){
                setChanged(true);
               }
            }).catch((E)=>console.log(E))
            image &&
              axios
                .post(_CHANGE_PROFILE_URL, {
                  image: image,
                  userToken: userToken,
                })
                .then((e) => {
                  if (e.status === 200 || 201) {
                    setChanged(true);
                  }
                })
                .catch((E) => console.log(E));
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
    },[nameChange]);
    useEffect(()=>{
      changed && setTimeout(()=>{
        setChanged(false);
        navigation.navigate("More");
      },2000);
    },[changed])
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.Container}>
          <ChangeModel changed={changed} />
          <View style={styles.meTop}></View>

          <View style={styles.meBottom}>
            <View style={styles.meProfile}>
              {image ? (
                <Image
                  resizeMode="cover"
                  style={styles.meImg}
                  source={{ uri: image }}
                />
              ) : (
                <Image
                  resizeMode="cover"
                  style={styles.meImg}
                  source={profile}
                />
              )}

              <TouchableOpacity
                style={styles.changeProfileBtn}
                onPress={ImgPickerFunc}
              >
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
               // defaultValue={name}
                onChangeText={(e) => setNameChange(e)}
              />
              <View style={styles.mePhone}>
                <Text style={styles.meTxt}>{phone}</Text>
              </View>
              {!valid&&<Text style={styles.red}>Invalid character</Text>}
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