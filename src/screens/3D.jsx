import { Text, View } from "react-native";
import styles from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import {BlurView} from "expo-blur";
import LogReg from "../layouts/logReg";

const ThreeD = ({navigation}) => {
    return(
        <View style={styles.Container}>
            <View style={styles.topCon}>

            </View>
            
            <View style={styles.bottomCon}>
            </View>
            <LogReg navigation={navigation}/>
        </View>
    )
};
export default ThreeD;