import { useContext, useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import AuthContext from "../auth/authContext";

const Global = ({children})=>{
    const { userToken } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [name , setName] = useState(null);
    const [money, setMoney] = useState(null);
    const [phone, setPhone] = useState(null);
    const [level, setLevel] = useState(null);
    const [profile, setProfile] = useState(null);
    const [navigation, setNavigation] = useState(null);
    const [payments, setPayments] = useState([]);
    const [pin, setPin] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [topUp, setTopUp]= useState([]);
    const [history_2D, setHistory_2D] = useState([]);
    const [history_3D, setHistory_3D] = useState([]);
    // const [marketOpen, setMarketOpen] = useState(false);
//  useEffect(()=>{history?.reverse()},[history])
        
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
           return
         }
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
          topUp,setTopUp,
          history_2D,
          setHistory_2D,
          history_3D,
          setHistory_3D
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
}
export default Global;
