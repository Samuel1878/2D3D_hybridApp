import { useContext, useEffect } from "react";
import GlobalContext from "../services/global/globalContext";
import axios from "axios"
import { USER_DATA } from "./config";

const restoreUserData = token =>{
     const {
       setLoggedIn,
       setName,
       setMoney,
       setPhone,
       setLevel,
       setProfile,
       setHistory,
       setPayments
     } = useContext(GlobalContext);
     useEffect(()=>{
          token && axios
               .get(USER_DATA, {
                 params: { token: token },
                 headers: { "Content-Type": "application/json" },
               })
               .then((res) => {
                 if (res.data.code === 201) {
                    setLoggedIn(true);
                   setName(res.data.name);
                   setMoney(res.data.money);
                   setLevel(res.data.level);
                   setProfile(res.data.image);
                   setPhone(res.data.phone);
                   setHistory(res.data.history)
                   setPayments(res.data.payments)
                 
                 } else {
                   setLoggedIn(false);
                   console.debug(res.data?.message);
                 }
               })
               .catch((err) => console.warn(err));
        
     },[]);

}
export default restoreUserData;
  