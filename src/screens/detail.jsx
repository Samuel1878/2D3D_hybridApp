import { View ,Text} from "react-native"
import StylesCon from "../libs/Styles"
import { useContext } from "react"
import LocalContext from "../services/localization/localContext"
import { AntDesign } from '@expo/vector-icons';
import GlobalContext from "../services/global/globalContext";
import themeProvider from "../libs/theme";
import {useTranslation} from "react-i18next";
export const Details = ()=>{
  const colors = themeProvider().colors;
      const Styles = StylesCon();
      const {t} = useTranslation();
    const {detail} = useContext(LocalContext);
    const {name,phone} = useContext(GlobalContext);
    let sig = detail?.fromPhone === phone || detail?.type==="withdraw" || detail?.win===false ? " - ":" + "
    console.log(detail);
    const BottomFnc = () => {
      if(detail?.from && detail.to){
        return (
          <>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>ID</Text>
              <Text style={Styles.detailTxt}>{detail?._id}</Text>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("transaction date")}</Text>
              <Text style={Styles.detailTxt}>
                {detail?.date + "/ " + detail?.month + "/ " + detail?.year}
              </Text>
            </View>

            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("time")}</Text>
              <Text style={Styles.detailTxt}>
                {detail?.createdAt.slice(11, 19)}
              </Text>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>
                {detail?.fromName == name || detail.fromPhone == phone
                  ? t("transfer to")
                  : t("received from")}
              </Text>
              <View style={{ alignItems:"flex-end" }}>
                <Text style={Styles.detailTxt}>
                  {detail?.fromName == name ? detail?.toName : detail?.fromName}
                </Text>
                <Text style={Styles.detailTxt}>
                  {detail?.fromPhone == phone
                    ? detail?.toPhone
                    : detail?.fromPhone}
                </Text>
              </View>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("amount")}</Text>
              <Text style={Styles.detailTxt}>{detail?.amount}</Text>
            </View>
          </>
        );
      }else if(detail?.earn && detail?.capital){
       return (
         <>
           <View style={Styles.details}>
             <Text style={Styles.detailsTxt}>ID</Text>
             <Text style={Styles.detailTxt}>{detail?.id}</Text>
           </View>
           <View style={Styles.details}>
             <Text style={Styles.detailsTxt}>{t("round ID")}</Text>
             <Text style={Styles.detailTxt}>{detail?.dayId}</Text>
           </View>
           <View style={Styles.details}>
             <Text style={Styles.detailsTxt}>{t("date")}</Text>
             <Text style={Styles.detailTxt}>
               {detail?.createdAt.slice(0, 10)}
             </Text>
           </View>
           <View style={Styles.details}>
             <Text style={Styles.detailsTxt}>{t("time")}</Text>
             <Text style={Styles.detailTxt}>
               {detail?.createdAt.slice(11, 19)}
             </Text>
           </View>
           <View style={Styles.details}>
             <Text style={Styles.detailsTxt}>{t("capital")}</Text>
             <Text style={Styles.detailTxt}>{detail?.capital}</Text>
           </View>
           <View style={Styles.details}>
             <Text style={Styles.detailsTxt}>{t("times")}</Text>
             <Text style={Styles.detailTxt}>{detail?.times}</Text>
           </View>
           <View style={Styles.details}>
             <Text style={Styles.detailsTxt}>{t("number")}</Text>
             <Text style={Styles.detailTxt}>{detail?.luckyNo}</Text>
           </View>
           <View style={Styles.details}>
             <Text style={Styles.detailsTxt}>{t("earn")}</Text>
             <Text style={Styles.detailTxt}>{detail?.earn}</Text>
           </View>
         </>
       );
      }else if(detail?.dayId && detail?.owner){
         return (
           <>
             <View style={Styles.details}>
               <Text style={Styles.detailsTxt}>ID</Text>
               <Text style={Styles.detailTxt}>{detail?._id}</Text>
             </View>
             <View style={Styles.details}>
               <Text style={Styles.detailsTxt}>{t("round ID")}</Text>
               <Text style={Styles.detailTxt}>{detail?.dayId}</Text>
             </View>
             <View style={Styles.details}>
               <Text style={Styles.detailsTxt}>{t("date")}</Text>
               <Text style={Styles.detailTxt}>
                 {detail?.date + "/ " + detail?.month + "/ " + detail?.year}
               </Text>
             </View>
             <View style={Styles.details}>
               <Text style={Styles.detailsTxt}>{t("time")}</Text>
               <Text style={Styles.detailTxt}>
                 {detail?.createdAt.slice(11, 19)}
               </Text>
             </View>
             <View style={Styles.details}>
               <Text style={Styles.detailsTxt}>{t("status")}</Text>
               <Text style={Styles.detailTxt}>{detail?.finished?t("processed"):t("on going")}</Text>
             </View>
             <View style={Styles.details}>
               <Text style={Styles.detailsTxt}>{t("amount")}</Text>
               <Text style={Styles.detailTxt}>{detail?.amount}</Text>
             </View>
           </>
         );

      }else {
        return (
          <>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("type")}</Text>
              <Text style={Styles.detailTxt}>{detail?.type}</Text>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>ID</Text>
              <Text style={Styles.detailTxt}>{detail?._id}</Text>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("date")}</Text>
              <Text style={Styles.detailTxt}>
                {detail?.updatedAt.slice(0, 10)}
              </Text>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("time")}</Text>
              <Text style={Styles.detailTxt}>
                {detail?.updatedAt.slice(11, 19)}
              </Text>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("status")}</Text>
              <Text style={Styles.detailTxt}>{detail?.status}</Text>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("method")}</Text>
              <Text style={Styles.detailTxt}>{detail?.method}</Text>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("payment")}</Text>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={Styles.detailTxt}>{detail?.name}</Text>
                <Text style={Styles.detailTxt}>{detail?.phone}</Text>
              </View>
            </View>
            <View style={Styles.details}>
              <Text style={Styles.detailsTxt}>{t("amount")}</Text>
              <Text style={Styles.detailTxt}>{detail?.amount}</Text>
            </View>
          </>
        );
      }
     
    }
    return (
      <View style={Styles.Container}>
        <AntDesign
          name="checkcircle"
          size={60}
          color={colors.app_1}
          style={Styles.detailTop}
        />
        <Text style={Styles.detailTxt}>{t("payment successful")}</Text>
        <Text style={Styles.detailAmount}>
         {sig}
          {detail?.amount || detail?.earn}
        </Text>
        <View style={Styles.line}></View>
       <BottomFnc/>
      </View>
    );
}