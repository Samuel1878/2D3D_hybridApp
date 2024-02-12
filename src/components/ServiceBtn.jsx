import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import stylesCon from "../libs/style";
import { useContext } from "react";
import GlobalContext from "../services/global/globalContext";
import themeProvider from "../libs/theme";

const ServiceBtn = ()=>{
  const styles = stylesCon();
  const {navigation} = useContext(GlobalContext);
  const colors = themeProvider().colors;
    return (
      <TouchableOpacity style={styles.serviceBtnCon} onPress={()=>navigation.navigate("Service")}>
        <AntDesign name="customerservice" size={35} color={colors.bg_1} />
      </TouchableOpacity>
    );
}
export default ServiceBtn;