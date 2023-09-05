import { Text, View } from "react-native"
import styles, { app_3, app_4 } from "../libs/style"

const HorizonalLine = ()=> {
    return(
        <View style={styles.line}>
            
        </View>
    )
}
export const ThreeDmini = ()=>{
    return (
      <View style={styles.interData3D}>
        <Text style={styles.interHeader}>2022-11-16</Text>
        <View style={styles.inter}>
          <Text style={styles.interH}>3D</Text>
          <Text style={styles.interV}>63</Text>
        </View>
      </View>
    );
}
export default HorizonalLine