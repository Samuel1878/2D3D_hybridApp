import {  View,Animated,RefreshControl} from "react-native";
import stylesCon from "../libs/style";
import HomeItems from "../components/homeItems";
import DynamicHeader from "../components/DynamicHeader";
import {  useRef, useState ,useCallback, useContext, useEffect} from "react";
import { ScrollView } from "react-native";
import { _2d_URL } from "../hooks/config";
import GlobalContext from "../services/global/globalContext";
import { useTranslation } from "react-i18next"; 
import i18n from "../libs/lang";
import themeProvider from "../libs/theme";
const Home = ({navigation}) => {
  const colors = themeProvider().colors;
    const styles = stylesCon();
    let scrollOffsetY = useRef(new Animated.Value(0)).current;
    const [refreshing, setRefreshing]= useState(false);
    const {setIsLoading} = useContext(GlobalContext);

    
    useEffect(()=>{
      refreshing && setIsLoading(true);
      refreshing && console.log(i18n.languages);
    },[refreshing]);
    const data = [
      {
        id: 1,
        title: "internet",
      },
      {
        id: 2,
        title: "ThreeDmini",
      },
      {
        id: 3,
        title: "line",
      },
      {
        id: 4,
        title: "TwoDmini",
      },
      {
        id: 5,
        title: "imageSlider",
      },
      {
        id: 6,
        title: "bottom",
      },
    ];
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
  
    return (
      <View style={styles.home}>
        <DynamicHeader
          animHeaderValue={scrollOffsetY}
          navigation={navigation}
        />
        <ScrollView
          contentContainerStyle={styles.homeDataCon}
          //bounces={false}
          scrollEventThrottle={4}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl tintColor={colors.app_1} colors={colors.app_1} refreshing={refreshing} onRefresh={onRefresh} />
          }
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
            { useNativeDriver: false }
          )}
        >
          {data.map((item, index) => {
            return <HomeItems item={item} key={index} />;
          })}
        </ScrollView>
      </View>
    );
};
export default Home;

