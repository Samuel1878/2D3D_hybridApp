import { Text, View } from "react-native";
import styles from "../libs/style";

const DynamicNumber = ()=>{
    return (
      <View style={styles.DynamicNumbers}>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>0</Text>
        </View>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>1</Text>
        </View>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>2</Text>
        </View>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>3</Text>
        </View>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>4</Text>
        </View>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>5</Text>
        </View>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>6</Text>
        </View>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>7</Text>
        </View>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>8</Text>
        </View>
        <View style={styles.DyNumbers}>
          <Text style={styles.Numbers}>9</Text>
        </View>
      </View>
    );
}
export default DynamicNumber;