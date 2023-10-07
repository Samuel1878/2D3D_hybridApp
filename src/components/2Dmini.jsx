import { View,Text } from "react-native";
import styles, { app_2, app_3 } from "../libs/style";
import { useContext } from "react";
import DataContext from "../services/data/dataContext";

const TwoDmini = () => {
  const {results2D} = useContext(DataContext);
  return (
    <View style={styles.twoDmini}>
      <View style={styles.dataA}>
        <Text style={styles.dataHeader}>12:01 PM</Text>
        <View style={styles.dataACon}>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>set</Text>
            <Text style={styles.dataV}>{results2D?.afSet}</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>value</Text>
            <Text style={styles.dataV}>{results2D?.afValue}</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>2D</Text>
            <Text style={styles.dataV}>{results2D?.afResult}</Text>
          </View>
        </View>
      </View>
      <View style={styles.dataA}>
        <Text style={styles.dataHeader}>4:30 PM</Text>
        <View style={styles.dataACon}>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>set</Text>
            <Text style={styles.dataV}>{results2D?.evSet}</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>value</Text>
            <Text style={styles.dataV}>{results2D?.evValue}</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>2D</Text>
            <Text style={styles.dataV}>{results2D?.evResult}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export const InternetData = () => {
  const {results2D} = useContext(DataContext)
    return (
      <View style={styles.internetDataCon}>
        <View style={styles.interData}>
          <Text style={styles.interHeader}>90:30 AM</Text>
          <View style={styles.inter}>
            <Text style={styles.interH}>Modern</Text>
            <Text style={styles.interV}>{results2D?.mModern}</Text>
          </View>
          <View style={styles.inter}>
            <Text style={styles.interH}>Internet</Text>
            <Text style={styles.interV}>{results2D?.mInternet}</Text>
          </View>
          {/* <View style={styles.inter}>
            <Text style={styles.interH}>TW</Text>
            <Text style={styles.interV}></Text>
          </View> */}
        </View>
        <View style={styles.interData}>
          <Text style={styles.interHeader}>2:00 PM</Text>
          <View style={styles.inter}>
            <Text style={styles.interH}>Modern</Text>
            <Text style={styles.interV}>{results2D?.eModern}</Text>
          </View>
          <View style={styles.inter}>
            <Text style={styles.interH}>Internet</Text>
            <Text style={styles.interV}>{results2D?.eInternet}</Text>
          </View>
        </View>
      </View>
    );
}
export default TwoDmini;
