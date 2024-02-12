import { Image, TextInput, View ,Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from "react-native"
import stylesCon from "../libs/style"
import { useContext, useEffect, useRef, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import LottieView from "lottie-react-native";
import * as ImagePicker from 'expo-image-picker';
import { _CHANGE_NAME_URL, _CHANGE_PROFILE_URL } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
import axios from "axios";
import { ChangeModel } from "../components/modals";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const Me = ()=>{
    const styles = stylesCon();
    const {t} = useTranslation();
    const {profile,phone,name,navigation,level} = useContext(GlobalContext);
    const {userToken} = useContext(AuthContext)
    const [nameChange, setNameChange] = useState(name); 
    const [valid, setValid] = useState(false);
    const nameRef = useRef();
    const [changed,setChanged] = useState(false);
    const [saved, setSaved] = useState(false);
    const [image, setImage] = useState(null);
    const REG_NAME = /^[a-zA-Z0-9]+$/;
    const changeNameFnc = () => {
      nameRef.current.focus();
    }
    const saveProfileChange = async() => {
     const formData = new FormData();
     formData.append("image",{
      uri:image.uri,
      name:image.fileName,
      type:image.type
     })
         
    console.debug(formData)
    await axios.post(_CHANGE_PROFILE_URL, formData, {
      headers:{
        Accept:"application/json",
        "Content-Type":"multipart/form-data"
      },
      params:{
        userToken:userToken
      }
    }).then((e)=>{
      console.log(e.data);
      if(e.status === 200 || 201){
        //setChanged(true)
      }
      console.log(e.data)
    }).catch((err)=>console.log(err));
    };
    const saveNameChange = () => {
        valid && axios
           .post(_CHANGE_NAME_URL, { name: nameChange, userToken: userToken })
           .then((e) => {
             if (e.status === 200 || 201) {
               setChanged(true);
             }
           })
           .catch((E) => console.log(E));
    };
    const SaveFnc = () => {
      name != nameChange && saveNameChange();
      image && saveProfileChange();
           
    };
    const ImgPickerFunc =async () => {
      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
       if (!res.canceled) {
         setImage(res.assets[0]);
         console.log(image);

       }


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
          <View style={styles.meTop}>
            <View style={styles.meProfile}>
              {image ? (
                <Image
                  resizeMode="cover"
                  style={styles.meImg}
                  source={{ uri: image.uri }}
                />
              ) : (
                <Image
                  resizeMode="cover"
                  style={styles.meImg}
                  source={profile}
                />
              )}
            </View>
          </View>
          <View style={styles.meBottom}>
            <View style={styles.changePhBtnCon}>
              <TouchableOpacity style={styles.changeProfileBtn}>
                <Text style={styles.meTxt}>{t("take photo")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.changeProfileBtn}
                onPress={ImgPickerFunc}
              >
                <Text style={styles.meTxt}>{t("choose photo")}</Text>
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={styles.meNameChangeCon}>
              <View style={styles.infoChangeCon}>
                <View style={styles.nameChangeInputCon}>
                  <TextInput
                    style={styles.nameChangeInput}
                    value={nameChange}
                    // defaultValue={name}
                    onChangeText={(e) => setNameChange(e)}
                    ref={nameRef}
                  />
                  <TouchableWithoutFeedback
                    style={styles.editBtn}
                    onPress={changeNameFnc}
                  >
                    <FontAwesome
                      name="edit"
                      size={26}
                      color="rgb(243,186,47)"
                    />
                  </TouchableWithoutFeedback>
                </View>

                <View style={styles.nameChangeInput}>
                  <Text style={styles.meTxt}>{phone}</Text>
                </View>
                <View style={styles.nameChangeInput}>
                  <Text style={styles.meTxt}>{t("level")} {level}</Text>
                </View>
                {!valid && <Text style={styles.red}>{t("invalid")}</Text>}
                {level == 1 ? (
                  <View>
                    <TouchableOpacity style={styles.upgradeBtn}>
                      <Text style={styles.meTxt}>{t("upgrade level")}</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View></View>
                )}
              </View>

              <TouchableOpacity style={styles.nameChangeBtn} onPress={SaveFnc}>
                <Text style={styles.saveTxt}>{t("save")}</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}
export default Me;