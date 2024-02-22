import { View,Text, ImageBackground, FlatList } from "react-native";
import stylesCon from "../libs/style";
import { useContext } from "react";
import DataContext from "../services/data/dataContext";
import { useTranslation } from "react-i18next"; 
const TwoDmini = () => {
  const {live2D,results2D} = useContext(DataContext);
  const styles = stylesCon(); 
  const { t, i18n } = useTranslation();
 
  return (
    <View style={styles.twoDmini}>
      {live2D &&
        live2D.result?.map((e) => {
          return (
            <View style={styles.dataA} key={e.open_time}>
              <Text style={styles.dataHeader}>{e.open_time}</Text>
              <View style={styles.dataACon}>
                <View style={styles.dataCon}>
                  <Text style={styles.dataH}>{t("set")}</Text>
                  <Text style={styles.dataV}>{e.set}</Text>
                </View>
                <View style={styles.dataCon}>
                  <Text style={styles.dataH}>{t("value")}</Text>
                  <Text style={styles.dataV}>{e.value}</Text>
                </View>
                <View style={styles.dataCon}>
                  <Text style={styles.dataH}>{t("2D")}</Text>
                  <Text style={styles.dataV}>{e.twod}</Text>
                </View>
              </View>
            </View>
          );
        })}
    </View>
  );

};
export const InternetData = () => {
  const {live2D} = useContext(DataContext);
    const { t, i18n } = useTranslation();
  const styles = stylesCon();
    return (
      <View style={styles.internetDataCon}>
        <ImageBackground
          style={styles.interData}
          source={require("../../assets/graphB.jpg")}
        >
          <View style={styles.interLeft}>
            <Text style={styles.interHeader}>{t("set")}</Text>
            <Text style={styles.interH}>{live2D?.live?.set}</Text>
          </View>
          <View style={styles.interRight}>
            <Text style={styles.interHeader}>{t("value")}</Text>
            <Text style={styles.interH}>{live2D?.live?.value}</Text>
          </View>
        </ImageBackground>
      </View>
    );
}
export default TwoDmini;
