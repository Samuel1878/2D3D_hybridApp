import { FlatList, View,Text } from "react-native"
import Styles from "../libs/Styles"
import { useEffect, useState } from "react";
import { InstanceReq } from "../libs/helper/axios_get";


const Holidays = ()=> {
    const [data,setData] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://thai-lotto-new-api.p.rapidapi.com/api/v1/holiday',
        headers: {
        'X-RapidAPI-Key': '2ebad97563msh9ab84284298e633p12a16cjsnd20f2d3f24a4',
            'X-RapidAPI-Host': 'thai-lotto-new-api.p.rapidapi.com'
        }
    };
    const renderItem = ({item})=>{
        console.log(item)
        return (
          <View style={Styles.holiItemCon}>
            <View style={Styles.itemCON}>
              <Text style={Styles.Txt3}>{item?.formatMonth}</Text>
              <Text style={Styles.Txt1}>{item?.date}</Text>
            </View>
            <Text style={Styles.reasonTxt}>{item?.reason}</Text>
          </View>
        );
    };
    useEffect(()=>{
InstanceReq(options).then((e)=>setData(e.data)).catch((e)=>console.log(e))
    },[])
    return(
        <View style={Styles.Container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                />

        </View>
    )
}
export default Holidays