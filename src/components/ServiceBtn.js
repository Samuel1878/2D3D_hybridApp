import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles, { app_4, bg_1 } from "../libs/style";
import { useContext } from "react";
import GlobalContext from "../services/global/globalContext";

const ServiceBtn = ()=>{
  const {navigation} = useContext(GlobalContext);
    return (
      <TouchableOpacity style={styles.serviceBtnCon} onPress={()=>navigation.navigate("Service")}>
        <AntDesign name="customerservice" size={35} color={bg_1} />
      </TouchableOpacity>
    );
}
export default ServiceBtn;