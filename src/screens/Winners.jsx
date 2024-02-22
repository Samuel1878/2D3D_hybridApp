import { FlatList, RefreshControl, View,Text,Image, TouchableOpacity } from "react-native";
import StylesCon from "../libs/Styles";
import { useEffect, useState ,useCallback} from "react";
import axios from "axios"
import { GET_2DWINNERS, GET_3DWINNERS, GET_TOPGAINER } from "../hooks/config";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";

const Winners = () => {
  const Styles = StylesCon();
  const colors = themeProvider().colors;
  const {t} = useTranslation();
  const [refreshing,setRefreshing] = useState(false);
  const [topGainer, setTopGainer] = useState([]);
  const [_2dData, set2dData] = useState([]);
  const [_3dData, set3dData] = useState([]);
  const [isTwoD, setIsTwoD] = useState(true);
  useEffect(()=>{
    const fetch = () => {
      axios
        .get(GET_2DWINNERS, { headers: { "Content-Type": "application/json" } })
        .then((e) => {
          (e.status === 201 || 200) && set2dData(e.data);
        });
      axios
        .get(GET_3DWINNERS, { headers: { "Content-Type": "application/json" } })
        .then((e) => {
          (e.status === 201 || 200) && set3dData(e.data);
        });
      axios
        .get(GET_TOPGAINER, { headers: { "Content-Type": "application/json" } })
        .then((e) => {
          e.status === 200 && setTopGainer(e.data);
        });
    };
    fetch();
    
  },[refreshing]);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  useEffect(()=>{
    _2dData.reverse()
  },[_2dData]);
  useEffect(()=>{
    _3dData.reverse()
  },[_3dData])
  const RenderTopGainer = ({item})=>{
    return (
      <View style={Styles.topGainer}>
        <Image style={Styles.topImg} />
        <View style={Styles.topGainerBox}>
          <Text style={Styles.tnameTxt}>{item?.name}</Text>
          <Text style={Styles.pnameTxt}>{item?.phone}</Text>
          <Text style={Styles.mnameTxt}>{item?.amount || item?.earn}</Text>
          {item.luckyNo?<View style={Styles.NoCon}>
            <Text style={Styles.No}>{item?.luckyNo}</Text>
          </View>:<></>}
        </View>
      </View>
    );
  };
  return (
    <View style={Styles.Container}>
      <Text style={Styles.winnerH}>{t("top gainers of all the time")}</Text>
      <View style={Styles.topCon}>
           <FlatList
          data={topGainer}
          initialNumToRender={4}
          renderItem={RenderTopGainer}
          keyExtractor={(item) => item.phone}
          extraData={topGainer}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
       
      </View>
      <View style={Styles.rowCon}>
        <TouchableOpacity onPress={()=>setIsTwoD(true)}>
          <Text style={[Styles.winnerH,{color:isTwoD?colors.app_1:colors.text_1}]}>{t("2D daily winners")}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setIsTwoD(false)}>
          <Text style={[Styles.winnerH,{color:isTwoD?colors.text_1:colors.app_1}]}>{t("3D winners of the year")}</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isTwoD ? (
          <FlatList
            data={_2dData}
            renderItem={RenderTopGainer}
            keyExtractor={(item) => item._id}
            extraData={_2dData}
            bounces={true}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                tintColor={colors.app_1}
                colors={colors.app_1}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          />
        ) : (
          <FlatList
            data={_3dData}
            renderItem={RenderTopGainer}
            keyExtractor={(item) => item._id}
            extraData={_3dData}
            bounces={true}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                tintColor={colors.app_1}
                colors={colors.app_1}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          />
        )}
      </View>
    </View>
  );
};
export default Winners;
