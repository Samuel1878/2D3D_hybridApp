import { FlatList, RefreshControl, View } from "react-native";
import styles, { app_1 } from "../libs/style";
import Styles from "../libs/Styles";
import { useEffect, useState ,useCallback} from "react";

const Winners = () => {
  const [refreshing,setRefreshing] = useState(false);
  const [topGainer, setTopGainer] = useState([]);
  const [_2dData, set2dData] = useState([]);
  const [_3dData, set3dData] = useState([]);
  useEffect(()=>{
    
  },[refreshing]);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const RenderTopGainer = ({item})=>{
    return(
      <View style={Styles.topGainer}>
        <Image style={Styles.topImg}/>
        <View style={Styles.topGainerBox}>
          <Text style={Styles.tnameTxt}>asdfasdf</Text>
          <Text style={Styles.pnameTxt}>
            asdfasdfadsf
          </Text>
          <Text style={Styles.mnameTxt}>asdfasdfadsf</Text>
        </View>
      </View>
    )
  };
  return (
    <View style={Styles.Container}>
      <FlatList
        data={topGainer}
        renderItem={RenderTopGainer}
        keyExtractor={(item) => item.id}
        extraData={topGainer}
        bounces={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor={app_1}
            colors={app_1}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};
export default Winners;
