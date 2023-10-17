import { TouchableOpacity, View,Text, FlatList } from "react-native";
import Styles from "../libs/Styles"
import LottieView from "lottie-react-native";
import { useContext, useEffect, useMemo, useState } from "react";
import { app_1, bg_3 } from "../libs/style";
import axios from "axios"
import { CASHINOUTHIS } from "../hooks/config";
import AuthContext from "../services/auth/authContext";
const CashInOut = () => {
    const {userToken} = useContext(AuthContext)
    const [isDepo,setIsDepo]= useState(true);
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const deposit = [];
    const withDrawl = [];
const viewItem = ()=>{

};
const RenderItem = ({item}) =>{
 return (
   <TouchableOpacity onPress={viewItem}>
     <View style={Styles.itemContainer}>
       <LottieView
         style={Styles.img}
         autoPlay
         source={require("../../assets/deposit.json")}
       />
       <Text style={Styles.hisAmount}>
         {item.type === "withdrawl" ? " - " : " + "}
         {item.amount}
       </Text>
       <View style={Styles.itemCashInOut}>
         <Text style={Styles.hisH}>{item.name}</Text>
         <Text style={Styles.hisDate}>{item.phone}</Text>
       </View>
     </View>
   </TouchableOpacity>
 );

}
useEffect(()=>{
    axios.get(CASHINOUTHIS,{headers:{"Content-Type":"application/json"},params:{
        userToken:userToken
    }}).then((e)=>{
        e.status === (200||201)&& setData(e.data);
    }).catch((e)=>console.log(e)).finally(()=>setLoaded(true));

},[]);
useEffect(()=>{
    if(loaded){
        for (let i = 0; i<data.length; i++) {
        const trans = data[i];
        if(trans.type==="deposit"){
            deposit.push(trans)
        }else if(trans.type==="withdrawl"){
            withDrawl.push(trans)
        }
        
    }

    }
   
},[loaded,isDepo]);

  return (
    <View style={Styles.Container}>
      <Text style={Styles.TranHisH}>Cash In Out History</Text>
      <View style={Styles.hisTopCon}>
        <TouchableOpacity
          style={[Styles.hisTopBtn, { backgroundColor: isDepo ? app_1 : bg_3 }]}
          onPress={() => !isDepo && setIsDepo(true)}
        >
          <Text style={Styles.btnTxt2}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.hisTopBtn,
            { backgroundColor: !isDepo ? app_1 : bg_3 },
          ]}
          onPress={() => isDepo && setIsDepo(false)}
        >
          <Text style={Styles.btnTxt2}>Withdrawl</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.TranHisCon}>
        {!isDepo ? (
          <FlatList
            keyExtractor={(item) => item._id}
            renderItem={RenderItem}
            data={withDrawl}
            extraData={data}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <FlatList
            keyExtractor={(item) => item._id}
            renderItem={RenderItem}
            data={deposit}
            extraData={data}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};
export default CashInOut;
//  <TouchableOpacity style={Styles.customerBtn}>
//    <LottieView
//      autoPlay
//      style={Styles.customer}
//      source={require("../../assets/serviceB.json")}
//    />
//    <Text>Chat Now</Text>
//  </TouchableOpacity>;