import { View ,Text} from "react-native"
import Styles from "../libs/Styles"
import { useContext } from "react"
import GlobalContext from "../services/global/globalContext"

const Level = () =>{
    const {level} = useContext(GlobalContext);
    console.log(level)
    return(
        <View style={Styles.Container}>
            
            <View style={Styles.levelTop}>
                <Text style={Styles.levelTxt}>LEVEL</Text>
            </View>
            <View style={Styles.levelBottom}>
                <Text style={Styles.levelXTxt}>{level&&level}</Text>
            </View>
        </View>
    )
}
export default Level;