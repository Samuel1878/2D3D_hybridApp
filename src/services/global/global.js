
import { useContext, useEffect, useState } from "react";
import GlobalContext from "./globalContext";
const Global = ({ children }) => {
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

  const [dataRef, setDataRef] = useState(false);
  const [userRef, setUserRef] = useState(false);
  useEffect(() => {
    if (!profile && !proType) {
      setProfile(require("../../../assets/profile.png"));
      return;
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
        userRef,
        setUserRef
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default Global;
