
import { useContext, useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import AuthContext from "../auth/authContext";
const Global = ({ children }) => {
  // const { userToken } = useContext(AuthContext);
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
  useEffect(() => {
    if (!profile && !proType) {
      setProfile(require("../../../assets/profile.png"));
      return;
    }  
       console.debug(profile);
      
    
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
