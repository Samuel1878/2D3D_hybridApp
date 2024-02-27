import { FlatList, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import stylesCon from "../libs/style";
import StylesCon from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import DataContext from "../services/data/dataContext";
import axios from "axios"
import { _2D_HISTORY } from "../hooks/config";
import {useTranslation} from "react-i18next";
import themeProvider from "../libs/theme";
import DateTimePicker from "@react-native-community/datetimepicker";

const ThreeD_Analysis = () => {
  const {live2D} = useContext(DataContext);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [dateD, setDateD] = useState("");
  const [date, setDate] = useState(new Date());
  const colors = themeProvider().colors;
  const {t} = useTranslation()
  const Styles = StylesCon();
  const styles = stylesCon();
  const [refresh, setRefresh] = useState(false);
  const emptyData = () => (
    <Text style={Styles.Txt4}>{t("no data")}</Text>
  );
  const fetchFnc = () => {
    axios
      .get(_2D_HISTORY, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {date:dateD},
      })
      .then((e) => {
        if (e.status === 200) {
          setData(e.data[0]);
        }
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(()=>{
    fetchFnc();
  },[dateD]);
  useEffect(()=>{
    refresh && fetchFnc();
  },[refresh]);
  const onRefresh = () => {
    setRefresh(true);
    setTimeout(()=>{
      setRefresh(false);
    },1000)
  };
  

 useEffect(()=>{ 
  setDateD(date.toISOString().slice(0,10));
 },[date]);
 useEffect(()=>{
  console.log(data)
 },[data]);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const renderData = ({item}) => {
    return (
      <View style={Styles.item}>
        <Text style={Styles.Txt3}>{item.time}</Text>
        <Text style={Styles.Txt3}>{item.set}</Text>
        <Text style={Styles.Txt2}>{item.value}</Text>
        <Text style={Styles.Txt2M}>{item.twod}</Text>
      </View>
    );
  }
  return (
    <View style={Styles.Container}>
      <View style={Styles.top}>
        <Text style={Styles.liveNo}>{data?.child?.[0]?.twod || "--"}</Text>
        <Text style={Styles.Txt5}>{t("search by date")}</Text>
        {/* <TouchableOpacity style={Styles.btnCon} onPress={() => setOpen(true)}>
          <Text>{t("search by date")}</Text>
        </TouchableOpacity> */}
        <DateTimePicker
          modal={true}
          mode="date"
          value={date}
          style={Styles.datePicker}
          onChange={onChange}
        />
      </View>
      <View style={Styles.bottom}>
        <View style={Styles.analHeader}>
          <View style={Styles.analCon}>
            <Text style={Styles.Txt3}>{data?.date}</Text>
          </View>
          <View style={Styles.analCon}>
            <Text style={Styles.Txt4}>{t("set")}</Text>
          </View>
          <View style={Styles.analCon}>
            <Text style={Styles.Txt4}>{t("value")}</Text>
          </View>
          <View style={Styles.analCon}>
            <Text style={Styles.Txt4}>{t("result")}</Text>
          </View>
        </View>
        <FlatList
          data={data?.child}
          keyExtractor={({item}) => Math.random()}
          renderItem={renderData}
          ListEmptyComponent={emptyData}
          extraData={data}
          refreshControl={
            <RefreshControl
              tintColor={colors.app_1}
              colors={colors.app_1}
              refreshing={refresh}
              onRefresh={onRefresh}
            />
          }
        />
      </View>
    </View>
  );
};
export default ThreeD_Analysis;
