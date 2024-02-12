import { View,Text } from "react-native";
import stylesCon from "../libs/style";
import { useContext } from "react";
import DataContext from "../services/data/dataContext";
import { useTranslation } from "react-i18next"; 
const TwoDmini = () => {
  const {results2D} = useContext(DataContext);

  const styles = stylesCon(); 
  const { t, i18n } = useTranslation();
  
  return (
    <View style={styles.twoDmini}>
      <View style={styles.dataA}>
        <Text style={styles.dataHeader}>{t("af")}</Text>
        <View style={styles.dataACon}>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>{ t("set")}</Text>
            <Text style={styles.dataV}>{results2D?.afSet}</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>{t("value")}</Text>
            <Text style={styles.dataV}>{results2D?.afValue}</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>{t("2D")}</Text>
            <Text style={styles.dataV}>{results2D?.afResult}</Text>
          </View>
        </View>
      </View>
      <View style={styles.dataA}>
        <Text style={styles.dataHeader}>{t("ev")}</Text>
        <View style={styles.dataACon}>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>{t("set")}</Text>
            <Text style={styles.dataV}>{results2D?.evSet}</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>{t("value")}</Text>
            <Text style={styles.dataV}>{results2D?.evValue}</Text>
          </View>
          <View style={styles.dataCon}>
            <Text style={styles.dataH}>{t("2D")}</Text>
            <Text style={styles.dataV}>{results2D?.evResult}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export const InternetData = () => {
  const {results2D} = useContext(DataContext);
    const { t, i18n } = useTranslation();
  const styles = stylesCon();
  console.log(results2D)
    return (
      <View style={styles.internetDataCon}>
        <View style={styles.interData}>
          <Text style={styles.interHeader}>{t("mn")}</Text>
          <View style={styles.inter}>
            <Text style={styles.interH}>{t('modern')}</Text>
            <Text style={styles.interV}>{results2D?.mModern}</Text>
          </View>
          <View style={styles.inter}>
            <Text style={styles.interH}>{t("internet")}</Text>
            <Text style={styles.interV}>{results2D?.mInternet}</Text>
          </View>
          {/* <View style={styles.inter}>
            <Text style={styles.interH}>TW</Text>
            <Text style={styles.interV}></Text>
          </View> */}
        </View>
        <View style={styles.interData}>
          <Text style={styles.interHeader}>{t("nn")}</Text>
          <View style={styles.inter}>
            <Text style={styles.interH}>{t("modern")}</Text>
            <Text style={styles.interV}>{results2D?.eModern}</Text>
          </View>
          <View style={styles.inter}>
            <Text style={styles.interH}>{t("internet")}</Text>
            <Text style={styles.interV}>{results2D?.eInternet}</Text>
          </View>
        </View>
      </View>
    );
}
export default TwoDmini;
