import { FlatList, Text, TouchableOpacity, View } from "react-native";
import stylesCon from "../libs/style";
import StylesCon from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import DataContext from "../services/data/dataContext";
import axios from "axios"
import { _2D_HISTORY } from "../hooks/config";
import {useTranslation} from "react-i18next";
import DatePicker from "react-native-date-picker";

const ThreeD_Analysis = () => {
  const {live2D} = useContext(DataContext);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [dateD, setDateD] = useState("");
  const [date, setDate] = useState(new Date());
  const {t} = useTranslation()
  const Styles = StylesCon();
  const styles = stylesCon();
  const emptyData = () => (
    <Text style={Styles.Txt4}>{t("no data")}</Text>
  );
  const fetchFnc = () => {
    axios
      .get(_2D_HISTORY, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {date:date},
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
  },[dateD])
  useEffect(()=>{
      fetchFnc();
  },[]);
 useEffect(()=>{ 
  setDateD(date.toISOString().slice(0,10));
 },[date]);
 useEffect(()=>{
  console.log(data)
 },[data])
  const renderData = ({item}) => {
    console.log(item)
    return (
      <View style={Styles.item}>
        <Text style>

        </Text>
      </View>
    )
  }
  return (
    <View style={Styles.Container}>
      <View style={Styles.top}>
        <Text style={Styles.liveNo}>{"--"}</Text>
        <Text style={Styles.Txt4}>{live2D?.server_Time || "--"}</Text>
        <TouchableOpacity style={Styles.btnCon} onPress={() => setOpen(true)}>
          <Text>{t("search by date")}</Text>
        </TouchableOpacity>
        <DatePicker
          modal={true}
          androidVariant="iosClone"
          mode="date"
          aria-modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <View style={Styles.bottom}>
        <View style={Styles.analHeader}>
          <View style={Styles.analCon}>
            <Text style={Styles.Txt3}>{"--"}</Text>
          </View>
          <View style={Styles.analCon}>
            <Text style={Styles.Txt3}>{t("set")}</Text>
          </View>
          <View style={Styles.analCon}>
            <Text style={Styles.Txt3}>{t("value")}</Text>
          </View>
          <View style={Styles.analCon}>
            <Text style={Styles.Txt3}>{t("result")}</Text>
          </View>
        </View>
        <FlatList
          keyExtractor={(item) => item.id}
          renderItem={renderData}
          ListEmptyComponent={emptyData}
        />
      </View>
    </View>
  );
};
export default ThreeD_Analysis;
