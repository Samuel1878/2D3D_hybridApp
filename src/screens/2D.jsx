import { View ,Text} from "react-native";
import styles from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import {BlurView} from "expo-blur";
import LogReg from "../layouts/logReg";
import { useContext } from "react";
import GlobalContext from "../services/global/globalContext";
import ServiceBtn from "../components/ServiceBtn";

const TwoD = ({navigation}) => {
    const {loggedIn} = useContext(GlobalContext);
    return(
       <View style={styles.Container}>
            <View style={styles.topCon}>

            </View>
            
            <View style={styles.bottomCon}>
            </View>
            {
 loggedIn?<ServiceBtn/>:<LogReg navigation={navigation}/>
            }
           
        </View>
    )
};
export default TwoD;