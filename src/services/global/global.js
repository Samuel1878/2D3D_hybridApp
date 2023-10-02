import { useContext, useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import AuthContext from "../auth/authContext";
import restoreUserData from "../../hooks/fetchUserData";
const Global = ({children})=>{
    const { userToken } = useContext(AuthContext);
    const [userData, loadedD] = restoreUserData(userToken);
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
    // const [marketOpen, setMarketOpen] = useState(false);

         console.log(userData);
    useEffect(()=>{
       if(loadedD){
        setHistory(userData.history)
        setLevel(userData.level)
        setName(userData.name);
        setMoney(userData.money);
        setPhone(userData.phone);
        setIsLoading(false);
        setProfile(userData.image)
        setPayments(userData.payments);
        return
        }else{
            setIsLoading(true)
        }
    },[loadedD])
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
