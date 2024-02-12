import { FlatList, Keyboard, Text, TextInput,Image, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import StylesCon from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import AnimatedLottieView from "lottie-react-native";
import GlobalContext from "../services/global/globalContext";
import LocalContext from "../services/localization/localContext";
import { useTranslation } from "react-i18next";

const Transfer = () => {
    const Styles = StylesCon();
    const {t} = useTranslation();
    const [tphone,setTphone]=useState("09");
    const {navigation,transactions} = useContext(GlobalContext);
    const {setSendTo} = useContext(LocalContext);
    const recentTransfer = new Map();
    const [recentArray ,setRecentArray]= useState([]);
    const contactFnc = ()=>{
       navigation.navigate("addressbook")
    };
    const nextFnc = () =>{
      setSendTo(tphone)
       navigation.navigate("TransferMain");
      
    };
    const deleteHis = () => {
      setRecentArray([]);
    };
    
    const renderRecent = ({item,index})=>{
      
        const pressFnc = async() => {
         setTphone(recentArray[index][1]);
         setSendTo(tphone)
        //  setTimeout(() => {
        //     navigation.navigate("TransferMain");
        //  }, 3000);
        // 

        };
        return(
            <TouchableOpacity style={Styles.recentItem} onPress={pressFnc}>
                <Image style={Styles.recentImg} source={require("../../assets/profile.png")}/>
                <Text style={Styles.recentTxt}>{item[0]}</Text>
            </TouchableOpacity>
        )
    }
    useEffect(()=>{
      transactions.map((e)=>{
       recentTransfer.set(e.toName,e.toPhone);
      });
        recentTransfer.forEach((value,key)=>{
            const data = [];
            data.push(key,value)
        setRecentArray((prev)=>[...prev,data])
        });
    },[])
    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <View style={Styles.Container}>
          <View style={Styles.TransferTopCon}>
            <View style={Styles.tphoneCon}>
              <Text style={Styles.tphoneH}>{t("transfer to phone number")}</Text>
              <TextInput
                inputMode="tel"
                autoFocus
                value={tphone}
                style={Styles.tphoneInput}
                onChangeText={(e) => setTphone(e)}
              />
              <TouchableOpacity
                onPress={contactFnc}
                style={Styles.contactBookCon}
              >
                <AnimatedLottieView
                  autoPlay
                  style={Styles.contactBook}
                  source={require("../../assets/contactBook.json")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.TransferBtCon}>
            <TouchableOpacity style={Styles.NextBtn} onPress={nextFnc}>
              <Text style={Styles.btnTxt}>{t("next")}</Text>
            </TouchableOpacity>
            <View style={Styles.recentTlist}>
                <FlatList 
                  renderItem={renderRecent}
                  data={recentArray} 
                  bounces={false} 
                  extraData={recentArray} 
                  showsVerticalScrollIndicator={false}/>
              <TouchableOpacity style={Styles.transDBtn} onPress={deleteHis}>
                <Text style={Styles.transDTxt}>{t("delete history")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}
export default Transfer;