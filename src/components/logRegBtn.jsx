import { TouchableOpacity, View,Text } from "react-native";
import stylesCon from "../libs/style";

export const LoginBtn = ({navigation}) =>{
      const styles = stylesCon();
    return(
        <TouchableOpacity
            onPress={()=>navigation?.navigate("login")}
            style={styles.logBtn}>
                <Text style={styles.logBtnTxt}>
                    Login
                </Text>
        </TouchableOpacity>
    )

}
export const RegisterBtn = ({navigation}) =>{
        const styles = stylesCon();
    return(
        <TouchableOpacity
            onPress={()=>navigation?.navigate("register")}
            style={styles.regBtn}>
                <Text style={styles.regBtnTxt}>
                    Register
                </Text>

        </TouchableOpacity>
    )
}