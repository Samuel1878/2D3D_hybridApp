import { TouchableOpacity, View,Text } from "react-native";
import styles from "../libs/style";

export const LoginBtn = ({navigation}) =>{
    return(
        <TouchableOpacity
            onPress={()=>navigation.navigate("login")}
            style={styles.logBtn}>
                <Text style={styles.logBtnTxt}>
                    Login
                </Text>
        </TouchableOpacity>
    )

}
export const RegisterBtn = ({navigation}) =>{
    return(
        <TouchableOpacity
            onPress={()=>navigation.navigate("register")}
            style={styles.regBtn}>
                <Text style={styles.regBtnTxt}>
                    Register
                </Text>

        </TouchableOpacity>
    )
}