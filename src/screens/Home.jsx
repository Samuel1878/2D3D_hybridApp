import { Text, View,Animated,FlatList, Image, SafeAreaView} from "react-native";
import styles, { app_1, app_3 } from "../libs/style";
import { useCollapsibleHeader } from 'react-navigation-collapsible';
import HomeItems from "../components/homeItems";
import DynamicHeader from "../components/DynamicHeader";
import { useEffect, useRef } from "react";
import { ScrollView } from "react-native";
const Home = ({navigation}) => {
    let scrollOffsetY = useRef(new Animated.Value(0)).current;
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
  
    return(
        <View style={styles.home}>
            <DynamicHeader animHeaderValue={scrollOffsetY} navigation={navigation}/>
           <ScrollView
            contentContainerStyle={styles.homeDataCon}
            bounces={false}
            scrollEventThrottle={4}
            onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}>
            {
                data.map((item,index)=>{
                    return(<HomeItems item={item} key={index}/>)
                })
            }
           </ScrollView>
        </View>
    )
};
export default Home;