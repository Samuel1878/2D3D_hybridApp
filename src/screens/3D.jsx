import { FlatList,SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import stylesCon from "../libs/style";
import LogReg from "../layouts/logReg";
import { useContext, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import ServiceBtn from "../components/ServiceBtn";
import { Ionicons } from "@expo/vector-icons";
import { _3D_DATA } from "../libs/data";
import DataContext from "../services/data/dataContext";
import AuthContext from "../services/auth/authContext";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";
const Item = ({item})=>{
    const styles = stylesCon();
    const {t} = useTranslation();
  
    return (
      <View style={styles.threeDItem} key={item?.date}>
        <View style={styles.threeDheaderCon}>
          <Text style={styles.dataH}>{t("date")}</Text>
          <Text style={styles.dataV}>{item?.date}</Text>
        </View>
        <View style={styles.threeDvalueCon}>
          <Text style={styles.dataH}>{t("result")}</Text>
          <Text style={styles.dataV}>{item?.result}</Text>
        </View>
      </View>
    );
}

const ThreeD = () => {
    const {t} = useTranslation();
    const colors = themeProvider().colors;
    const {navigation} = useContext(GlobalContext);
    const [isOpen, setIsOpen] = useState(true);
    const {history3D} = useContext(DataContext);
    const {userToken} = useContext(AuthContext);
    const styles = stylesCon();

    
    return (
      <View style={styles.threeDCon}>
        { userToken? <ServiceBtn /> : <LogReg navigation={navigation} />}
        <View style={styles.threeDCon}>
          <View style={styles.threeDTopCon}>
            <View style={styles.serverTimeCon}>
              <Text style={styles.serverTime}>
                <Ionicons name="ios-time" size={24} color={colors.bg_1} />
                Open
              </Text>
            </View>
          </View>

          <SafeAreaView style={styles.threeDdataCon}>
            <FlatList
              data={history3D}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item.date}
            />
          </SafeAreaView>
          {isOpen ? (
            <TouchableOpacity
              style={styles._3d_betBtn}
              onPress={() => navigation.navigate("3dBet")}
            >
              <Text style={styles._3d_betBtnTxt}>{t("bet now")}</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
    );
};
export default ThreeD;