import { FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Styles from "../libs/Styles";
import { useContext, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import AnimatedLottieView from "lottie-react-native";
import { app_1, bg_3 } from "../libs/style";
import LottieView from "lottie-react-native";
import LocalContext from "../services/localization/localContext";
const TransferHis = ()=> {
    const {transactions,receive,navigation} = useContext(GlobalContext);
    const {setDetail} = useContext(LocalContext)
    const [isTran,setIsTran] = useState(true);
    const transferFnc = () => {
        !isTran && setIsTran(true)
    };
    const receiveFnc = () => {
        isTran && setIsTran(false);
    };
    const viewDetailFnc = (item)=>{
        setDetail(item);
        navigation.navigate("detail")
        
    }
    const renderItem = ({item}) => {
        return (
          <TouchableOpacity onPress={()=>viewDetailFnc(item)}>
            <View style={Styles.hisItemCon}>
              <LottieView
                style={Styles.hisItemImg}
                autoPlay
                source={require("../../assets/transfered.json")}
                loop
              />
              <View style={Styles.hisItem}>
                <Text style={Styles.hisH}>
                  {item.to ? "Transfer To" : "Received from"} {item.name}
                </Text>
                <Text style={Styles.hisDate}>{item.date}</Text>
              </View>
              <Text style={Styles.hisAmount}>
                {item.to ? " - " : " + "}
                {item.amount}
              </Text>
            </View>
          </TouchableOpacity>
        );
    }
    
    return (
      <View style={Styles.Container}>
        <Text style={Styles.TranHisH}>Transactions</Text>

        <View style={Styles.hisTopHeaderCon}>
          <TouchableOpacity
            style={Styles.hisCashInOutBtn}
            onPress={() => navigation.navigate("cashinout")}
          >
            <Text style={Styles.btnTxt3}> Cash in/out</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.hisTopCon}>
          <TouchableOpacity
            style={[
              Styles.hisTopBtn,
              { backgroundColor: isTran ? app_1 : bg_3 },
            ]}
            onPress={transferFnc}
          >
            <Text style={Styles.btnTxt2}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.hisTopBtn,
              { backgroundColor: isTran ? bg_3 : app_1 },
            ]}
            onPress={receiveFnc}
          >
            <Text style={Styles.btnTxt2}>Receive</Text>
          </TouchableOpacity>
        </View>
        {isTran ? (
          <View style={Styles.TranHisCon}>
            {transactions && (
              <FlatList
                keyExtractor={(item) => item.date}
                renderItem={renderItem}
                data={transactions}
                extraData={transactions}
                bounces={false}
              />
            )}
          </View>
        ) : (
          <View style={Styles.RecHisCon}>
            {receive && (
              <FlatList
                keyExtractor={(item) => item.date}
                renderItem={renderItem}
                extraData={receive}
                data={receive}
                bounces={false}
              />
            )}
          </View>
        )}
      </View>
    );
}
export default TransferHis;