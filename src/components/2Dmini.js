import { View,Text } from "react-native";
import styles, { app_2, app_3 } from "../libs/style";

const TwoDmini = () => {
  return (
    <View style={styles.twoDmini}>
      <View style={styles.dataA}>
        <Text style={styles.dataHeader}>12:01 PM</Text>
        <View style={styles.dataACon}>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>set</Text>
            <Text style={styles.dataV}>1,551,31</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>value</Text>
            <Text style={styles.dataV}>21,564.50</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>2D</Text>
            <Text style={styles.dataV}>14</Text>
          </View>
        </View>
      </View>
      <View style={styles.dataA}>
        <Text style={styles.dataHeader}>12:01 PM</Text>
        <View style={styles.dataACon}>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>set</Text>
            <Text style={styles.dataV}>1,551,31</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>value</Text>
            <Text style={styles.dataV}>21,564.50</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>2D</Text>
            <Text style={styles.dataV}>14</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export const InternetData = () => {
    return (
      <View style={styles.internetDataCon}>
        <View style={styles.interData}>
          <Text style={styles.interHeader}>90:30 AM</Text>
          <View style={styles.inter}>
            <Text style={styles.interH}>Modern</Text>
            <Text style={styles.interV}>89</Text>
          </View>
          <View style={styles.inter}>
            <Text style={styles.interH}>Internet</Text>
            <Text style={styles.interV}>23</Text>
          </View>
          <View style={styles.inter}>
            <Text style={styles.interH}>TW</Text>
            <Text style={styles.interV}>14</Text>
          </View>
        </View>
        <View style={styles.interData}>
          <Text style={styles.interHeader}>2:00 PM</Text>
          <View style={styles.inter}>
            <Text style={styles.interH}>Modern</Text>
            <Text style={styles.interV}>63</Text>
          </View>
          <View style={styles.inter}>
            <Text style={styles.interH}>Internet</Text>
            <Text style={styles.interV}>16</Text>
          </View>
        </View>
      </View>
    );
}
export default TwoDmini;
