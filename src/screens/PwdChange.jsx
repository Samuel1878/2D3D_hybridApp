import { Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import styles, { app_1 } from "../libs/style";
import { useContext, useEffect, useReducer, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import AuthContext from "../services/auth/authContext";
import { _CHANGE_PWD_URL } from "../hooks/config";
import axios from "axios";
import Styles from "../libs/Styles";
import { BlurView } from "expo-blur";
import { ChangeModel } from "../components/modals";

const PwdChange = ({navigation}) =>{
    const {userToken} = useContext(AuthContext);

    const[oldPwd, setOldPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [showPwd1, setShowPwd1] = useState(true);
    const [showPwd2, setShowPwd2] = useState(true);
    const [showPwd3, setShowPwd3] = useState(true);
    const [valid1, setValid1] = useState(false);
    const [valid2, setValid2] = useState(false);
    const [valid3, setValid3] = useState(false);
    const [changed, setChanged] = useState(false);
    const REGEX_PWD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const ChangePwdFnc = async() => {
           valid1 && valid2 && valid3 && axios.post(
                  _CHANGE_PWD_URL,
                  {
                    oldPwd: oldPwd,
                    newPwd: newPwd,
                    userToken: userToken,
                  },
                  {
                    headers: { "Content-Type": "application/json" },
                  }
                ).then((e)=>{
                    if(e.status === 200){
                        setChanged(true);
                        return
                    }else{
                        setChanged(false);
                    }
                    
                }).catch((err)=>{
                    console.log(err)
                })

    };
    useEffect(()=>{
      changed && setTimeout(()=>{
        setChanged(false);
        navigation.navigate("More")
      },1500)
    },[changed])
    useEffect(()=>{
        setValid1(REGEX_PWD.test(oldPwd));
        setValid2(REGEX_PWD.test(newPwd));
        setValid3(newPwd === confirmPwd);
    },[oldPwd,newPwd,confirmPwd]);
    return (
      <View style={styles.PwdContainer}>
        <ChangeModel changed={changed}/>
        <View style={styles.pwdInputCon}>
          <TextInput
            secureTextEntry={showPwd1}
            value={oldPwd}
            onChangeText={(e) => setOldPwd(e)}
            placeholder="Enter Old Password"
            style={styles.pwdChangeInput}
          />
          <TouchableOpacity
            style={styles.Eye1}
            onPress={() => (showPwd1 ? setShowPwd1(false) : setShowPwd1(true))}
          >
            <FontAwesome
              name={showPwd1 ? "eye-slash" : "eye"}
              size={24}
              color={app_1}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.pwdInputCon}>
          <TextInput
            secureTextEntry={showPwd2}
            value={newPwd}
            onChangeText={(e) => setNewPwd(e)}
            placeholder="New Password"
            style={styles.pwdChangeInput}
          />
          <TouchableOpacity
            style={styles.Eye1}
            onPress={() => (showPwd2 ? setShowPwd2(false) : setShowPwd2(true))}
          >
            <FontAwesome
              name={showPwd2 ? "eye-slash" : "eye"}
              size={24}
              color={app_1}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.pwdInputCon}>
          <TextInput
            secureTextEntry={showPwd3}
            value={confirmPwd}
            onChangeText={(e) => setConfirmPwd(e)}
            placeholder="Confirm New Password"
            style={styles.pwdChangeInput}
          />
          <TouchableOpacity
            style={styles.Eye1}
            onPress={() => (showPwd3 ? setShowPwd3(false) : setShowPwd3(true))}
          >
            <FontAwesome
              name={showPwd3 ? "eye-slash" : "eye"}
              size={24}
              color={app_1}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.pwdChangeBtn} onPress={ChangePwdFnc}>
          <Text style={styles.pwdChangetxt}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.forgetBtn}
          onPress={() => navigation.navigate("2fa")}
        >
          <Text style={Styles.Txt2}>Forget password?</Text>
          <Text style={Styles.Txt2M}> Reset now</Text>
        </TouchableOpacity>
      </View>
    );
}
export default PwdChange;