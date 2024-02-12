import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import LocalContext from "./localContext";
import { useColorScheme } from "react-native";
const Local = ({children}) =>{
    const [lang,setLang] = useState("en");
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState(colorScheme || "dark")
    const [sendTo, setSendTo] = useState("");
    const [detail, setDetail] = useState({});
    const [receipts,setReceipts] = useState({});
    const [depoMethod, setDepoMethod] = useState("");
    const [withMethod,setWithMethod] = useState("");
    const [deposit,setDeposit] = useState("");
    const [withDraw,setWithdraw] = useState("");
    const [forgetNo, setForgetNo] = useState("");
    const [vouchers ,setVouchers] = useState({});
   

    useEffect(()=>{
      const getTheme = async()=> {
        try{
          const savedTheme = await SecureStore.getItemAsync("theme");
          savedTheme && setTheme(savedTheme);
        }catch (error){
          console.log("Error loading theme:", error);
        }
      }
      getTheme();
    },[]);
    const toggleTheme = (newTheme) => {
      setTheme(newTheme);
      SecureStore.setItemAsync("theme",newTheme);
    };
    const useSystemTheme = () => {
      setTheme(colorScheme);
      SecureStore.setItemAsync("theme",colorScheme)
    };
    return (
      <LocalContext.Provider
        value={{
          lang,
          setLang,
          setSendTo,
          sendTo,
          detail,
          setDetail,
          depoMethod,
          setDepoMethod,
          withMethod,
          setWithMethod,
          deposit,
          setDeposit,
          withDraw,
          setWithdraw,
          forgetNo,
          setForgetNo,
          vouchers,
          setVouchers,
          receipts,
          setReceipts,
          theme,
          toggleTheme,
          useSystemTheme
        }}
      >
        {children}
      </LocalContext.Provider>
    );
}
export default Local ;