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
    return (
      <View style={styles.interData3D}>
        <View style={styles.inter}>
          <Text style={styles.interV}>latest 3D result</Text>
          <Text style={styles.interV}>{history3D?.[0]?.date}</Text>
        </View>

        <View style={styles.inter}>
          <Text style={styles.interV}>3D</Text>
          <Text style={styles.interH}>{history3D?.[0]?.num}</Text>
        </View>
      </View>
    );
}
export default HorizonalLine