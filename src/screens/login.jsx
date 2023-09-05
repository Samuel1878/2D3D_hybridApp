import { View,Text ,Image} from "react-native";
import styles,{ app_1, app_3 } from "../libs/style";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

const Login = ({navigation}) =>{
    const [phone, setPhone] = useState("")
    const [password, setPwd] = useState("")
    return(
        <View style={styles.loginCon}>
            <View style={styles.loginImgCon}>
                <Image 
                    style={styles.loginImg}
                    source={require("../../assets/login.png")}/>
            </View>
            <View style={styles.loginBoxCon}>
                <Text style={styles.loginHeader}>Login</Text>
                <TextInput 
                    value={phone} 
                    onChangeText={(e)=>setPhone(e)} 
                    placeholder="Phone" 
                    style={styles.inputName}/>
                    
                <TextInput
                    textContentType="password"
                    
                    value={password} 
                    onChangeText={(e)=>setPwd(e)} 
                    placeholder="password" 
                    style={styles.inputPwd}/>
                <TouchableOpacity style={styles.loginSubBtn}>
                    <Text>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Login;