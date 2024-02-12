import { Text, View } from "react-native"
import stylesCon from "../libs/style"
import DataContext from "../services/data/dataContext"
import { useContext } from "react"

const HorizonalLine = ()=> {
      const styles = stylesCon();
    return(
        <View style={styles.line}>
            
        </View>
    )
}
export const ThreeDmini = ()=>{
  const {history3D} = useContext(DataContext);
      const styles = stylesCon();
  //console.log(history3D)
    return (
      <View style={styles.interData3D}>
        <Text style={styles.interHeader}>{history3D?.[0]?.date}</Text>
        <View style={styles.inter}>
          <Text style={styles.interH}>3D</Text>
          <Text style={styles.interV}>{history3D?.[0]?.result}</Text>
        </View>
      </View>
    );
}
export default HorizonalLine