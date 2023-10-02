import {  View,Animated,RefreshControl} from "react-native";
import styles, { app_1 } from "../libs/style";
import HomeItems from "../components/homeItems";
import DynamicHeader from "../components/DynamicHeader";
import {  useRef, useState ,useCallback, useContext, useEffect} from "react";
import { ScrollView } from "react-native";
import { _2d_URL } from "../hooks/config";
import GlobalContext from "../services/global/globalContext";
import restoreUserData from "../hooks/fetchUserData";
import AuthContext from "../services/auth/authContext";
const Home = ({navigation}) => {
    let scrollOffsetY = useRef(new Animated.Value(0)).current;
    const [refreshing, setRefreshing]= useState(false);
    const {userToken} = useContext(AuthContext);
    const {setIsLoading} = useContext(GlobalContext)
    useEffect(()=>{
      refreshing && setIsLoading(true)
    },[refreshing])

    

    const data = [
        {
            id:1,
            title:"TwoDmini"
        },
         {
            id:2,
            title:"line"
        },
         {
            id:3,
            title:"internet"
        },
         {
            id:4,
            title:"imageSlider"
        },
         {
            id:5,
            title:"Five"
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
            <RefreshControl tintColor={app_1} colors={app_1} refreshing={refreshing} onRefresh={onRefresh} />
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