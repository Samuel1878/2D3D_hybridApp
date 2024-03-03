import { FlatList, View,Text, RefreshControl, TouchableOpacity } from "react-native";
import stylesCon from "../libs/style";
import { useCallback, useContext, useEffect, useReducer, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import SocketContext from "../services/socket/socketContext";
import { THREEDHISTORY, TWODHISTORY } from "../libs/actions";
import AuthContext from "../services/auth/authContext";
import LocalContext from "../services/localization/localContext";
import { Picker } from "@react-native-picker/picker";
import themeProvider from "../libs/theme";
import { useTranslation } from "react-i18next";
import AnimatedLottieView from "lottie-react-native";
const initialState = {
  _2d_page:11,
  _3d_page:11,
  _2d_length:0,
  _3d_length:0,
  _2d_refresh:false,
  _3d_refresh:false,
};
function reducer (prev,action) {
  switch (action.type) {
    case "2D_History":
        return{
          ...prev,
          _2d_page:action.page
        };
    case "3D_History":
      return{
        ...prev,
        _3d_page:action.page
      };
    case "2D_Length":
      return{
        ...prev,
        _2d_length:action.length
      };
    case "3D_Length":
      return{
        ...prev,
        _3d_length:action.length
      }
    case "2D_Refresh":
      return{
        ...prev,
        _2d_refresh:action.refresh
      }
    case "3D_Refresh":
      return{
        ...prev,
        _3d_refresh:action.refresh
      };
    default:
      break;
  }
};
const History = () => {
  const styles = stylesCon();
  const {t} = useTranslation();
  const colors = themeProvider().colors;
  const [isTwoD,setIsTwoD] = useState(true);
  const {userToken} = useContext(AuthContext);
  const { history_2D, 
          setHistory_2D, 
          navigation, 
          history_3D,
          setHistory_3D} = useContext(GlobalContext);
  const {setVouchers} = useContext(LocalContext);
  const {socket} = useContext(SocketContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const onRefresh = useCallback(() => {
    dispatch({type:"2D_Refresh",refresh:true})
      setTimeout(() => {
        dispatch({type:"2D_Refresh",refresh:false})
      }, 2000);
    }, []);
  const onRefresh3D = useCallback(() => {
   dispatch({ type: "3D_Refresh", refresh: true });
   setTimeout(() => {
     dispatch({ type: "3D_Refresh", refresh: false });
   }, 2000);
  }, []);
  const fetch2DHistory = () => {
    socket && socket.emit(TWODHISTORY, {userToken:userToken,page:state._2d_page});
    socket.off(TWODHISTORY).on(TWODHISTORY, (data) => {
      setHistory_2D(data.data);
      dispatch({type:"2D_Length",length:data.length})
    });
  };
  const fetch3DHistory = () => {
    socket && socket.emit(THREEDHISTORY, {userToken:userToken,page:state._3d_page});
    socket.off(THREEDHISTORY).on(THREEDHISTORY, (data) => {
      setHistory_3D(data.data);
      dispatch({type:"3D_Length",length:data.length})
    });
  };
  const reFetch2D = () => {
    if(state._2d_length<=state._2d_page){
       dispatch({ type: "2D_History", page: state._2d_length});
      return
    }
    dispatch({type:"2D_History",page:state._2d_page+10});
  };  
  const reFetch3D = () => {
    if(state._3d_length<=state._3d_page){
      dispatch({ type: "3D_History", page: state._3d_length });
      return;
    }
     dispatch({ type: "3D_History", page: state._3d_page + 10 });
  };
  const emptyFnc = () => (
    <View style={styles.empty}>
      <Text style={styles.meTxt}>No data</Text>
    </View>
  );
  useEffect(()=>{
      state._2d_refresh && fetch2DHistory();
      state._3d_refresh && fetch3DHistory();
  },[state._3d_refresh,state._2d_refresh]);
  useEffect(()=>{
    fetch2DHistory();
  },[state._2d_page]);
  useEffect(()=>{
    fetch3DHistory();
  },[state._3d_page]);
   const Item = ({item})=>{
    let time = item?.section==="af"?"Evening":"Morning";
    const pressFnc = () => {
      setVouchers(item);
      navigation.navigate("vouchers");
    };
    return (
      <TouchableOpacity style={styles.hisItem} onPress={pressFnc}>
        {item?.finished ? (
          <AnimatedLottieView
            autoPlay
            autoSize
            style={styles.hisImg}
            source={require("../../assets/receippt.json")}
          />
        ) : (
          <AnimatedLottieView
            autoPlay
            autoSize
            style={styles.hisImg}
            source={require("../../assets/voucher.json")}
          />
        )}
        <View>
          <Text style={styles.hisTxt}>
            {item?.date + "/" + item?.month + "/" + item?.year}
          </Text>
          <Text style={styles.hisTxt}>{time}</Text>
        </View>
        <Text style={styles.meTxt}>{item?.number}</Text>
        <Text style={styles.hisTxt}>{item?.amount}</Text>
        <View>
          <Text style={[{ color: item?.finished ? "red" : "green" }]}>
            {item?.finished ? t("expired") : t("new")}
          </Text>
          <Text style={styles.hisTxt}>{item?.win?t("win"):"-"}</Text>
        </View>
      </TouchableOpacity>
    );
   }

  return (
    <View style={styles.History2D}>
      <View style={styles.pickerCon}>
        <TouchableOpacity onPress={() => setIsTwoD(true)}>
          <Text
            style={[
              styles.btnTxt,
              { color: isTwoD ? colors.app_1 : colors.text_1 },
            ]}
          >
            2D
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsTwoD(false)}>
          <Text
            style={[
              styles.btnTxt,
              { color: isTwoD ? colors.text_1 : colors.app_1 },
            ]}
          >
            3D
          </Text>
        </TouchableOpacity>
      </View>
      {isTwoD ? (
        <FlatList
          data={history_2D}
          keyExtractor={(item) => Math.random()}
          renderItem={({ item }) => <Item item={item} />}
          showsVerticalScrollIndicator={false}
          style={styles.HistContainer}
          extraData={history_2D}
          showsHorizontalScrollIndicator={false}
          removeclippedsubviews={true} // unmount components when outside
          initialnumtorender={11} // reduce initial render amount
          maxtorenderperbatch={10} // reduce number in each render batch
          updatecellsbatchingperiod={100} // increase time between renders
          onEndReachedThreshold={0.1}
          onEndReached={reFetch2D}
          ListEmptyComponent={emptyFnc}
          refreshControl={
            <RefreshControl
              tintColor={colors.app_1}
              colors={colors.app_1}
              refreshing={state._2d_refresh}
              onRefresh={onRefresh}
            />
          }
        />
      ) : (
        <FlatList
          data={history_3D}
          keyExtractor={(item) => Math.random()}
          renderItem={({ item }) => <Item item={item} />}
          showsVerticalScrollIndicator={false}
          style={styles.HistContainer}
          extraData={history_3D}
          showsHorizontalScrollIndicator={false}
          removeclippedsubviews={true} // unmount components when outside
          initialnumtorender={11} // reduce initial render amount
          maxtorenderperbatch={11} // reduce number in each render batch
          updatecellsbatchingperiod={100} // increase time between renders
          // windowsize={7} // reduce the window size
          onEndReachedThreshold={0.1}
          onEndReached={reFetch3D}
          ListEmptyComponent={emptyFnc}
          refreshControl={
            <RefreshControl
              tintColor={colors.app_1}
              colors={colors.app_1}
              refreshing={state._3d_refresh}
              onRefresh={onRefresh3D}
            />
          }
        />
      )}
    </View>
  );
};
export default History;
