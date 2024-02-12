import { TouchableOpacity, View,Text,SafeAreaView,VirtualizedList } from "react-native";
import stylesCon from "../libs/style";
import { useContext, useState,useRef, useEffect } from "react";
import DynamicNumber from "../components/DynamicNumbers";
import { Picker } from "@react-native-picker/picker";
import DataContext from "../services/data/dataContext";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";

const TwoD_Analysis = () => {
  const {t} = useTranslation();
    const colors = themeProvider().colors;
    const styles = stylesCon();
    const {history2D,limit,setLimit} = useContext(DataContext)
    const [selected,setSelected] = useState("5");
    const pickerRef = useRef();
     useEffect(() => {
       try {
        setLimit(parseInt(selected));
       } catch (error) {
        console.error(error)
       }
     },[selected]);

    function open() {
    pickerRef.current.focus();
    }

    function close() {
    pickerRef.current.blur();
    }
    const getItem = (_data, index) => ({
      id: index + 1,
      data: history2D?.[index],
    });

    const getItemCount = (_data) => parseInt(selected);
    const Item = ({item}) => {
        return (
          <View style={styles.analItemCon}>
            <Text style={styles.analItemTxt}>{item?.date}</Text>
            <View style={styles.analItemBox}>
              <Text style={styles.analAf}>12:01 PM</Text>
              <Text style={styles.analAf}>4:00 PM</Text>
            </View>
            <View style={styles.analItemBox1}>
              <Text style={styles.analItemTxtd}>{item?.result_1200}</Text>
              <Text style={styles.analItemTxtd}>{item?.result_430}</Text>
            </View>
          </View>
        );
    }
   

  return (
    <View style={styles.TwoD_AnalysisCon}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnNumber}>
          <Text style={styles.numberTxt}>{t("numbers")}</Text>
        </TouchableOpacity>
        <Picker
          style={styles._filter}
          mode="dropdown"
          itemStyle={styles._filterItem}
          ref={pickerRef}
          dropdownIconColor={colors.app_4}
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
        >
          <Picker.Item label="1W" value="5" />
          <Picker.Item label="2W" value="10" />
          <Picker.Item label="3W" value="15" />
          <Picker.Item label="4W" value="20" />
          <Picker.Item label="5W" value="25" />
        </Picker>
        <TouchableOpacity style={styles.btnChart}>
          <Text style={styles.numberTxt}>Chart</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.analSelectedTxt}>Based on last {} days results</Text>
      <Text style={styles.analSelectedTxt}>{"Missing number(s):" + ""}</Text>
      <View style={styles.DyCon}>
        <DynamicNumber />
      </View>
      <View style={styles.analHeader}>
        <View style={styles.analCon}>
          <Text style={styles.analHtxt}>Date</Text>
        </View>
        <View style={styles.analCon}>
          <Text style={styles.analHtxt}>Time</Text>
        </View>
        <View style={styles.analCon}>
          <Text style={styles.analHtxt}>2D</Text>
        </View>
      </View>

      <SafeAreaView style={styles.analDataContainer}>
        <VirtualizedList
          initialNumToRender={parseInt(selected)}
          renderItem={({ item }) => <Item item={item.data} />}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
          refreshing={true}
          extraData={selected}
        />
      </SafeAreaView>
    </View>
  );
};
export default TwoD_Analysis;
