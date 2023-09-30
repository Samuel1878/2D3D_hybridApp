import { useContext, useEffect, useState } from "react";
import GlobalContext from "./globalContext";
const Global = ({children})=>{
    const [isLoading, setIsLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [name , setName] = useState(null);
    const [money, setMoney] = useState(null);
    const [phone, setPhone] = useState(null);
    const [level, setLevel] = useState(null);
    const [profile, setProfile] = useState(null);
    const [navigation, setNavigation] = useState(null);
    const [history, setHistory] = useState([]);
    const [payments, setPayments] = useState([]);
    const [marketOpen, setMarketOpen] = useState(false);
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
          loggedIn,
          setLoggedIn,
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
          history,
          setHistory,
          payments,
          setPayments
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
}
export default Global;
