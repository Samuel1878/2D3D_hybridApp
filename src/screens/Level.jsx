import { View ,Text} from "react-native"
import StylesCon from "../libs/Styles"
import { useContext } from "react"
import GlobalContext from "../services/global/globalContext"
import { useTranslation } from "react-i18next"

const Level = () =>{
   const Styles = StylesCon();
   const {t} = useTranslation();
    const {level} = useContext(GlobalContext);
    console.log(level)
    return(
        <View style={Styles.Container}>
            
            <View style={Styles.levelTop}>
                <Text style={Styles.levelTxt}>{t("LEVEL")}</Text>
            </View>
            <View style={Styles.levelBottom}>
                <Text style={Styles.levelXTxt}>{level&&level}</Text>
            </View>
        </View>
    )
}
export default Level;