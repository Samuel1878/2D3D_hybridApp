import { imagefrombuffer } from "imagefrombuffer";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import AuthContext from "../auth/authContext";
import btoa from "btoa";
import Blob from "blob"
const Global = ({ children }) => {
  const { userToken } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState(null);
  const [money, setMoney] = useState(null);
  const [phone, setPhone] = useState(null);
  const [level, setLevel] = useState(null);
  const [profile, setProfile] = useState(null);
  const [proType, setProType] = useState(null);
  const [navigation, setNavigation] = useState(null);
  const [payments, setPayments] = useState([]);
  const [pin, setPin] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [topUp, setTopUp] = useState([]);
  const [history_2D, setHistory_2D] = useState([]);
  const [history_3D, setHistory_3D] = useState([]);
  const [isMarketOpen, setIsMarketOpen] = useState(false);
  //  useEffect(()=>{history_2D?.reverse()},[history_2D])

  // useEffect(()=>{
  //    if(loadedD){
  //     // setHistory(userData.history)
  //     setLevel(userData.level)
  //     setName(userData.name);
  //     setMoney(userData.money);
  //     setPhone(userData.phone);
  //     setIsLoading(false);
  //     setProfile(userData.image)
  //     setPayments(userData.payments);
  //     // setTransactions(userData.transactions);
  //     // setReceive(userData.receive);
  //     setPin(userData.pin)
  //     return
  //     }else{
  //         setIsLoading(true)
  //     }
  // },[loadedD])
  useEffect(() => {
    if (profile === null) {
      setProfile(require("../../../assets/profile.png"));
      return;
    }  

      // const img = imagefrombuffer({ type: proType, data: profile });
      // setProfile(img);
      
      // let bin = "";
      //  let byte  = new Uint8Array(profile);
      //  var blob = new Blob([byte],{type:proType});
      // var url = window.URL || window.webkitURL;
      // var image = url.createObjectURL(blob)
      // let len = byte.byteLength;
      // for (let i = 0; i <len; i++) {
      //   const element = byte[i];
      //   bin += String.fromCharCode(element);adsf
      // }
      //let String_array = String.fromCharCode.apply(null,TYPED_ARRAY);
      // let String_array = TYPED_ARRAY.reduce((data,byte)=>{
      //   return data + String.fromCharCode(byte)
      // })
      //const buffer64 = Buffer.from(profile, "binary").toString("base64");
      // const buffer64 = fs.readFile(profile, { encoding: 'base64' })
      // const base64string = btoa(String.fromCharCode(...new Uint8Array(profile)));
      console.debug(profile.toString("base64"));
      
    
      // setProfile((prev)=>({ uri: `data:${proType};base64,` + prev }));
     // let Final_A = btoa(bin);
      // const d = { uri:`data:${proType};base64,` + bin};
      // console.debug(d);
      //setProfile(d)
    //   return

    // }
    
  }, [profile]);
  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,
        name,
        setName,
        money,
        setMoney,
        phone,
        setPhone,
        level,
        setLevel,
        profile,
        setProfile,
        navigation,
        setNavigation,
        payments,
        setPayments,
        setPin,
        pin,
        transactions,
        setTransactions,
        topUp,
        setTopUp,
        history_2D,
        setHistory_2D,
        history_3D,
        setHistory_3D,
        isMarketOpen,
        setIsMarketOpen,
        proType,
        setProType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default Global;
