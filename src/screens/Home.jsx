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
import DataContext from "../services/data/dataContext";
const Home = ({navigation}) => {
  const colors = themeProvider().colors;
    const styles = stylesCon();
    let scrollOffsetY = useRef(new Animated.Value(0)).current;
    const {setIsLoading} = useContext(GlobalContext);
    const {resfLive, setResfLive} = useContext(DataContext);

    
    useEffect(()=>{
      resfLive && setIsLoading(true);
      resfLive && console.log(i18n.languages, resfLive);
    },[resfLive]);
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
      setResfLive(true);
      setTimeout(() => {
        setResfLive(false);
      }, 1500);
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
            <RefreshControl tintColor={colors.app_1} colors={colors.app_1} refreshing={resfLive} onRefresh={onRefresh} />
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

