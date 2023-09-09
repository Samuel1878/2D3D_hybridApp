import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles, { app_4, bg_1 } from "../libs/style";

const ServiceBtn = ()=>{
    return (
      <TouchableOpacity style={styles.serviceBtnCon}>
        <AntDesign name="customerservice" size={35} color={bg_1} />
      </TouchableOpacity>
    );
}
export default ServiceBtn;